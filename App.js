import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
    if (username === '1' && password === '1') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Acessar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E54C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 36,
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#4E54C8',
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    fontFamily: 'Arial',
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonText: {
    color: '#4E54C8',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'

  }
})












// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image  } from 'react-native';

// export default function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implemente a lógica de autenticação aqui
//     if (username === '1' && password === '1') {
//       alert('Login bem-sucedido!');
//     } else {
//       alert('Usuário ou senha incorretos.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//        <Image source={require('./assets/logo.png')} style={styles.logo} />
//       <Text style={styles.title}>Acessar</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Login"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Senha"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>
//       <TouchableOpacity
//         style={styles.loginButton}
//         onPress={handleLogin}
//       >
//         <Text style={styles.loginButtonText}>Entrar</Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4E54C8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 20,
//     fontFamily: 'Arial', 
//     color: '#4E54C8',
//     textAlign: 'center'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     fontFamily: 'Arial', 
//     color: '#fff',
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#CCC',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 10,
//     padding: 15,
//     fontFamily: 'Arial', 
//     backgroundColor: 'white',
//   },
//   loginButton: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginButtonText: {
//     color: '#4E54C8',
//     fontSize: 18,
//     fontWeight: 'bold',
//     fontFamily: 'Arial', 
//   },
//   logo: {
//     width: 200, // Defina o tamanho da imagem conforme necessário
//     height: 200,
//     resizeMode: 'contain', // Ajusta o redimensionamento da imagem
//     marginBottom: 20,
//   }
// });