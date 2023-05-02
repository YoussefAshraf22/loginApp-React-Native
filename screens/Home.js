import React from 'react'
import { View, ScrollView, TouchableOpacity, Image ,Text,TouchableRipple,Icon, SafeAreaView, StyleSheet} from "react-native"
  const Home = () => {
  return (
    <View>
        <ScrollView>
        <View style={{ padding: 10, width: '100%', backgroundColor: '#000', height: 150 }}>
          <TouchableOpacity>
            <Image source={require('../img/Back.png')}
              style={{ width: 30, height: 30 }}></Image>

          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../img/r.jpg')} style={{ width: 140, height: 140, borderRadius: 100, marginTop: -70 }}></Image>
          <Text style={{ fontSize: 40, fontWeight: 'Bold', padding: 10 }}>Mohamed Khaled</Text>
          <Text style={{ fontSize: 10, fontWeight: 'Bold', color: 'grey' }}>Male , 21</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpasity: 80,
          elevation: 15,
          marginTop: 20,
          marginBottom: 20
        }}>
            <Image source={require('../img/order.jpg')} style={{ width: 30, height: 30, borderRadius: 10, marginTop: -5 }}></Image>
           
            <Text style={{ fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 5 }}>My Orders</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: -25,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpasity: 80,
          elevation: 15,
          marginTop: 10,
          marginBottom: 20
        }}>
            <Image source={require('../img/email.png')} style={{ width: 25, height: 25, borderRadius: 10, marginTop: -2 }}></Image>
           
            <Text style={{ fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 5 }}>mokh0453704@gmail.com</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: -25,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpasity: 80,
          elevation: 15,
          marginTop: 10,
          marginBottom: 20
        }}>
            <Image source={require('../img/phone.jpg')} style={{ width: 25, height: 25, borderRadius: 10, marginTop: -2 }}></Image>
           
            <Text style={{ fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 5 }}>01023816232</Text>
        </View>

        <TouchableOpacity style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpasity: 80,
          elevation: 15,
          marginTop: 20,
          marginBottom: 40,
          backgroundColor: '#000'
        }}>
          <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold', marginLeft: 10 }}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '30%',
        padding: 20,
        paddingBottom: 22,
        borderRadius: 10,
        shadowOpasity: 80,
        elevation: 15,
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '##dde3f4',
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26}}>
          <Image source={require('../img/set.png')} style={{ width: 25, height: 25, borderRadius: 10, marginTop: -2 }}></Image>
          <Text style={{alignSelf: 'center',fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 10}}>Settings</Text>
          </TouchableOpacity>

        </ScrollView>
    </View>

  )
const styles = StyleSheet.create({
    menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
      })
}
  
  export default Home
