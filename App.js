import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from './assets/OnBoardScreens/First';
import Second from './assets/OnBoardScreens/Second';
import OnBoardPage from './OnBoardPage';
import AddReminderPage from './AddReminderPage';
import NewReminder from './NewReminderScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="First" screenOptions={{headerShown: false}}>
      <Stack.Screen name='First' component={First} />
      <Stack.Screen name='Second' component={Second}/>
      <Stack.Screen name='On Board' component={OnBoardPage }/>
      <Stack.Screen name='Add reminder' component={AddReminderPage}/>
      <Stack.Screen  name='New reminder' component={NewReminder}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}