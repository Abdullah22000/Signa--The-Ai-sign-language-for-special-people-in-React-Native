import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
          <View style={styles.header}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}>
              <Image 
                source={require('../assets/left.png')}
                style={{width:40,height:40, margin:10,backgroundColor:"white",borderRadius:25}}
              />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
              navigation.navigate('Tabs')
            }}>
              <Image 
                source={require('../assets/arrow-right.png')}
                style={{width:40,height:40, margin:10,backgroundColor:"white",borderRadius:20}}
              />
            </TouchableOpacity>
          </View>
        );
}
 

export default Header

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: '7%',
        backgroundColor: 'black',
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'space-between', // Space out buttons evenly
        alignItems: 'center', // Center buttons vertically
    }    
})