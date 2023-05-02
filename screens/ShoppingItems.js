import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign , MaterialIcons } from '@expo/vector-icons';
import {db ,doc, updateDoc,deleteDoc} from "../firebase";

const ShoppingItems= (props) =>{
    const [isChacked,setIsChacked]=useState(props.isChacked);
    const updateIsChecked =async() =>{
        const shoppingRef = doc(db, "shopping", props.id);

// Set the "capital" field of the city 'DC'
await updateDoc(shoppingRef, {
  isChacked: isChacked ,
});
    };
    const deleteItem=async() =>{
        await deleteDoc(doc(db, "shopping", props.id));
        props.getShoppingList();
    };
    useEffect(()=>{
        updateIsChecked();
    },[isChacked])
    return(
        <View style={style.container}>
            <Pressable onPress={()=> setIsChacked(!isChacked)}>
            {
                isChacked ? <AntDesign name="checkcircle" size={24} color="black" /> :
                <AntDesign name="checkcircleo" size={24} color="black" />
            }    
            </Pressable>
            <Text style={style.text}>{props.title}</Text>
            <Pressable onPress={deleteItem}><MaterialIcons name="delete" size={24} color="black" /></Pressable>
        </View>
    )

}
export default ShoppingItems;

const style =StyleSheet.create({    
    container :{
        flexDirection: "row",
        backgroundColor: "gray",
        justifyContent: 'space-between',
        padding: 12 ,
        borderRadius:10 ,
        width: "90%",
        alignSelf: 'center' ,
        marginVertical:10, 
    },
    text:{
        flex: 1,
        fontSize:20,
        fontWeight:'400',
    },
}) 