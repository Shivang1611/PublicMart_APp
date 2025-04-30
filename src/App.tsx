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


//types
export type Rootstackparamlist={
  HomePage:{
    home:Product
  },
  Home:{
    home:Home
  },
  Categories:{
    category:Product
  },
  Details:{
    details:Product
  },
  Product:{
    product:Product
  }
}


const stack=createNativeStackNavigator<Rootstackparamlist>()
 

const App = () => {
  return (
   <NavigationContainer>
     <stack.Navigator initialRouteName='Home'> 
      <stack.Screen name='Home' component={Home} options={{
            headerShown: false, 
          }} />
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
    </stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App

