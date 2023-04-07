import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';
import ForgetPass from './ForgetPass';
import auth from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

//google auth
import 'expo-dev-client';

const Stack = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();

  //get data from user to build it in firebase
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  //google auth

  //Handlers Function
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        console.log('DONE!');
        window.alert('Wellcome Back ☺');
        const user = userCredential.user;
        navigation.navigate('Profile');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Find error
        console.log(errorMessage);
        window.alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Sign in</Text>
      <Image
        source={require('../assets/login2.png')}
        style={[styles.img, { height: height * 0.4 }]}
        resizeMode='contain'
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={Password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signUp}>LogIn</Text>
      </TouchableOpacity>

      <Text style={styles.acc}>
        Haven't an Account ?
        <Text
          style={[styles.acc, styles.link]}
          onPress={() => navigation.navigate('SignupScreen')}
        >
          Signup
        </Text>
      </Text>

      <Text
        style={[styles.acc, styles.link]}
        onPress={() => navigation.navigate('ForgetPass')}
      >
        Forget your password ?
      </Text>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    fontSize: 18,
    borderRadius: 20,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1f97ff',
  },
  signUp: {
    fontSize: 18,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginTop: 5,
  },
  account: {
    alignItems: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  acc: {
    fontWeight: 'bold',
    marginTop: 26,
    fontSize: 17,
  },
  link: {
    color: '#3b82f6',
  },
  img: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
});
