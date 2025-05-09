import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { Rootstackparamlist } from '../App'; 
interface AddToKartProps {
  route?: RouteProp<Rootstackparamlist, 'AddToKart'>; 
}

const AddToKart = ({ route }: AddToKartProps) => {
  const { details } = route?.params|| { details: { name: 'Unknown', originalPrice: 'N/A' } };
  if(!details) {
    return(
      <View>
    <Text> No details </Text>
    </View>
    );
  }

  return (
    <View>
      <Text>Product Name: {details.name}</Text>
      <Text>Price: ₹ {details.originalPrice}</Text>
    </View>
  );
};
const styles = StyleSheet.create({})
export default AddToKart

