import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote de ícones instalado

const TopNav = ({ title, onMenuPress }) => {
  return (
    <View style={styles.topNav}>
      {/* Ícone de hambúrguer */}
      <Ionicons
        name="ios-menu"
        size={30}
        color="#fff"
        onPress={onMenuPress}
        style={styles.menuIcon}
      />
      
      {/* Título */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row', // Para alinhar o ícone e o título lado a lado
    backgroundColor: '#4E54C8',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center', // Para centralizar verticalmente
  },
  menuIcon: {
    marginRight:30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default TopNav;
