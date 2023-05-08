import React from "react";
import { View, Button,ScrollView,Image ,TouchableOpacity} from "react-native-web";
import Input from "./views/components/Input";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native-web";
import auth from "../firebase";
import image from "../assets/foods/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg"
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen=({navigation})=> {
  const [userDetails, setUserDetails] = React.useState(null);
  React.useEffect(()=>{
    getUserData();
  },[]);

  
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      console.log(JSON.parse(userData));
      setUserDetails(JSON.parse(userData));
    }
  };

  
  const logout=({navigation})=>{
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({userDetails,loggedIn:false})
      
    )
    navigation.navigate("Login")
  }


  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', frontSize:20, color:"darkblue",backgroundColor:"white"
    }}>
        <h2>Welcome {auth.currentUser.email} </h2>
        
        <h2 >{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <img src={localStorage.getItem("profilePic")}/>
        <Input/>
        <Button style={style.button} title="Logout" onPress={(logout)=>navigation.navigate("WelcomeScreen")}/> 

      
    <View>
        <ScrollView>
          {/* <View style={{padding:10,width:"100%",backgroundColor:"#ff9e00",height:150}}>
            <TouchableOpacity>
             
            </TouchableOpacity>

          </View> */}

{/* <View style={{alignItems:"center"}}>
<Image source={require("../assets/foods/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg")} style={{width:150,height:150,borderRadius:100,marginTop:-70}}></Image>

</View> */}
</ScrollView>
    </View>
    </View>
    
  
    );
  }
  const style= StyleSheet.create({
    button:{
        height:55,
        width:"100",
        backgroundColor:"darkblue",
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
    }
  })
  export default ProfileScreen;