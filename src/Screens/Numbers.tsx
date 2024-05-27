import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';


const Numbers= () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePress = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.keyboard}>
        {selectedImage && (
          <Image
          source={
            selectedImage === '1'
              ? require('../assets/num/1.jpg')
              : selectedImage === '2'
              ? require('../assets/num/2.jpg')
              : selectedImage === '3'
              ? require('../assets/num/3.jpg')
              : selectedImage === '4'
              ? require('../assets/num/4.jpg')
              : selectedImage === '5'
              ? require('../assets/num/5.jpg')
              : selectedImage === '6'
              ? require('../assets/num/6.jpg')
              : selectedImage === '7'
              ? require('../assets/num/7.jpg')
              : selectedImage === '8'
              ? require('../assets/num/8.jpg')
              : selectedImage === '9'
              ? require('../assets/num/9.jpg')
              : selectedImage === '10'
              ? require('../assets/num/10.jpg')
              : selectedImage === '20'
              ? require('../assets/num/20.jpg')
              : selectedImage === '30'
              ? require('../assets/num/30.jpg')
              : require('../assets/num/40.jpg')
          }
            style={styles.image}
          />
        )}
         <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['1', '2', '3'].map((letter, index) => (
            <TouchableOpacity
              key={index} // Use a unique key for each button
              style={styles.button}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['4','5', '6',].map((letter, index) => (
            <TouchableOpacity
              key={index} // Use a unique key for each button
              style={styles.button}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['7', '8', '9'].map((letter, index) => (
            <TouchableOpacity
              key={index} // Use a unique key for each button
              style={styles.button}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['10','20','30'].map((letter, index) => (
            <TouchableOpacity
              key={index} // Use a unique key for each button
              style={styles.button}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['40'].map((letter, index) => (
            <TouchableOpacity
              key={index} // Use a unique key for each button
              style={styles.button}
              onPress={() => handlePress(letter)}
            >
              <Text style={styles.buttonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
          
        <TouchableOpacity
              style={styles.buttonQ}
              onPress={() =>{navigation.navigate('First')}}
            >
              <Text style={styles.buttonTextQ}>Quiz</Text>
            </TouchableOpacity>  
        </View>      

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between', // Space out buttons evenly
    alignItems: 'center', // Center buttons vertically
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#16419e',
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  buttonQ: {
    alignItems: 'center',
    backgroundColor: '#ba0202',
    padding: 10,
    margin: 5,
    height: 50,
    width: 90,
    borderRadius: 15,
  },
  buttonTextQ:{
    color: '#FFFFEE',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#FFFFEE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  keyboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 230,
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Numbers;
