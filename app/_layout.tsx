import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

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
      <View style={{backgroundColor:"orange", flex:1}}>
        <View style={{flex:2.5}}>
          <Image 
          style={styles.img}
           source={require("../assets/images/banner.jpg")}
          />
        </View>
        <View style={{flex:0.5 , backgroundColor:"white"}}>
          <MaterialIcons name="fastfood"></MaterialIcons>
        </View>
      </View>
      <View style={{backgroundColor:"red",flex:1.5}}></View>
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