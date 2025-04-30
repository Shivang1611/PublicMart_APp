import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import {Trending_Img} from '../Data/constants';
import { FlatGrid } from 'react-native-super-grid';

export type Home = {
  id: string;
  name: string;
  image: string;
};
const categoriesData = [
  {id: '1', name: 'Electronics', image: require('../Assets/Electronics.png')},
  {id: '2', name: 'Fashion', image: require('../Assets/Fashion.png')},
  {id: '3', name: 'Clothes', image: require('../Assets/Clothes.png')},
  {id: '4', name: 'Wardrobe', image: require('../Assets/Wardrobe.png')},
  {id: '5', name: 'Furnitures', image: require('../Assets/Furniture.png')},
  {id: '6', name: 'Television', image: require('../Assets/Television.png')},
  {id: '7', name: 'Bed', image: require('../Assets/Bed.png')},
];

interface HomeProps {
  home: Home;
}
type RootStackParamList = {
  Categories: {categories: string[]};
  Trending: {Trending: string[]};
  Product: {Product: {id: string; name: string; image: any}[]};
};

const HomeComponents = ({home}: HomeProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.top}>location</Text>
        <View style={styles.location}>
          <Image
            source={require('../Assets/locationLogo.png')}
            style={styles.locationimg}
          />
          <Text style={styles.locationtxt}> Uttar Pradesh , </Text>

          <Image
            source={require('../Assets/notification.png')}
            style={styles.notificationimg}
          />
        </View>
      </View>
      //Search Containe
      <View style={styles.SearchContainer}>
        <Searchbar
          placeholder="Search...."
          onChangeText={onChangeSearch}
          value={search}
          style={styles.searchbar}
          icon={() => (
            <Image
              source={require('../Assets/Search_Logo.png')} // Replace with your logo path
              style={styles.searchLogo}
            />
          )}
        />
      </View>
      //Trending Image Container
      <View style={styles.container2}>
        <ImageBackground
          source={require('../Assets/HeadPhone.jpg')}
          style={styles.trendingheadphoneimg}>
          <View style={styles.txtContainer}>
            <Text style={styles.headphonetxt}>25% Off</Text>

            <Text style={styles.txt1}>On Headphones</Text>
            <Text style={styles.txt2}>Exclusive Sales...</Text>
          </View>
        </ImageBackground>
      </View>
      //Categories Container
      <View style={styles.CategoriesContainer}>
        <View style={styles.HeadingCon}>
          <Text style={styles.Categories}> Categories</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Categories', {categories: categoriesData})
            }
            style={styles.btn}>
            <Text style={styles.seeall_bottom}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.CategoryImgCont}>
          {categoriesData.map(category => (
            <View key={category.id} style={styles.Fashion_Cont}>
              <Image source={category.image} style={styles.category_image} />
              <Text style={styles.CategoryText}>{category.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>


      //latest view Container
      <View style={styles.CategoriesContainer}>
        <View style={styles.HeadingCon}>
          <Text style={styles.Categories}>latest Products</Text>
         
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Product" , {Product: Trending_Img})
            }
            style={styles.btn}>
            <Text style={styles.seeall_bottom}>See all</Text>
          </TouchableOpacity>
          </View>
          </View>
          {/* <View  style={styles.TrendingImgCont}>
          {Trending_Img.map(Trending => (
            <View key={Trending.id} style={styles.Clothes_Cont}>
              <Image source={Trending.image} style={styles.Trending_image} />
              <Text style={styles.CategoryText}>{Trending.name}</Text>
            </View>
          ))}
               
       </View> */}
       
       <FlatGrid
      itemDimension={130}
      data={Trending_Img}
      style={styles.gridView}
      spacing={10}
      // fixed
      
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <View key={item.id} style={styles.Electronics}>
            <Image source={item.image} style={styles.Item_image} />
            {/* <Text style={styles.itemName}>{item.name}</Text> */}
            <Text style={styles.itemName}>{item.name}</Text>

          </View>
        </View>
      )}
    />
    
    
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#DFE6E9',
    zIndex: 0,
  },
  HeaderContainer: {
    marginTop: 10,
  },
  top: {
    color: '#636E72',
    marginTop: 10,
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  location: {
    marginTop: 5,
    flexDirection: 'row',
  },
  locationimg: {
    height: 20,
    width: 20,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  locationtxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationimg: {
    height: 30,
    width: 30,
    marginHorizontal: 180,
    marginBottom: 15,
  },
  SearchContainer: {
    marginTop: 10,
  },
  searchbar: {
    borderRadius: 30,
    backgroundColor: '#B2BEC3',
    height: 45,
    width: 345,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchLogo: {
    height: 30,
    width: 30,
  },

  container2: {
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 15,

    borderRadius: 13,

    marginTop: 10,
  },
  trendingheadphoneimg: {
    width: 350,
    height: 200,

    overflow: 'hidden',
    borderRadius: 20,
  },
  itemText: {
    fontSize: 16,
  },

  txtContainer: {
    marginHorizontal: 10,
    marginTop: 75,
  },
  headphonetxt: {
    fontSize: 24,
    color: '#DFE6E9',
    fontWeight: 'bold',
    marginTop: 25,
    marginHorizontal: 10,
  },
  txt1: {
    fontSize: 16,
    color: '#DFE6E9',
    fontWeight: '600',
    marginHorizontal: 10,
  },
  txt2: {
    marginHorizontal: 10,
    fontSize: 28,
    color: '#DFE6E9',
    fontWeight: 'bold',
  },
  CategoriesContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
   
  },
  HeadingCon: {
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 10,

    width: 350,
  },
  Categories: {
    fontSize: 18,
    fontWeight: '500',
  },
  seeall_bottom: {
    color: '#21a583',
    fontWeight: '500',
  },
  btn: {
    marginLeft: 'auto',
    paddingBottom: 10,
  },
  CategoryImgCont: {
    marginHorizontal: 10,

    flexDirection: 'row',
  },
  logo: {
    flexDirection: 'row',
    marginTop: 20,
  },
  category_image: {
    height: 50,
    width: 50,
  },
  Electronics: {
    marginHorizontal: 5,
  },
  Fashion_Cont: {
    marginHorizontal: 20,
    
  },

  CategoryText: {
    fontSize: 12,
    fontWeight: '400',
  },
  
  Clothes_Cont: {
    marginHorizontal: 25,
  },
  Trending_image:{
    height:200,
    width:200,
  },
  gridView: {
   
    flex: 1,
    marginHorizontal: 10,
  },
  itemContainer: {
    
    borderRadius: 20,
    padding: 10,
    height: 180,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 2, 
    // width:160
    backgroundColor:"#FFFFFF"
    

  },
  itemName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  Item_image:{
    width: 130,
    height: 120,
    resizeMode:"center",
    
    borderRadius: 20,
    marginBottom: 5,
    
    }
    ,
  photosContainer: {
    
    
    
    
    marginBottom:"auto"
  },
  
});
export default HomeComponents;
