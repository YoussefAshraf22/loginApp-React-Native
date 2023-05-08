import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { Categories, COLOURS } from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ResturantHeader from '../components/ResturantHeader';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Home = ({ navigation }) => {
  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({ item, index }) => {
    return (
      <TouchableOpacity
        // activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}
      >
        {/* catigory block */}
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected == index ? COLOURS.accent : COLOURS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}
        >
          {/* catigory image  */}
          <View style={{ width: 60, height: 60 }}>
            <Image
              source={item.image}
              style={{
                width: '120%',
                height: '110%',
                resizeMode: 'center',
              }}
            />
          </View>
          {/* catigory title  */}
          <Text
            style={{
              fontSize: 17,
              color: COLOURS.black,
              fontWeight: '600',
            }}
          >
            {item.name}
          </Text>
          {/* right button  */}
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected == index ? COLOURS.white : COLOURS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesome
              name='angle-right'
              style={{
                fontSize: 12,
                color: currentSelected == index ? COLOURS.black : COLOURS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // popular items
  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() =>
          navigation.push('details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
            navigation: navigation,
          })
        }
      >
        {/* item layout  */}
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: COLOURS.white,
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: data.isTopOfTheWeek ? 'flex' : 'none',
              }}
            >
              <FontAwesome
                name='crown'
                style={{
                  fontSize: 15,
                  color: COLOURS.accent,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  opacity: 0.8,
                  marginLeft: 5,
                  marginBottom: 5,
                }}
              >
                top of the week
              </Text>
            </View>

            <Text
              style={{
                fontSize: 22,
                color: COLOURS.black,
                fontWeight: 'bold',
                paddingTop: 10,
              }}
            >
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                opacity: 0.5,
              }}
            >
              {data.weight}
            </Text>
          </View>
          <View style={{ width: 150, height: 150, marginRight: -45 }}>
            <Image
              source={data.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
          {/* plus button  */}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: COLOURS.accent,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Entypo
                name='plus'
                style={{ fontSize: 18, color: COLOURS.black }}
              />
            </View>
            {/* star rate  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}
            >
              <AntDesign
                name='star'
                style={{ fontSize: 15, color: COLOURS.black, paddingRight: 5 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.black,
                  fontWeight: 'bold',
                }}
              >
                {data.rating}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // catigories
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLOURS.white,
            position: 'relative',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 0,
            }}
          ></View>

          <View style={{ flex: 1, marginBottom: 20 }}>
            <ResturantHeader />
          </View>

          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: '700',
              color: COLOURS.black,
              letterSpacing: 1,
            }}
          >
            Categories
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: '700',
              color: COLOURS.black,
            }}
          >
            Popular Items
          </Text>
          {Categories[currentSelected].items.map(renderItems)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
