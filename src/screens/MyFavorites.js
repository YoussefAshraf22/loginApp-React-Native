import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const MyFavorites = ({ navigation }) => {
  return (
    <View>
      <Text>My Favorites</Text>
    </View>
  )
}

export default MyFavorites

const styles = StyleSheet.create({})