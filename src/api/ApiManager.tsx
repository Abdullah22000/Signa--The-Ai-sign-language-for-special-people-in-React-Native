import React, { useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, Linking } from 'react-native';

const Hero = () => {
  const handleClick = () => {
    // Function logic for handling the button click
    console.log('Button clicked');
    // Navigate to the specified URL
    // In React Native, you would typically use Linking module to open URLs
    Linking.openURL('http://127.0.0.1:8000/start_ai');
  };

  const secure = () => {
    // Send HTTP request here and set the response
    fetch('')
      .then((response) => response.json())
      .then((data) => {
        // Open a new window with the response content is not possible in React Native
        // Instead, you can display the response in a modal or a separate screen
        console.log(JSON.stringify(data, null, 2));
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          Explore the Possibilities of AI SecureVision{' '}
          <Text style={styles.secureVisionText}>SecureVision</Text>
        </Text>
        <Text style={styles.body}>
          Unleash the power of AI within SecureVision. Upgrade your productivity
          with SecureVision, the Secure Eye web App.
        </Text>
        <Button title="Get started" onPress={handleClick} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('./path_to_your_image/robot.jpg')}
          style={styles.image}
        />
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
    color: 'blue', // You can style this part differently if needed
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
    height: 300, // Adjust height as needed
    resizeMode: 'contain',
  },
});

export default Hero;
