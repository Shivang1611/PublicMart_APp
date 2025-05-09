import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
// navigation
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//data or database 


//Components to arranging the item in Home page
import HomeComponents from '../components/HomeComponents'
import { Provider as PaperProvider } from 'react-native-paper';

type HomeProps = {
  home: {
    id: string;
    name: string;
    image: string;
  };
  
}
const Home = () => {
  const navigation = useNavigation();
 
  return (
    <>
    <PaperProvider>
    <View style={styles.HeaderContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../Assets/Icons/Main.png')} style={styles.Mainimage} />
        
         <Image
                    source={require('../Assets/notification.png')}
                    style={styles.notificationimg}
                  />
        
        </View>
        

       
        <View style={styles.location}>
          <Image
            source={require('../Assets/locationLogo.png')}
            style={styles.locationimg}
          />
          <Text style={styles.locationtxt}> Mirzapur , Uttar Pradesh (231001)</Text>

         </View>
        </View>
      
      
   <HomeComponents home={{ id: '1', name: 'Example', image: 'path/to/image' }} />
  
  </PaperProvider>
  
          </>
  )
}

export default Home

const styles = StyleSheet.create({
  
  iconimage:{
    height:30,
    width:30,
  },
  logoContainer:{
    backgroundColor:'#DFE6E9',
    
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:0,
   
   
    flexDirection:'row',
    
    
  },
  HeaderContainer: {
    marginTop: 0,
    backgroundColor: '#DFE6E9',
   
  },

  
  location: {
    marginTop:0,
    flexDirection: 'row',
  marginHorizontal:20,

 
  },
  locationimg: {
    height: 15,
    width: 15,
    
   
  },
  locationtxt: {
    fontSize: 14,
    fontWeight: 'bold',
  },
   CategoryText: {
    fontSize: 12,
    fontWeight: '400',
  },
  Mainimage:{
    height: 50,
    width: 200,
    resizeMode:'contain',
    marginRight:"auto",
    
    borderRadius: 10,
    marginBottom:5,
    
    
  },
  notificationimg: {
    height: 30,
    width: 30,
   marginLeft: "auto",
   marginRight:10,
   marginTop:0,
   
  },

})