import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    console.log('Button clicked');
    Linking.openURL('http://192.168.18.122:8000/api/start_ai');
  };

  const secure = () => {
    fetch('http://192.168.18.122:8000/api/start_ai')
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data, null, 2));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          Explore the Best Learning Experience with {' '}
          <Text style={styles.secureVisionText}>SIGNA</Text>
        </Text>
        <Text style={styles.body}>
          Unleash the power of AI within. Upgrade your Sign Language Skill 
          with SIGNA.
        </Text>
        <Button title="Get started" onPress={handleClick} />
        <View style={styles.Camera}>
          <Button title="ImagePicker" onPress={() => navigation.navigate('ImagePicker')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  secureVisionText: {
    color: 'blue',
  },
  body: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
  },
  Camera: {
    margin: 10,
    paddingTop: 10,
  },
});

export default Profile;
