import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed


interface BuyNowProps {
  route?: RouteProp<RootStackParamList, 'BuyNow'>
}

const BuyNow = ({ route }: BuyNowProps) => {
  const { details } = route?.params||{details:null};

  if (!details) {
    return <View style={styles.container1}>
    <Text style={{fontSize:16,backgroundColor:"#DFE6E9",flex:1}}>Work in Progress</Text>;
    </View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Name: {details.name}</Text>
      <Text style={styles.text}>Price: ₹ {details.originalPrice}</Text>
      <Text style={styles.text}>Rating: ⭐ {details.rating}</Text>
      <Text style={styles.text}>Tags: {details.Tags || 'No additional details available'}</Text>
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  container1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"#DFE6E9",
    
  }
});