import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';


const Alphabets= () => {
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
            selectedImage === 'A'
              ? require('../assets/az/A.jpg')
              : selectedImage === 'B'
              ? require('../assets/az/B.jpg')
              : selectedImage === 'C'
              ? require('../assets/az/C.jpg')
              : selectedImage === 'D'
              ? require('../assets/az/D.jpg')
              : selectedImage === 'E'
              ? require('../assets/az/E.jpg')
              : selectedImage === 'F'
              ? require('../assets/az/F.jpg')
              : selectedImage === 'G'
              ? require('../assets/az/G.jpg')
              : selectedImage === 'H'
              ? require('../assets/az/H.jpg')
              : selectedImage === 'I'
              ? require('../assets/az/I.jpg')
              : selectedImage === 'J'
              ? require('../assets/az/J.jpg')
              : selectedImage === 'K'
              ? require('../assets/az/K.jpg')
              : selectedImage === 'L'
              ? require('../assets/az/L.jpg')
              : selectedImage === 'M'
              ? require('../assets/az/M.jpg')
              : selectedImage === 'N'
              ? require('../assets/az/N.jpg')
              : selectedImage === 'O'
              ? require('../assets/az/O.jpg')
              : selectedImage === 'P'
              ? require('../assets/az/P.jpg')
              : selectedImage === 'Q'
              ? require('../assets/az/Q.jpg')
              : selectedImage === 'R'
              ? require('../assets/az/R.jpg')
              : selectedImage === 'S'
              ? require('../assets/az/S.jpg')
              : selectedImage === 'T'
              ? require('../assets/az/T.jpg')
              : selectedImage === 'U'
              ? require('../assets/az/U.jpg')
              : selectedImage === 'V'
              ? require('../assets/az/V.jpg')
              : selectedImage === 'W'
              ? require('../assets/az/W.jpg')
              : selectedImage === 'X'
              ? require('../assets/az/X.jpg')
              : selectedImage === 'Y'
              ? require('../assets/az/Y.jpg')
              : require('../assets/az/Z.jpg')
          }
            style={styles.image}
          />
        )}
         <View style={styles.buttonContainer}>
          {/* Replace TouchableOpacity buttons with a flat array to handle dynamic rendering */}
          {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, index) => (
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
          {['G', 'H', 'I', 'J', 'K', 'L'].map((letter, index) => (
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
          {['M', 'N', 'O', 'P', 'Q', 'R'].map((letter, index) => (
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
          {['S', 'T', 'U', 'V', 'W', 'X'].map((letter, index) => (
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
          {['Y', 'Z'].map((letter, index) => (
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
              onPress={() =>{navigation.navigate('A')}}
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
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default Alphabets;
