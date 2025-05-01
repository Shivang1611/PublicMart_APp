import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; // Adjust the path as needed

type TrendingItem = {
  id: string; 
  image: any; 
  name: string;
  originalPrice?: number;
  rating?: number;
  Tags?: string;
};

type TrendingScreenRouteProp = RouteProp<RootStackParamList, 'Details'> & {
  params: {
    Trending: TrendingItem[];
  };
};

interface DetailsProps {
  route: TrendingScreenRouteProp;
}

const Details = ({ route }: DetailsProps) => {
  const { details } = route.params;
  return (
    <>
    <View style={styles.container}>
    <Image source={details.image} style={styles.itemImage} />
    <View style={styles.detailCont}>
    <Text style={styles.itemText}>{details.name}</Text>
    <Text style={styles.itemText}>₹ {details.originalPrice}</Text>
    </View>
    <Text style={styles.itemstar}>⭐ {details.rating}</Text>
    <Text style={styles.itemTex}>{details.Tags}</Text>
    </View>
    <Text style={styles.itemText1}>Color</Text>
    <View style={styles.LastContainer}>
    <Image source={require('../Assets/Color/Black.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/Purple.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/grey.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/skyblue.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/LightGreen.png')} style={styles.itemImage1} />
   </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
  },
  itemImage: {
    
      margin:10,
      height:400,
      width:300,
      borderRadius:10,
      resizeMode:"contain",
      
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#fff',},
  itemText: {
    color:"black",
    fontSize:20,
    fontWeight:"bold",
    marginTop:10,
  },
  itemTex:{
    fontSize:18,
    fontWeight:"600",
    marginTop:10,
    
    marginHorizontal:30,
    color:"#424444",

  },
  detailCont:{
    
    flexDirection:"row",
    justifyContent:"space-between",
    
    width:340,
    marginHorizontal:20,
    
  },
  itemstar:{
    fontSize:18,
    fontWeight:"600",
    marginTop:10,
    marginRight:"auto",
    marginHorizontal:30,
    color:"#7f8c8d",

    
  },
  itemText1:{
    marginTop:10,
    marginHorizontal:20,
    fontSize:20,
    fontWeight:"bold",
  }
});