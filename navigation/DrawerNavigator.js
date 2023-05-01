import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTab from './ClientTab';
import { Icon } from 'react-native-elements';
import { Colors } from '../global/styles';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='RootClientTab'
        component={RootClientTab}
        options={{
          title: 'Client',
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type='material-community'
              name='home'
              color={focussed ? '#7cc' : Colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}