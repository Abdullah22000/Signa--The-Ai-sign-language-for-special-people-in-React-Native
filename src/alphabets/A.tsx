import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {StackScreenProps} from "@react-navigation/stack"

type AlphabetsProps = StackScreenProps<RootStackPramList, "A">
const A = ({navigation}: AlphabetsProps) => {
    const goBack = () => {
      navigation.goBack(); // Navigate back to the previous screen
    };
  
    return (
      <View style={styles.container}>
        <Text>Muhammad</Text>
      </View>
    );
}

export default A

const styles = StyleSheet.create({
     container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})