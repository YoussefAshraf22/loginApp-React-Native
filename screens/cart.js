import React ,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import ShoppingItems from '../screens/ShoppingItems';
import { MaterialIcons } from '@expo/vector-icons';
import {db,collection, addDoc ,getDocs ,deleteDoc , doc} from "../firebase";

export default function cart() { 
  const[title,setTitle] =useState('');
  const[ShoppingList,setShoppingList]=useState([]);
  const addShoppingItem=async(event) =>{
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'shopping'), {
        title:title,
        isChacked:false,
      });
      console.log('Document written with ID:', docRef.id);
      setTitle('');
      getShoppingList();
    } catch (e) {
      console.error('Error adding document: ', e);
    }

  }
  const getShoppingList = async () => {
    const querySnapshot = await getDocs(collection(db, "shopping"));
    let list = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      list.push({
        ...doc.data(),
        id: doc.id,
        key: Math.random().toString(36).substring(7) // generate a random string as the key
      });
    });
    setShoppingList(list);
  }
  const deleteList=async() =>{
    const querySnapshot =await getDocs(collection(db,"shopping"));

    querySnapshot.docs.map((item)=> deleteDoc(doc(db, "shopping", item.id)));
    getShoppingList();
  };
  useEffect(()=>{
    getShoppingList();
  },[])
  return (
        <View style={style.container}>
          <View style={style.header}>
            <Text style={style.heading}>List of items</Text>
            <Text style={style.number}>{ShoppingList.length}</Text>
            <Pressable onPress={deleteList}><MaterialIcons name="delete" size={24} color="black" /></Pressable>
          </View>    
          
           {ShoppingList.length > 0 ? (
            <FlatList
              data={ShoppingList}
              renderItem={({ item }) => <ShoppingItems
                title={item.title}
                isChacked={item.isChacked}
                id={item.id}
                getShoppingList={getShoppingList}
                key={item.key} // use the key property
              />}
              keyExtractor={item => item.key} // use the key property
            />
          ) : (
            <ActivityIndicator />
          )}
          <TextInput
            placeholder='enter name of the item'
            style={style.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            onSubmitEditing={addShoppingItem}
          />
        </View>
  );
}

const style =StyleSheet.create({
  container :{
      flex:1,
  },
  header:{
    backgroundColor:"#ff8200",
    flexDirection:"row",
    width:"100%",
    alignSelf:"center",
    padding:10,
    justifyContent:'space-between',
  },
  heading:{
    marginBottom:10,
    flex:1,
    fontSize:30,
    fontWeight:"450",
  },
  number:{
    fontSize:30,
    fontWeight:"450",
    marginRight:20 ,  
  },
  input:{
    backgroundColor:"lightgray",
    padding:10,
    fontSize:15,
    width:"90%",
    alignSelf:"center",
    borderRadius:10,
    marginTop:"auto",
    marginBottom:10,
  },
}) 