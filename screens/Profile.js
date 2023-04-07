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
import auth from '../firebase';
import { signOut } from 'firebase/auth';

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      window.alert('Sign-out successful.');
      navigation.navigate('HomeScreen');
    })
    .catch((error) => {
      // An error happened.
    });
};
const Profile = ({ navigation }) => {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To Your Account ☺ </Text>
      <Image
        source={require('../assets/profile.jpg')}
        style={[styles.img, { height: height * 0.5 }]}
        resizeMode='contain'
      />
      <Text style={styles.title}>Email {auth.currentUser.email} </Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.signIn}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##fff',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    //marginBottom: 130,
    color: '#1f97ff',
  },
  signIn: {
    fontSize: 18,
    backgroundColor: 'red',
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 20,
    marginTop: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
});
