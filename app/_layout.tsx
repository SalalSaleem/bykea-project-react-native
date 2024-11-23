
import 'react-native-reanimated';
import ImageSlider from 'react-native-image-slider';

import { Text, View , StyleSheet,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout() {
  return (
    <SafeAreaView style={{flex:1}}>

<View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between",backgroundColor:"green",height:50}}>
     <MaterialIcons name="density-medium" size={24} color={"white"}></MaterialIcons>
      <Text style={styles.logo}>Bykea </Text>
      <MaterialIcons name="search" size={24} color={"white"}></MaterialIcons>
      </View>
      <View style={{  marginTop:5,flex:1}}>
        
   <ImageSlider style={styles.img} images={[
    "https://sp2cdn-idea-global.zingfront.com/sp_opera/75018bdd84c3f5f7ceebbd7b7a93f09c.jpg",
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEj-WKMMn663Z9IIRyZBqoYnbs2cQauqgdA&s',
    'https://scontent.fkhi16-2.fna.fbcdn.net/v/t39.30808-6/466675009_9798812853469400_4417655224567929969_n.png?_nc_cat=108&ccb=1-7&_nc_sid=c987de&_nc_ohc=rN4qZZ3BcyoQ7kNvgHnOt94&_nc_zt=23&_nc_ht=scontent.fkhi16-2.fna&_nc_gid=AgNi-voMA9kGEAt5v3lkIR6&oh=00_AYAa2sxVXpB08yp2jN8fPpxkVqA_Ba8jF7Wc-58yIZ1VRA&oe=67480BBB',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyfE0cn_vqXmNCTpKAVvLbx1n6SOBXLwCLc5H4dSYeXsebP-3mUPpg3vX5tiX_lq1lCE&usqp=CAU'
  ]}/>
        <View style={{flex:0.5 ,flexDirection:"row", justifyContent:"center" ,alignItems:"center",paddingLeft:55, backgroundColor:"white"}}>
          <View style={{flex:1 }}>
          <MaterialIcons name="fastfood" style={{marginLeft:9}} size={25} color={"green"}></MaterialIcons>
          <Text style={{color:"black",fontSize:10}}>Food Delivery</Text>
          </View>
          <View style={{flex:1}}>
          <MaterialIcons name="payments" style={{marginLeft:18}} size={25} color={"green"}></MaterialIcons>
          <Text style={{color:"black",fontSize:10}}>Secure Payments</Text>
          </View>
          <View style={{flex:1}}>
          <MaterialIcons name="assistant" style={{marginLeft:9}} size={25} color={"green"}></MaterialIcons>
          <Text style={{color:"black",fontSize:10}}>24/Service</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor:"lightgreen",flex:1.5}}>
        <View style={{backgroundColor:"lightgreen",marginHorizontal:5 ,flex:1,flexDirection:"row" ,gap:5, marginVertical:5}}>
          <View style={{flex:1}}>
            <Image
            style={[styles.img,{borderRadius:8}]}
            source={require("../assets/images/img1.jpg")}
            />
          </View>
          <View style={{flex:1}}>
            <Image
            style={styles.img}
            source={require("../assets/images/img2.jpg")}
            />
          </View>
        </View>
        <View style={{backgroundColor:"lightgreen",marginHorizontal:5 ,flex:1,flexDirection:"row" ,gap:5, marginVertical:5}}>
          <View style={{flex:1}}>
            <Image
            style={[styles.img,{borderRadius:8}]}
            source={require("../assets/images/img3.jpg")}
            />
          </View>
          <View style={{flex:1}}>
            <Image
            style={styles.img}
            source={require("../assets/images/img4.jpg")}
            />
          </View>
        </View>
        <View style={{backgroundColor:"lightgreen",marginHorizontal:5 ,flex:1,flexDirection:"row" ,gap:5, marginVertical:5}}>
          <View style={{flex:1}}>
            <Image
            style={[styles.img,{borderRadius:8}]}
            source={require("../assets/images/img5.jpg")}
            />
          </View>
          <View style={{flex:1}}>
            <Image
            style={styles.img}
            source={require("../assets/images/img6.jpg")}
            />
          </View>
        </View>
      </View>
      </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  logo:{
    fontSize:21,
    fontWeight:"bold",
    color:"white"
  },
  img:{
    resizeMode:"stretch",
    width:"100%",
    height:"100%"
  }
})