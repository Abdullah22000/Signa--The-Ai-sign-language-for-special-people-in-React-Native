import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Alphabets from './Alphabets';
import App from '../App';
import A from '../alphabets/A';


const Home = () => { 
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  const Header = () => {
    return (
      <View style={styles.header}>
        <Image
          source={require('../assets/header.jpg')}
          style={{ width:400, height: 150, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,marginTop:120 }}
        />
      </View>
    );
  };
  const goToAlphabets = () => {
    navigation.navigate('Alphabets');
  };
  const goToNumbers = () => {
    navigation.navigate('Numbers');
  };

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
        <Pressable onPress={Alphabets} style={styles.box}>
          <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/two.jpg')} style={styles.inner2}>
            <Text style={styles.cardDescription}>NUMBER</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/two.jpg')} style={styles.inner2}>
            <Text style={styles.cardDescription}>NUMBER</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/two.jpg')} style={styles.inner2}>
            <Text style={styles.cardDescription}>NUMBER</Text>
          </ImageBackground>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
         <ImageBackground source={require('../assets/one.jpg')} style={styles.inner1}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </ImageBackground>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
    <Header />
    <Boxes />
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

