import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { FAB } from '@rneui/themed'
import Snackbar from 'react-native-snackbar'  
import {AppwriteContext} from '../appwrite/AppwriteContext'
type UserObj = {
  name: String;
  email: String;
}

const Myprofile = () => {
  const [userData, setUserData] = useState<UserObj>()
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)

  const handleLogout = () => {
    appwrite.logout()
    .then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT
      })
    })
  }

  useEffect(() => {
    appwrite.getCurrentUser()
    .then(response => {
      if (response) {
        const user: UserObj = {
          name: response.name,
          email: response.email
        }
        setUserData(user)
      }
    })
  }, [appwrite])
  

  return (
    <SafeAreaView style={styles.container}>
   { userData && (
            <View style={styles.userContainer}>
              <Text style={styles.userDetails}>Name: {userData.name}</Text>
              <Text style={styles.userDetails}>Email: {userData.email}</Text>
            </View>
          )}
        
        <FAB
          placement="left"
          color="#f02e65"
          size="large"
          title="Logout"
          icon={{name: "logout", color: '#FFFFFF'}}
          onPress={handleLogout}
          style={{marginBottom:90,marginHorizontal:150,}}
        />
        </SafeAreaView>
  )
}



const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#DFE6E9',
  },
  
  
  userContainer: {
    marginTop: 50,
    marginHorizontal:10,
    justifyContent:"center",
    alignItems:"center"
  },
  userDetails: {
    fontSize: 20,
    color: 'Black',
    fontWeight:"600"
  },
});

export default Myprofile

