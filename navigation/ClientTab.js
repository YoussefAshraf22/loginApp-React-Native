import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResturantScreen from '../screens/ResturantScreen';
import { Colors } from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import Profile from '../screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';

export default function RootClientTab() {
  const ClientTab = createBottomTabNavigator();
  return (
    <ClientTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.buttons,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          let tabBarIcon;
          if (route.name === 'ResturantScreen') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
            colour = focused ? 'orange' : 'gray';
          } else if (route.name === 'SearchScreen') {
            iconName = focused ? 'ios-search-sharp' : 'ios-search-outline';
            colour = focused ? 'orange' : 'gray';
          } else if (route.name === 'MyOrderScreen') {
            iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
            colour = focused ? 'orange' : 'gray';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-sharp' : 'ios-person-outline';
            colour = focused ? 'orange' : 'gray';
          }
          return (
            <Ionic
              name={iconName}
              size={size}
              color={colour}
            />
          );
        },
      })}
    >
      <ClientTab.Screen
        name='ResturantScreen'
        component={ResturantScreen}
        options={{ headerShown: false }}
      />
      <ClientTab.Screen
        name='SearchScreen'
        component={SearchScreen}
      />
      <ClientTab.Screen
        name='MyOrderScreen'
        component={MyOrderScreen}
      />
      <ClientTab.Screen
        name='Profile'
        component={Profile}
      />
    </ClientTab.Navigator>

    // <ClientTab.Navigator
    //   tabBarOptions={{
    //     activeTintColor: Colors.buttons,
    //   }}
    // >
    //   <ClientTab.Screen
    //     name='ResturantScreen'
    //     component={ResturantScreen}
    //     options={{
    //       headerShown: false,
    //       tabBarLabel: 'home ',
    //       tabBarIcon: ({ color, size }) => {
    //         <Icon
    //           name='Home'
    //           type='material-community'
    //           color={color}
    //           size={size}
    //         />;
    //       },
    //     }}
    //   />
    //   <ClientTab.Screen
    //     name='SearchScreen'
    //     component={SearchScreen}
    //     options={{
    //       headerShown: false,
    //       tabBarLabel: 'Search',
    //       tabBarIcon: ({ color, size }) => {
    //         <Icon
    //           name='search'
    //           type='material'
    //           color={color}
    //           size={size}
    //         />;
    //       },
    //     }}
    //   />
    //   <ClientTab.Screen
    //     name='MyOrderScreen'
    //     component={MyOrderScreen}
    //     options={{
    //       headerShown: false,
    //       tabBarLabel: 'MyOrderScreen',
    //       tabBarIcon: ({ color, size }) => {
    //         <Icon
    //           name='view-list'
    //           type='material'
    //           color={color}
    //           size={size}
    //         />;
    //       },
    //     }}
    //   />
    //   <ClientTab.Screen
    //     name='Profile'
    //     component={Profile}
    //     options={{
    //       headerShown: false,
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({ color, size }) => {
    //         <Icon
    //           name='person'
    //           type='material'
    //           color={color}
    //           size={size}
    //         />;
    //       },
    //     }}
    //   />
    //</ClientTab.Navigator>
  );
}
