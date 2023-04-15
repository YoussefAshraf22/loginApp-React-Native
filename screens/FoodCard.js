import { View, Text, StyleSheet,TouchableOpacity,Image ,Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';
import{Colors,parameters} from '../global/styles'



export default function FoodCard({
    OnPressFoodCard,
    resturantName,
    deliveryAvailable,
    discountAvailable,
    numberofReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth


}){

    return(
        <TouchableOpacity>
            <View style={{...styles.cardView,width:screenWidth}}>
<Image
style={{...styles.image,width:screenWidth}}
source={{uri:images}}
/>
<View>
                <View>
                    <Text style={styles.ResturantName}>{resturantName}</Text>
                </View>
                <View style={{flexDirection:"row",flex:1}}>
<View style={styles.distance}>
<Icon
name='place'
type='material'
color={Colors.grey4}
size={18}
iconstyle={{
    marginTop:3
}}
/>
<Text style={styles.min}>{farAway} Min</Text>
</View>
<View style={{flexDirection:"row",flex:2}}>
<Text style={styles.adrees}>
    {businessAddress}
</Text>
</View>
                </View>
            </View>
            </View>
           


            <View style={styles.review}>
<Text style={styles.average}>{averageReview}</Text>
<Text style={styles.numberofview}>{numberofReview} Review</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:Colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        height:150,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    ResturantName:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.grey1,
        marginTop:5,
        marginLeft:15
    },
    distance:{
        flex:1,flexDirection:"row",
        borderRightColor:Colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1,
        marginLeft:5,
        marginTop:3
    },
    min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        paddingRight:20,
        marginLeft:5,
        color:Colors.grey3
    },
    adrees:{
        fontSize:12,
        paddingTop:5,
        color:Colors.grey2,
        paddingHorizontal:10,

    },
    review:{
     position:"absolute",
     top:0,
     right:10,
     backgroundColor:'rgba(52,52,52,0.3)',
     padding:2,
     alignItems:'center',
     alignContent:'center',
     justifyContent:'center',
     borderTopRightRadius:5,
     borderBottomLeftRadius:12   
    },
    average:{
        fontSize:20,
        marginTop:-3,
        color:'white',
        fontWeight:'bold' 
    },
    numberofview:{
        color:'white',
        fontSize:13
    }

})