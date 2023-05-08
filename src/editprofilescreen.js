import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ImageBackground,
  style,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  Avatar,
  Title,
  caption,
  Text,
  TouchableRipple,
  Caption,
  TextInput,
  useTheme,
} from "react-native-paper";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';;
import Icon2 from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
// import CustomButton from "../components/customButton";
import { signOut } from "firebase/auth";
import OIP from "./images/OIP.jpg";
import * as ImagePicker from "expo-image-picker";
import Header from "./views/components/Header";
import Input from './views/components/Input';
import {storage} from '../firebase';
import{ref,uploadBytes,getDownloadURL} from "firebase/storage"


// import files from '../assets/filesBase64';
// import Share from 'react-native-share';


// import { fontConfig } from "react-native-paper/lib/typescript/src/styles/fonts";

const editprofilescreen = ({ navigation }) => {
  const [fullname, setfullname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [photo, setPhoto] = useState(null);
  const [viewMode, setViewMode] = useState(true);
  const { colors } = useTheme();
  const [url,setUrl]=useState(null);

  // const myCustomShare = async() => {
  //   const shareOptions = {
  //     message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //     url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   }

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Done");
        navigation.navigate("WelcomeScreen");
        
        const subscription = AppState.addEventListener('change', myHandlerFunction);

// To remove the listener:
        subscription.remove();
      })
      .catch((error) => {
        // An error happened.
      });
  };

// const handlePhotoChange=(e)=>{
//   if(e.target.files[0]){
//     setPhoto(e.target.files[0]);
//   }
// }

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.uri);
    }
  };

  const handleSubmit = () => {
    setViewMode(true);
    handleUpdate();
    // navigation.navigate("EditProfileScreen");
  };
  const handleUpdate = async () => {
    const washingtonRef = doc(db, "users", auth.currentUser.uid);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      name: fullname,
      lastName: lastName,
      phone: phone,
      birthday: birthday,
      photo: photo,
    });

    const imageRef=ref(storage,"photo");
    uploadBytes(imageRef,photo)
    .then(()=>{
      getDownloadURL(imageRef)
      .then((uri)=> {
        setUrl(uri);
      })
      .catch((error)=>{
        console.log(error.massage,"error getting the image url");
      });
      setPhoto(null)
    })
    .catch((error)=>{
      console.log(error.massage);
    })
  };

  const getUser = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setEmail(data.email);
      setfullname(data.name);
      setLastName(data.lastName);
      setPhone(data.phone);
      setPhoto(data.photo);
      setBirthDay(data.birthday);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const handleEdit = () => {
    setViewMode(false);
  };

  {
    viewMode ? getUser() : null;
  }
  return (
    <View style={styles.container}>
      {viewMode ? (
        <View style={{ margin: 0 }}>
          <View style={{backgroundColor:"#ff8c52",display:"flex",flex:2,width:"100%",height:"50%",padding:-1,margin:-1,borderRadius:"5%",}}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={photo === "" ? img1 : photo}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View
                    style={{
                      justifyContent: "center", alignItems: "center",
                      flex: 1,
                    }}
                  >
                    {/* <Icon1
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#fff",
                      }}
                    /> */}
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
              </View>
            <Text style={{ marginRight: 10, fontSize: 18, fontWeight: "bold" ,color:"white"}}>
              {email}

            </Text>
          </View>
              {/* <h2 style={{ color:"darkblue", fontWeight: "bold",marginLeft:"20%" }}>{auth.currentUser.email} </h2> */}
        
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <Text
              style={[styles.textInput, { color: colors.text }]}

              // onChangeText={setFirstName}
            >
              {fullname}
            </Text>
          </View>
        
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <Text
              style={[styles.textInput, { color: colors.text }]}

              // onChangeText={setFirstName}
            >
              {lastName}
            </Text>
          </View>
          <View style={styles.action}>
            <Feather name="smartphone" color={colors.text} size={20} />
            <Text
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]} // onChangeText={setPhone}
            >
              {phone}
            </Text>
          </View>
          <View style={styles.action}>
            <Icon2 name="date-range" color={colors.text} size={20} />
            <Text
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              // onChangeText={setBirthDay}
            >
              {birthday}
            </Text>
          </View>
        
          <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>5</Title>
            <Caption>Orders</Caption>
          </View>
      </View>


      
 <View style={styles.menuWrapper}>
        <TouchableRipple onPress={()=>navigation.navigate("MyFavorites")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>My Favorites</Text>
          </View>   
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate("Login")}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple 
        // onPress={myCustomShare}
        >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Share</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={handleEdit}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Edit</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={handleSignOut}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
          
          {/* <TouchableOpacity onPress={handleEdit} style={styles.commandButton}>
            <Text style={styles.panelButtonTitle}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.commandButton}
          >
            <Text style={styles.panelButtonTitle}>Log Out</Text>
          </TouchableOpacity> */}
        </View>
      ) : (
        <View>
            <Header title={"Edit Profile"}type={'arrow-left'} navigation={navigation}/>
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={handleChoosePhoto}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {photo ? (
                  <Image source={{ uri: photo }} style={styles.photo} />
                ) : (
                  <ImageBackground
                    source={OIP}
                    style={{ height: 100, width: 100 }}
                    imageStyle={{ borderRadius: 15 }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                      }}
                    >
                      <Icon1
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          borderRadius: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 1,
                          borderColor: "#fff",
                        }}
/>
                    </View>
                  </ImageBackground>
                )}
              </View>
            </TouchableOpacity>
            <Text style={{ marginRight: 10, fontSize: 18, fontWeight: "bold" }}>
              {email}
            </Text>
          </View>
          <View style={styles.action}>
          <Input  iconName="user"placeholder="Edit First Name"
              value={fullname}
              onChangeText={setfullname}
            />
          </View>
          <View style={styles.action}>
          <Input  iconName="user"placeholder="Edit Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.action}>
            <Input  iconName="mobile-alt"placeholder="Edit Phone Number"
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.action}>
            <Input  iconName="Date"placeholder="Edit Location"
               onChangeText={setBirthDay} />
             
          </View>
          <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.menuItem}>
            <Icon name="logout" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Submit</Text>
          </View>          
          </TouchableOpacity>
        </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
    marginTop:15,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#de8e59",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  photo: {
    width: 90,
    height: 90,
    borderRadius: 75,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginHorizontal:20,
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 15,
color: "#05375a",
  },
});
export default editprofilescreen;
// {/* <Text></Text> */}