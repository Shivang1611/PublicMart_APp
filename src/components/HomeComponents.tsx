import {ImageBackground,Image, StyleSheet, Text, View, FlatList} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import {Searchbar} from 'react-native-paper';

export type Home = {
  id: string;
  name: string;
  image: string;
};
const dataList = [
  'Electronucs',
  'Phone',
  'Mobile',
  'Clothes',
  'Jeans',
  'laptop',
  'iphone',
];


interface HomeProps {
  home: Home;
}

const HomeComponents = ({home}: HomeProps) => {
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);
  const filteredData = dataList.filter(item =>
    item.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <View style={styles.Container}>
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
      
        <View style={styles.container2} >
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
      <View style={styles.CategoryMainContainer}>
        <View style={styles.headercontainer}>
            <Text>
                gg
            </Text>
        </View>
      </View>
      
    </View>
  );
};

export default HomeComponents;

const styles = StyleSheet.create({
  Container: {
    
    backgroundColor:"#DFE6E9",
    position: 'absolute',

    zIndex:0
    
  },
  HeaderContainer: {
    marginTop: 10,
    
   
  },
  top: {
    color: '#636E72',
    marginTop: 10,
    marginHorizontal: 15,
    fontSize:18,
    fontWeight:"500"
  },
  location: {
    marginTop: 5,
    flexDirection: 'row',
  },
  locationimg: {
    height: 20,
    width: 20,
    borderRadius: 15,
    marginHorizontal:10,
  },
  locationtxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationimg: {
    height: 30,
    width: 30,
    marginHorizontal:180,
    marginBottom:15
  },
  SearchContainer: {
    marginTop:10,
   
    
    
      },
  searchbar: {
    borderRadius: 30,
    backgroundColor: '#B2BEC3',
    height:45,
    width:350,
    marginHorizontal:10,
    },
  searchLogo:{
    height:30,
    width:30,
  },
 
  container2:{
    
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal:15,
    
    borderRadius:13,
    
    marginTop:10,
    


    },
  trendingheadphoneimg:{
    width:350,
    height:200,
    resizeMode: "cover",
    overflow:"hidden",
    borderRadius:20,
   },
  itemText: {
    fontSize: 16,
  },
  
  txtContainer:{
    marginHorizontal:10,
    marginTop:75,  
  },
  headphonetxt:{
    fontSize:24,
    color:'#DFE6E9',
    fontWeight:'bold',
    marginTop:25,
  marginHorizontal:10,}
    ,
    txt1:{
     
      fontSize:16,
      color:"#DFE6E9",
      fontWeight:"600",
      marginHorizontal:10,

    },
    txt2:{
      
      marginHorizontal:10,
      fontSize:28,
      color:"#DFE6E9",
      fontWeight:"bold"
    },
    CategoryMainContainer:{
      
  
    backgroundColor: '#fff',
    borderRadius: 10,
  
      
    },
  
  
  
});
