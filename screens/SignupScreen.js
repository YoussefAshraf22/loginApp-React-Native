import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase';
//import img from '../assets/login.jpg';
import { ImageBackground } from 'react-native-web';
const SignupScreen = ({ navigation }) => {
  //get data from user to build it in firebase
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [userName, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { height } = useWindowDimensions();

  //Handlers Function
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, Password, userName)
      .then((userCredential) => {
        // Signed in
        console.log('DONE!');
        window.alert('Wellcome ☺');
        const user = userCredential.user;
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
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };
  const handleSubmit = () => {
    // do something with password and confirmPassword
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Image
        source={require('../assets/signup.png')}
        style={[styles.img, { height: height * 0.33 }]}
        resizeMode='contain'
      />

      <TextInput
        style={styles.input}
        placeholder='userName'
        value={userName}
        onChangeText={setName}
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
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        secureTextEntry={true}
        onChangeText={handleConfirmPasswordChange}
        value={confirmPassword}
      />

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp}>SignUp</Text>
      </TouchableOpacity>

      <Text style={styles.acc}>
        Have an Account ?
        <Text
          style={[styles.acc, styles.link]}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};
export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    fontSize: 18,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color:'#1f97ff'
  },
  title2: {
    fontSize: 24,
    //fontWeight: 'bold',
    marginTop: 5,
    marginRight: 400,
  },
  signUp: {
    fontSize: 18,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  account: {
    alignItems: 'center',
    marginTop: 30,
    fontSize: 22,
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
    width: '180%',
    height: '100%',
    marginBottom: 10,
  },
});
