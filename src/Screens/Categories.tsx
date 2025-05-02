import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed
import { Trending_Img } from '../Data/constants';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type CategoriesScreenRouteProp = RouteProp<RootStackParamList, 'Categories'>;

interface CategoriesProps {
  route: CategoriesScreenRouteProp;
}

const Categories = ({ route }: CategoriesProps) => {
  const { categories } = route.params; 
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  

  const filteredProducts = categories==="All"? Trending_Img: Trending_Img.filter((product) => product.Categories.includes(categories) );
  return (
    <View style={styles.container}>
     <Text style={styles.header}>{categories}</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Details', { details: item })}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
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