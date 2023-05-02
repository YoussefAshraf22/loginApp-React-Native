import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import ResturantScreen from '../screens/ResturantScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import RootClientTab from './ClientTab';
import MapScreen from '../screens/MapScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen'
import Login from '../src/screens/Login'
import Registration from '../src/screens/Registration'
import ForgetPass from '../src/screens/ForgetPass'
const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      {/* {<Auth.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
      />
      <Auth.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name='SignupScreen'
        component={SignupScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      /> */}
      <Auth.Screen
        name='WelcomeScreen'
        component={WelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
      <Auth.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
    
      <Auth.Screen
        name='RootClientTab'
        component={RootClientTab}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      /> 
       <Auth.Screen
        name='ForgetPass'
        component={ForgetPass}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
       <Auth.Screen
        name='Registration'
        component={Registration}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
      <Auth.Screen
        name='ResturantScreen'
        component={ResturantScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
      <Auth.Screen
        name='MapScreen'
        component={MapScreen}
        options={{
          headerShown: true,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
