import React from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
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
          source={require('../assets/ai.jpg')}
          style={{ width: 410, height: 250, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
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
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALPHABETS</Text>
          </View>
        </Pressable>
        <Pressable onPress={goToNumbers} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>NUMBER</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
        </Pressable>
        <Pressable onPress={Alphabets} style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.cardDescription}>ALLAH</Text>
          </View>
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
  inner: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    backgroundColor: 'pink',
  },
  cardDescription: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

