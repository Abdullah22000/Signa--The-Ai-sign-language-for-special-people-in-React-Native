import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native';

interface WelcomeProps {
  navigation: NavigationProp<any>; // You can replace 'any' with the type of your navigation stack
}
const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <View style={{alignItems:'center', flex:1, height:'50%',backgroundColor:'black'}}>
     <Image source={require('../assets/kn.jpg')}  style={{ width: '100%', height:'60%' }}/>

     <Text style={styles.textone}>Learn Sign language with AI </Text>

     <Text style={styles.texttwo}>SIGNA: "Empowering communication through graceful gestures."</Text>

     <TouchableOpacity style={styles.touch}
      onPress={()=>{
        navigation.navigate("Tabs")
      }}
      >
      <Text style={{fontSize:18, color:"#fff", fontWeight:"700"}}>Let's GO</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  textone:{
    color:'#f96163',
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily:"Times New Roman",
  },
  texttwo:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 44,
    marginBottom: 20,
    marginLeft: 30,
    textAlign:'center'
  },
  touch:{
    backgroundColor:"#f96163",
    borderRadius:18,
    paddingVertical:18,
    width:"80%",
    padding: "20%"
  }
})