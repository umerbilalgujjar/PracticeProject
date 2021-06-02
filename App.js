import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BalanceScreen from './Screens/BalanceScreen'
import googleSignIn from './Screens/googleSignUp'
import YourCard from './Screens/YourCard'
import ProfileScreen from './Screens/ProfileScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="YourCard">
      <Stack.Screen name="YourCard" component={YourCard} options={{headerShown:false}}/>
      <Stack.Screen name="BalanceScreen" component={BalanceScreen} options={{headerShown:false}}/>
      <Stack.Screen name="googleSignIn" component={googleSignIn} options={{headerShown:false}}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}