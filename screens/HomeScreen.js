import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Você está logado.</Text>
        <Button
          title="Sair"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
});
