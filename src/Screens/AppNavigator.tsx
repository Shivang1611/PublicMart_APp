import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Categories from '../Screens/Categories';

import { Image, Text, StyleSheet } from 'react-native';
import BuyNow from './BuyNow';
import AddToKart from './AddToKart';
import Myprofile from './Myprofile';



const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    
      <Tab.Navigator
      key="AppNavigatorTabs"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('../Assets/Navigation/HomeOnpress.png')
                : require('../Assets/Navigation/Home.png');
            } else if (route.name === 'Categories') {
              iconSource =focused
              ? require('../Assets/Navigation/CategoryONpress.png')
              :require('../Assets/Navigation/Category.png')
              
            } else if (route.name === 'My Orders') {
              iconSource =focused
              ?require('../Assets/Navigation/myorderOnpress.png')
              
              :require('../Assets/Navigation/myorder.png')
            }
            else if (route.name === "My Profile") {
              iconSource = focused
                ? require('../Assets/Navigation/MyprofileOnpress.png')
                
              :require('../Assets/Navigation/Myprofile.png');
            }
             else if (route.name === 'AddToKart') {
              iconSource = focused
                ? require('../Assets/Navigation/AddtokartOnpress.png')
                
              :require('../Assets/Icons/Addtokart1.png');
            }

            return <Image source={iconSource} style={styles.icon} />;
          },
          tabBarLabel: ({ focused }) => {
            let label;

            if (route.name === 'Home') {
              label = 'Home';
            } else if (route.name === 'Categories') {
              label = 'Categories';
            } else if (route.name === 'My Orders') {
              label = 'My Orders';
            }
            else if(route.name==="My Profile")
            {
              label= 'My Profile';
            }
             else if (route.name === 'AddToKart') {
              label = 'Add to Kart';
            }

            return <Text style={[styles.label, focused && styles.focusedLabel]}>{label}</Text>;
          },
          tabBarStyle: {
            backgroundColor: '#DFE6E9',
             position: 'absolute'
          },
          
          headerShown: false,
          
        })}
      >
        <Tab.Screen name="Home" component={Home} />
       
        <Tab.Screen name="My Orders" component={BuyNow} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="My Profile" component={Myprofile}/>
        <Tab.Screen name="AddToKart" component={AddToKart} />
        
       
      </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  label: {
    fontSize: 12,
    color: '#636E72',
  },
  focusedLabel: {
    fontWeight: 'bold',
    color: '#21a583',
  },
});

export default AppNavigator;