import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed

type BuyNowScreenRouteProp = RouteProp<RootStackParamList, 'BuyNow'>;

interface BuyNowProps {
  route: BuyNowScreenRouteProp;
}

const BuyNowBtn = ({ route }: BuyNowProps) => {
  const { details } = route.params;

  if (!details) {
    return <Text>No product details available</Text>;
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

export default BuyNowBtn;

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
});