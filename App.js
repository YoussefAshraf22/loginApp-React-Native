//npx expo start --dev-client

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'expo-dev-client';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgetPass from './screens/ForgetPass';
import Profile from './screens/Profile';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen'component={HomeScreen}/>
        <Stack.Screen name='LoginScreen'component={LoginScreen}/>
        <Stack.Screen name='SignupScreen'component={SignupScreen}/>
        <Stack.Screen name='ForgetPass'component={ForgetPass}/>
        <Stack.Screen name='Profile'component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}