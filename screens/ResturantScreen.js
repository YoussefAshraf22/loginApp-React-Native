import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable, 
  Image
} from 'react-native';
import { colors, Icon } from 'react-native-elements';
import ResturantHeader from '../components/ResturantHeader';
import { Colors, parameters } from '../global/styles';
import { filterData } from '../global/data';
const ResturantScreen = ({ navigation }) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <ResturantHeader />
      <ScrollView
        //make the bage scrolled
        stickyHeaderIndices={[1]}
        showsHorizontalScrollIndicator={true}
      >
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity
              //daynamic change
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.buttons : Colors.grey5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                //daynamic change
                setDelivery(false);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? Colors.grey5 : Colors.buttons,
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View // location and clock
            style={styles.main}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 15,
              }}
            >
              <Icon
                type='material-community'
                name='map-marker'
                color={Colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 2 }}>New Cairo Street</Text>
            </View>

            <View style={styles.clock}>
              <Icon
                type='material-community'
                name='clock-time-four'
                color={Colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 2 }}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type='material-community'
              name='tune'
              color={Colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>

        <View //cards list
        >
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 15 }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Free Delivery Now</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ResturantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    backgroundColor: Colors.grey5,
    borderRadius: 15,
    paddingVertical: 4,
    marginVertical: 5,
    marginHorizontal: 13,
    paddingHorizontal: 13,
    justifyContent: 'space-between',
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 25,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    // marginVertical:10
  },
  clock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: Colors.cardbackground,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 4,
  },
  headerText: {
    color: Colors.grey1,
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  headerTextView: {
    backgroundColor: Colors.grey5,
    paddingVertical: 2,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: Colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: Colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardText: {
    fontWeight: 'bold',
    colo:Colors.grey2
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    colo:Colors.cardbackground
  }
});
