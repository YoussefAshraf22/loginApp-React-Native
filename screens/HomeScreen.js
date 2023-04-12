import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
import ResturantHeader from '../components/ResturantHeader';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.title}>Welcome To My Authentication App ♥ </Text>
      <Image
        source={require('../assets/login.png')}
        style={[styles.img, { height: height * 0.5 }]}
        resizeMode='contain'
      />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signIn}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signUp}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  head: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '##fff',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  head: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#1f97ff',
  },
  signUp: {
    fontSize: 18,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 20,
    marginBottom: 15,
  },
  signIn: {
    fontSize: 18,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 20,
    marginBottom: 15,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
