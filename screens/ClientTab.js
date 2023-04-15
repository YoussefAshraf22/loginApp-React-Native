import React from "react";
import { Icon } from "react-native-elements";
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import ResturantScreen from "./ResturantScreen";
import {colors} from "../global/styles";
const ClientTab=createBottomTabNavigator();
export default function RootClientTab(){

return(
    <ClientTab.Navigator
    tabBarOptions={{

        activeTintColor:colors.buttons
    }}
    >
        <ClientTab.Screen
        name="ResturantScreen"
        component={ResturantScreen}
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color,size})=>{
                <Icon
                name="Home"
                    type="matrial"
                    color={color}
                    size={size}
                >
                    

                </Icon>
            }
        }}
        />
    </ClientTab.Navigator>
);

}