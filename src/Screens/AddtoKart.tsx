import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { Rootstackparamlist } from '../App'; // Adjust the path as needed


const AddToKart = ({ route }: { route: RouteProp<Rootstackparamlist,"AddtoKart"> }) => {
  const { details } = route.params;
  return (
    <View>
      <Text>Product Name: {details.name}</Text>
      <Text>Price: ₹ {details.originalPrice}</Text>
    </View>
  );
};
const styles = StyleSheet.create({})
export default AddToKart

