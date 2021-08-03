import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ISSLocationScreen from './Screens/ISSLocationScreen';
import MeteorScreen from './Screens/MeteorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{headerShown:false}}
      >
<Stack.Screen name="Home" component={HomeScreen}/>
<Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
<Stack.Screen name="Meteor" component={MeteorScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

