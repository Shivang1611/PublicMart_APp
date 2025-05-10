import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//for navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens

import Product from './Screens/Product';
import Details from './Screens/Details';
import Categories from './Screens/Categories';
import BuyNow from './Screens/BuyNow';

import AppNavigator from './Screens/AppNavigator';
import AddToKart from './Screens/AddToKart';

//
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './routes/Router';
import {AppwriteProvider} from './appwrite/AppwriteContext';

//types
export type Rootstackparamlist = {
  Home: undefined;
  Categories: {
    categories: string[];
  };

  Details: {
    details: Product;
  };
  Product: {
    Product: Product[];
  };
  BuyNow: {
    details: Product;
  };

  AddToKart: {details: Product};
  TrendingCont: {trendingProducts: Product[]};
  AppNavigator: undefined;
};

const stack = createNativeStackNavigator<Rootstackparamlist>();

const App = () => {
  return (
    <SafeAreaProvider>
      <AppwriteProvider>
        <Router />
      </AppwriteProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});
export default App;
