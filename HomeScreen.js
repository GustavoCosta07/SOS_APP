import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

// Importar a barra de navegação superior
import TopNav from './TopNav'; // Certifique-se de substituir o caminho pelo correto
import WelcomeMessage from './WelcomeMessage';
import CallInfo from './CallInfo';
import OrderCard from './OrderCard';

export default function HomeScreen({ navigation }) {

  const openMenu = () => {
    alert('Fazer o menu');
  };

  return (
    <View style={styles.container}>
      {/* Incluir a barra de navegação superior */}
      <TopNav title="SOS DOS ELEVADORES" onMenuPress={openMenu} />
      <WelcomeMessage username="Gustavo" />
      <CallInfo callCount={8} countFontSize={30} />
      <View style={styles.content}>
        {/* <Text style={styles.title}>Bem-vindo!</Text> */}
        {/* <Text style={styles.subtitle}>Você está logado.</Text> */}


      </View>
      <ScrollView style={styles.scrollView}>
        <OrderCard
          orderNumber={1}
          description="Descrição da Ordem 1"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={2}
          description="Descrição da Ordem 2"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={3}
          description="Descrição da Ordem 3"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={4}
          description="Descrição da Ordem 4"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={5}
          description="Descrição da Ordem 5"

        />
        <OrderCard
          orderNumber={6}
          description="Descrição da Ordem 6"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={7}
          description="Descrição da Ordem 7"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
        <OrderCard
          orderNumber={8}
          description="Descrição da Ordem 8"
          openDate="2023-08-11"
          directedDate="2023-08-12"
        />
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
