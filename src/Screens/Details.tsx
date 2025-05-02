import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/HomeComponents'; 
import  {PropsWithChildren, useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import BuyNowBtn from './BuyNowBtn';

type TrendingItem = {
  id: string; 
  image: any; 
  name: string;
  originalPrice?: number;
  rating?: number;
  Tags?: string;
};
export type RootStackParamList = {
  Categories: {categories: string[]};
  Trending: {Trending: string[],Tags:string};
  Product: {Product: {id: string; name: string; image: any;Tags:string}[]};
  Details: {details: {id: string; name: string; image: any}};
  BuyNow:  {details: {
    id: string;
    name: string;
    image: any;
    originalPrice?: number;
    rating?: number;
    Tags?: string;
  };
}
AddToKart:{details:{id: string;
name: string;
image: any;
originalPrice?: number;
rating?: number;
Tags?: string;
}
}
}

type TrendingScreenRouteProp = RouteProp<RootStackParamList, 'Details'>; 


interface DetailsProps {
  route: TrendingScreenRouteProp;
}

const Details = ({ route }: DetailsProps) => {
  const { details } = route.params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
    <ScrollView>
    <View style={styles.container}>
    <Image source={details.image} style={styles.itemImage} />
    <View style={styles.detailCont}>
    <Text style={styles.itemText}>{details.name}</Text>
    <Text style={styles.itemText}>₹ {details.originalPrice}</Text>
    </View >
    <Text style={styles.itemstar}>⭐ {details.rating}</Text>
    <Text style={styles.itemTex}>{details.Tags ||  "No additional details available"}</Text>
    </View>
    <Text style={styles.itemText1}>Color</Text>
    <View style={styles.LastContainer}>
    <Image source={require('../Assets/Color/Black.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/Purple.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/grey.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/skyblue.png')} style={styles.itemImage1} />
    <Image source={require('../Assets/Color/LightGreen.png')} style={styles.itemImage1} />
   </View>
   <Text style={styles.itemText1}>Size</Text>
   <View style={styles.LastContainer}>

    
    <Text style={styles.itemSize}>M</Text>
    <Text style={styles.itemSize}>L</Text>
    <Text style={styles.itemSize}>XL</Text>
    <Text style={styles.itemSize}>XXL</Text>
    <Text style={styles.itemSize}>XXXL</Text>
    
    </View>
    </ScrollView>
<View style={styles.LastContainer1}>
  <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("AddToKart",{details})}>
    <Text style={styles.buttonText}>Add to Kart</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.button}
    onPress={() =>
      navigation.navigate('BuyNow', { details })
    }
  >
    <Text style={styles.buttonText}>Buy Now</Text>
  </TouchableOpacity>
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
    
    marginHorizontal:20,
    fontSize:20,
    fontWeight:"bold",
  },
  LastContainer:{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:10,
  },
  itemSize:{
    backgroundColor:"#dfe6e9",
    padding:10,
    borderRadius:10,
    marginHorizontal:5,
    fontSize:20,
    fontWeight:"bold",
  },
  button:{
    backgroundColor:"#f1c40f",
    
    borderRadius:10,
    marginHorizontal:5,
    fontSize:20,
    fontWeight:"bold",
    padding:10,
    height:60,
    width:170,
    marginLeft:"auto",
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
  },
  buttonText:{
    color:"Black",
    fontSize:24,
    fontWeight:"600",
    
  },
  button2:{
  borderRadius:10,
    marginHorizontal:5,
    fontSize:20,
    fontWeight:"bold",
    padding:10,
    height:60,
    width:170,
    marginLeft:"auto",
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 2,
    
  },
  LastContainer1:{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:10,
    justifyContent:"space-between",
  }
});