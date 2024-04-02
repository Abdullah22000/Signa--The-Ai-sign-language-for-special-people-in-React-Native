import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

interface Option {
  id: number;
  text: string;
  correct: boolean;
}

const B = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options: Option[] = [
    { id: 1, text: 'A', correct: false }, 
    { id: 2, text: 'B', correct: true }, // This option is correct
  ];

  const handleOptionPress = (option: Option) => {
    setSelectedOption(option);
    if (option.correct) {
      Snackbar.show({
        text: 'Correct!',
        duration: 3000, // Show for 3 seconds
      });
    } else {
      Snackbar.show({
        text: 'Incorrect. Try again!',
        duration: 3000, // Show for 3 seconds
      });
    }
  };

  const Header = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../assets/left-back.png')}
            style={{width:40,height:40, margin:10}}
          />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => {
          //navigation.navigate('Alphabets')
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
        <Image source={require('../assets/az/C.jpg')} 
          style={{height:"55%",width:"80%", marginTop:80, marginLeft:45}}            
        />
      </View>
      <View>
        <Text style={{fontSize:22, marginLeft:20,fontWeight:"900" }}>
          Select the correct Answer?
        </Text>
      </View>
      <View style={styles.buttonAB}>
        {options.map(option => (
          <TouchableOpacity 
            key={option.id}
            style={[
              styles.button,
              selectedOption === option && styles.selectedButton,
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={selectedOption !== null}
          >
            <Text style={{fontSize:25,fontWeight:"900"}}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent:"center",
  },
  header: {
    width: '100%',
    height: '7%',
    backgroundColor: 'yellow',
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between', // Space out buttons evenly
    alignItems: 'center', // Center buttons vertically
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 5,
    height:50,
    width:150,
  },
  selectedButton: {
    backgroundColor: 'green', // Color for the correct option
  },
  buttonAB:{
    flexDirection:"row",
    margin:20,
    marginLeft:30
  }
});

export default B;
