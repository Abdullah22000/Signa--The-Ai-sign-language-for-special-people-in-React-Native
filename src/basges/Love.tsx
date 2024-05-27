import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';


const Love = () => {
  const navigation = useNavigation();
  const Header = () =>{  
  return (
    <View style={styles.header}>
      <TouchableOpacity 
      onPress={() => navigation.goBack()}>
        <Image 
          source={require('../assets/left.png')}
          style={{width:40,height:40, margin:10,backgroundColor:"white",borderRadius:25}}
        />
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Hungery')
      }}>
        <Image 
          source={require('../assets/arrow-right.png')}
          style={{width:40,height:40, margin:10,backgroundColor:"white",borderRadius:20}}
        />
      </TouchableOpacity>
    </View>
  );
}
  return (
    <View style={styles.container}>
      <Header/>
      <View>
        <Image source={require('../assets/bages/love.jpg')} 
          style={{height:"55%",width:"100%", marginTop:80, alignSelf:'center'}}            
        />
      </View>

      <View style={styles.touch}>
          <Text style={styles.txt}> LOVE</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent:"center",
    backgroundColor:"black",
    height:"100%"
  },
  txt:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    textAlignVertical:'center'
  },
  touch:{
    borderWidth:1.2,
    borderColor:'white',
    borderRadius:20,
    backgroundColor:'black',
    width:250,
    height:50,
    alignSelf:'center'
  },
  header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'black',
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between', // Space out buttons evenly
    alignItems: 'center', // Center buttons vertically
}   
 
});

export default Love;
