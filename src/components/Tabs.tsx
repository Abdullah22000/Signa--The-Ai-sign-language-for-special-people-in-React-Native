import React, { useContext } from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Dictonary from '../Screens/Dictonary';
import Profile from '../Screens/Profile';
import Setting from '../Screens/Setting';
import { Image, View } from 'react-native';


const Tab = createBottomTabNavigator();
type TabBarOptions = BottomTabNavigationOptions & {
    // Add any additional custom options if needed
     activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: 'white' },
    };

  function Tabs() {
    return (
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,  // to remove title on top of page
          //tabBarShowLabel: false,
          tabBarActiveTintColor: '#65d5f7', // Color of the active tab
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
        }}>

        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignContent:'center', justifyContent:'center', top:0}}>
              <Image
                source={require('../assets/home.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 30,
                    tintColor:focused ? '#65d5f7' : '#748c94'
                }}
              />
            </View>
          ),
        }} />
         <Tab.Screen name="Dictionary" component={Dictonary} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignContent:'center', justifyContent:'center', top:0}}>
              <Image
                source={require('../assets/bok.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 50,
                    tintColor:focused ? '#65d5f7' : '#748c94'
                }}
              />
            </View>
          ),
        }} />
        <Tab.Screen name="AI" component={Profile} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignContent:'center', justifyContent:'center', top:0}}>
              <Image
                source={require('../assets/AI/innovation(1).png')}
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 35,
                    tintColor:focused ? '#65d5f7' : '#748c94'
                }}
              />
            </View>
          ),
        }}/>
         <Tab.Screen name="Setting" component={Setting} options={{
          tabBarIcon : ({focused}) => (
            <View style={{alignContent:'center', justifyContent:'center', top:0}}>
              <Image
                source={require('../assets/setting.png')}
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 35,
                    tintColor:focused ? '#65d5f7' : '#748c94'
                }}
              />
            </View>
          ),
        }}/>
      
      </Tab.Navigator>
    );
}

export default Tabs;