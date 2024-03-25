import React from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Alphabets = () => {
  const navigation = useNavigation();
  
  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const Header = () =>{
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../assets/left-back.png')}
            style={{width:40,height:40, margin:10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('A')
        }}>
          <Image 
            source={require('../assets/arrow-right.png')}
            style={{width:40,height:40, margin:10}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header/>
       <View>
          <Text>ALLAH</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'yellow',
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between', // Space out buttons evenly
    alignItems: 'center', // Center buttons vertically
  },
  
});


export default Alphabets;
