import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
// navigation
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//data or database 
import { PRODUCTS_LIST } from '../Data/constants'

//Components to arranging the item in Home page
import HomeComponents from '../components/HomeComponents'
import { Provider as PaperProvider } from 'react-native-paper';
type HomeProps={ home: Home }
const Home = () => {
  return (
    <PaperProvider>
   <HomeComponents home={{ id: '1', name: 'Sample Product', image: 'sample-image-url' }} />

  </PaperProvider>
  )
}

export default Home

const styles = StyleSheet.create({})