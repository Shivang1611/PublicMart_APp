import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed
import { Trending_Img } from '../Data/constants';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'Categories'>;

interface CategoriesProps {
  route?:RouteProp<RootStackParamList,"Categories">;
}

const Categories = ({ route }: CategoriesProps) => {
  const { categories } = route?.params || { categories: ["All"] }; 
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  

  const filteredProducts = categories.includes("All")
  ? Trending_Img
  : Trending_Img.filter((product) => categories.includes(product.Categories));
  return (
    <View style={styles.container}>
     <Text style={styles.header}>{categories}</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate('Details', { details: item })}>
             <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
            </View>

            <View style={styles.itemDetails}>
              <Text style={styles.itemPrice}>₹ {item.originalPrice}</Text>
              <Text style={styles.itemRating}>⭐{item.rating}</Text>
            </View>
          </TouchableOpacity>


        )}
      />
    </View>
  );
};

export default Categories;

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
    marginBottom:0,
    height: 100,
    width:"auto",
    
   
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode:"contain"
  },
  itemText: {
    fontSize: 18,
  },
  itemDetails:{
    marginBottom:0,
    flexDirection: 'row',
    
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
   
   marginHorizontal:120,
   paddingBottom:20,
  },
  itemRating: {
    fontSize: 16,
    
    marginHorizontal:20,
    marginBottom:5
  },
  mainContainer:{
    
    justifyContent: 'space-between',
    
    marginTop: 5,
    width: '100%',
    marginBottom: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  
});