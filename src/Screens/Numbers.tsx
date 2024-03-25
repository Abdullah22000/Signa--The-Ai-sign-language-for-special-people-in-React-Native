import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Numbers = () => {
    const navigation = useNavigation();

    const goBack = () => {
      navigation.goBack(); // Navigate back to the previous screen
    };
  
    return (
      <View style={styles.container}>
        <Button title="Go Back" onPress={goBack} />
      </View>
    );
}

export default Numbers

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  