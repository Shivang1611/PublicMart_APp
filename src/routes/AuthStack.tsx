import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Signup from '../Screens/login/Signup'
import Login from '../Screens/login/Login'

export type AuthStackParamList = {
    Login: undefined;
    Signup: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();


export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}