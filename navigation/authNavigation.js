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
const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      {/* <Auth.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
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
        name='RootClientTab'
        component={RootClientTab}
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
