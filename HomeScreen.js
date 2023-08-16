import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TopNav from './TopNav';
import WelcomeMessage from './WelcomeMessage';
import CallInfo from './CallInfo';
import OrderCard from './OrderCard';

export default function HomeScreen({ navigation }) {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Função para fazer a solicitação à API e obter os dados das ordens
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://grupofmv.app.br/api/v1/integracao/chamados'); // Substitua pela URL da sua API
        const data = await response.json();
        setOrders(data); // Atualiza o estado com os dados das ordens
      } catch (error) {
        console.error('Erro ao obter dados das ordens:', error);
      }
    };

    fetchOrders(); // Chama a função de solicitação à API ao carregar a tela
  }, []);

  const openMenu = () => {
    alert('Fazer o menu');
  };

  return (
    <View style={styles.container}>
      <TopNav title="SOS DOS ELEVADORES" onMenuPress={openMenu} />
      <WelcomeMessage username="Gustavo" />
      <CallInfo callCount={orders.length} countFontSize={30} />
      <ScrollView style={styles.scrollView}>
        {orders.map(order => (
          <OrderCard
            key={order.id} // Certifique-se de ter um identificador único para cada ordem
            orderNumber={order.idChamado}
            description={order.idChamado}
            openDate={order.chamadoDataReferencia}
            directedDate={order.chamadoDataReferencia}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos...



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: '#4E54C8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
