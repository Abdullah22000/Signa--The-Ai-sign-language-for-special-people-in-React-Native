import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, ImageBackground, Alert } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Alphabets from './Alphabets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Numbers from './Numbers';
import { removeToken } from '../components/AsynStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = () => { 
  const navigation = useNavigation();

  const Header = () => {
    // const handleLogout = async () => {
  
    //   await removeToken()
    //   navigation.navigate('Login')
    //   Alert.alert("Logout")
    // };
    return (
    <View style={styles.header}>
       {/* <View style={{ padding: 10 ,marginStart:280}}>
        <TouchableOpacity style={{borderRadius:5, borderColor:"white",borderWidth:1}} onPress={handleLogout}>
          <Text style={{fontWeight:'bold',color:'#FFFFEE',padding:3}}>LogOut</Text>
        </TouchableOpacity>
      </View> */}
    <Image
      source={require('../assets/header.jpg')}
      style={{ width:400, height: 150,marginLeft:30 }}
    />
  </View>
    )};
  const goToAlphabets = () => {
    navigation.navigate('Alphabets');
  };
  const goToNumbers = () => {
    navigation.navigate('Numbers');
  };
  const goToBasicGesture = () =>{
    navigation.navigate('BasicGesture')
  }

  const Boxes = () => {
    return (
      <ScrollView contentContainerStyle={styles.boxescontainer}>
        <Pressable onPress={goToAlphabets} style={styles.box}>
          <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={goToNumbers} style={styles.box}>
          <ImageBackground source={require('../assets/two.jpg')} style={styles.inner2}>
            <Text style={styles.cardDescription}>NUMBER</Text>
          </ImageBackground>
          
        </Pressable>
        <Pressable onPress={goToBasicGesture} style={styles.box}>
          <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>BASIC GESTURES</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/two.jpg')} style={styles.inner2}>
            <Text style={styles.cardDescription}>TRAIN WITH AI</Text>
          </ImageBackground>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
    <Header />
    <ScrollView>
    <Boxes />
    </ScrollView>
  </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  boxescontainer: {
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  header: {
    width: '100%',
    height: '25%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    width: '100%',
    height: 200,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  inner1: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    fontSize: 16,
    backgroundColor: 'pink',
  },
  inner2: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  cardDescription: {
    fontSize:24,
    fontWeight:"900",
    marginLeft:10,
    marginBottom:20,
    color:"white"
  },
});

export default Home;

