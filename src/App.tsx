import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//for navigation
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import Home from './Screens/Home'
import Product from './Screens/Product'
import Details from './Screens/Details'
import Categories from './Screens/Categories'
import BuyNow from './Screens/BuyNow'
import AddtoKart from './Screens/AddtoKart'
import AppNavigator from './Screens/AppNavigator';



//types
export type Rootstackparamlist={
 
  Home:undefined;
  Categories:{
   categories:string[],
  },
  
  Details:{
    details:Product,
  },
  Product:{
    Product:Product[]
  }
  BuyNow:{
    details:Product,
  }
  
  
  AddtoKart:{details: Product} ,
  TrendingCont: { trendingProducts: Product[] }
  AppNavigator: undefined;
}


const stack=createNativeStackNavigator<Rootstackparamlist>()
 

const App = () => {
  return (
   <NavigationContainer>
     <stack.Navigator initialRouteName='AppNavigator' screenOptions={{headerShown:false}}> 
      
     <stack.Screen name="AppNavigator" component={AppNavigator} />
      <stack.Screen name="Categories" component={Categories} options={{
        title:"Categories",
        headerBackButtonDisplayMode:"default",
        
        headerStyle: {
          backgroundColor: '#DFE6E9',
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
          
       
        
      }}/>
      <stack.Screen name="Product" component={Product} options={{
        title:"Product",
        headerStyle: {
          backgroundColor: '#DFE6E9',
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },

      }}/>
      <stack.Screen name="Details" component={Details} options={{
        title:"Details"
      }}/>
      <stack.Screen name="BuyNow" component={BuyNow}options={{
        title:"Buy Now",
      }}/>
      <stack.Screen name="AddtoKart" component={AddtoKart} options={{
        title:"Add to Kart",
      }}/>
       
      

    </stack.Navigator>
    
   
    
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App

