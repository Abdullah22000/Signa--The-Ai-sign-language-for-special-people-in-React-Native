import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import * as ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  mediaType: 'photo',
};

const App = () => {
  const [image, setImage] = useState<string | null>(null); // Specify the type of state
  const [id, setId] = useState(null);
  const [result, setResult] = useState();

  const pickImage = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const source = { uri: response.assets[0].uri };
        setImage(source.uri);
        uploadImage(source.uri);  // Call the upload function
      }
    });
  };

  const uploadImage = async (uri: string | undefined) => {
    if (!uri) {
      return;
    }

    const formData = new FormData();
  
    // Extract file extension
    const uriParts = uri.split('.');
    const fileType = uriParts[uriParts.length - 1];
  
    // Determine mime type based on file extension
    let mimeType = 'image/jpeg'; // Default to JPEG if extension is unknown
    if (fileType === 'jpg' || fileType === 'jpeg') {
      mimeType = 'image/jpeg';
    } else if (fileType === 'png') {
      mimeType = 'image/png';
    } else if (fileType === 'gif') {
      mimeType = 'image/gif';
    } // Add more mime types as needed
  
    // Append the image to FormData
    formData.append('image', {
      uri,
      name: `photo.${fileType}`,
      type: mimeType,
    });

    try {
      let response = await fetch('http://192.168.43.41:8000//api/v1.0/user/upload/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

      
    if (response.ok) {
      let responseJson = await response.json();
      const { id, result } = responseJson;  // Destructure id and result from the response
      setId(id);  // Set the ID
      setResult(result);  // Set the result

      console.log(responseJson);
      Alert.alert('Upload Successful', 'Your image has been uploaded successfully.');

      setImage(null);  // Clear the image
    } else {
      throw new Error('Upload failed');
    }
  } catch (error) {
    console.error('Upload failed: ', error);
    Alert.alert('Upload Failed', 'Network request failed');
  }
};

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button 
      title="Select Image" 
      onPress={pickImage} 
      />
      <View>
      <Text style={styles.idtxt}>Your SIGN is: {id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  idtxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, 
  }
});

export default App;
