import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderCard = ({ orderNumber, description, openDate, directedDate }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.orderNumber}>Ordem #{orderNumber}</Text>
      <Text style={styles.subText}>
        <Text style={styles.boldText}>Aberto dia:</Text>{" "}
        <Text style={styles.lightText}>{openDate}</Text>
      </Text>
      <Text style={styles.subText}>
        <Text style={styles.boldText}>Direcionado dia:</Text>{" "}
        <Text style={styles.lightText}>{directedDate}</Text>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
  },
  boldText: {
    fontWeight: 'bold',
    color: 'grey', // Sua cor preferida para o texto em negrito
  },
  lightText: {
    color: 'grey', // Sua cor preferida para o texto não em negrito
  },
  button: {
    backgroundColor: '#4E54C8',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrderCard;
