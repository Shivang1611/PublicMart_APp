import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../Screens/Home'
import Product from '../Screens/Product'
import Details from '../Screens/Details'
import Categories from '../Screens/Categories'
import BuyNow from '../Screens/BuyNow'

import AppNavigator from '../Screens/AppNavigator';
import AddToKart from '../Screens/AddToKart'



export type AppStackParamList = {
    Home: undefined;
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
  
  
  AddToKart:{details: Product} ,
  TrendingCont: { trendingProducts: Product[] }
  AppNavigator: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='AppNavigator'
    screenOptions={{
      headerTitleAlign:'center',
      headerBackButtonDisplayMode: 'minimal',
      headerShown:false
    }}
    >
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      
       
      <Stack.Screen name="Categories" component={Categories} options={{
        title:"Categories",
        headerBackButtonDisplayMode:"default",
        headerShown: true,
        headerStyle: {
          backgroundColor: '#DFE6E9',
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
          
       
        
      }}/>
      <Stack.Screen name="Product" component={Product} options={{
        title:"Product",
        headerShown: true,
        headerStyle: {
          backgroundColor: '#DFE6E9',
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },

      }}/>
      <Stack.Screen name="Details" component={Details} options={{
        title:"Details",
        headerShown: true,
      }}/>
      <Stack.Screen name="BuyNow" component={BuyNow}options={{
        title:"Buy Now",
        headerShown: true,
      }}/>
      <Stack.Screen name="AddToKart" component={AddToKart} options={{
        title:"Add to Kart",
        headerShown: true,
      }}/>
       
    </Stack.Navigator>
  )
}