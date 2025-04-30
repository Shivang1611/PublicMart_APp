import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed
import { Trending_Img } from '../Data/constants';
type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'Trending'>;

interface TrendingProps {
  route: CategoriesScreenRouteProp;
}

const Product = ({ route }: TrendingProps) => {
  const { Trending } = route.params; 

  return (
    <View style={styles.container}>
     
      <FlatList
        data={Trending_Img}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE6E9',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});