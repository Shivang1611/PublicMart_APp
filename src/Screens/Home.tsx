import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { PropsWithChildren } from 'react'
// navigation
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//data or database 
import { PRODUCTS_LIST } from '../Data/constants'

//Components to arranging the item in Home page
import HomeComponents from '../components/HomeComponents'
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './AppNavigator'
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
      <View style={styles.logoContainer}>
        <Text style={styles.logostyling}></Text>
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
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
   CategoryText: {
    fontSize: 12,
    fontWeight: '400',
  },

})