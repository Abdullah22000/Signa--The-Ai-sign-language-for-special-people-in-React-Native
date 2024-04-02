import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useState } from 'react';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Dictonary from './Screens/Dictonary';
import DarkModeButton from './buttons/DarkMode';
import Alphabets from './Screens/Alphabets';
import Numbers from './Screens/Numbers';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Setting from './Screens/Setting';
import Welcome from './Screens/Welcome';
import A from './alphabets/A';
import { createStackNavigator } from '@react-navigation/stack';
import B from './alphabets/B';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
type TabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
  labelStyle: { fontSize: number };
  style: { backgroundColor: string };
};

// Define your bottom tab navigator using createBottomTabNavigator
function Tabs() {
  const tabBarOptions: TabBarOptions = {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
    labelStyle: { fontSize: 12 },
    style: { backgroundColor: 'white' },
  };
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,  // to remove title on top of page
        //tabBarShowLabel: false,
        tabBarActiveTintColor: '#1a59c8', // Color of the active tab
        tabBarInactiveTintColor: 'white', // Color of inactive tabs
        tabBarLabelStyle: { fontSize: 15 , fontWeight:'bold', bottom:10}, // Style for tab labels
        tabBarStyle: {                    // Background color of the tab bar
          backgroundColor: 'black', 
          borderRadius: 10,
          position: 'absolute',
          bottom : 10,
          height: 75,
          left: 20,
          right: 20,
          elevation: 0,

       }, 
        ...styles.shadow
      }}
      
    >

      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon : ({focused}) => (
          <View style={{alignContent:'center', justifyContent:'center', top:0}}>
            <Image
              source={require('./assets/home.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 30,
                  tintColor:focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        ),
      }} />
       <Tab.Screen name="Dictionary" component={Dictonary} options={{
        tabBarIcon : ({focused}) => (
          <View style={{alignContent:'center', justifyContent:'center', top:0}}>
            <Image
              source={require('./assets/bok.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 50,
                  tintColor:focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon : ({focused}) => (
          <View style={{alignContent:'center', justifyContent:'center', top:0}}>
            <Image
              source={require('./assets/profile.png')}
              resizeMode='contain'
              style={{
                  width: 30,
                  height: 35,
                  tintColor:focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        ),
      }}/>
       <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon : ({focused}) => (
          <View style={{alignContent:'center', justifyContent:'center', top:0}}>
            <Image
              source={require('./assets/setting.png')}
              resizeMode='contain'
              style={{
                  width: 30,
                  height: 35,
                  tintColor:focused ? '#e32f45' : '#748c94'
              }}
            />
          </View>
        ),
      }}/>
    </Tab.Navigator>
  );
}


// App component renders the NavigationContainer with Tabs component inside it
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Tabs' component={Tabs}/>
        <Stack.Screen name='Alphabets' component={Alphabets}/>
        <Stack.Screen name='Numbers' component={Numbers}/>
        <Stack.Screen name='A' component={A}/>
        <Stack.Screen name='B' component={B}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor: 'Red',
    shadowOffset: {
      width:0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  glowingButton: {
    shadowColor: '#3498db', // Color of the glow
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  }

})
export default App;
