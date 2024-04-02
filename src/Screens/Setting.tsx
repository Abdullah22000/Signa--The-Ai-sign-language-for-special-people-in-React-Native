import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Setting_Picture = require('../assets/set.png');
const account = require('../assets/profile/account.png');
const help = require('../assets/profile/help.png');
const logout = require('../assets/profile/logout.png');
const notification = require('../assets/profile/notifi.png');

const Setting = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topSection}>
          <View style={styles.propicArea}>
            <Image source={Setting_Picture} style={styles.propic}/>
          </View>

        </View>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
            <Image source={account} style={styles.iconStyle}/>
          </View>
            <Text style={styles.buttonName}>Account</Text>
        </View>
        <View style={styles.sp}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
            <Image source={notification} style={styles.iconStyle}/>
          </View>
            <Text style={styles.buttonName}>Notification</Text>
        </View>
        <View style={styles.sp}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
            <Image source={help} style={styles.iconStyle}/>
          </View>
            <Text style={styles.buttonName}>Help</Text>
        </View>
        <View style={styles.sp}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
            <Image source={logout} style={styles.iconStyle}/>
          </View>
            <Text style={styles.buttonName}>LogOut</Text>
        </View>
        <View style={styles.sp}></View>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  safeArea:{
    flex:1
  },
  topSection:{
      height:300,
      justifyContent:"center",
      alignItems:'center'
  },
  propicArea:{
      width:180,
      height:180,
      borderRadius: 100,
      borderWidth:3,
      borderColor:"red"  
  },
  propic:{
    width: '100%',
    height: '100%'
  },
  name:{
    marginTop:20,
    color:"white",
    fontSize: 30
  },
  buttonSection:{
    padding:15,
    paddingLeft: 25,
    paddingRight: 10
  },
  buttonArea:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
  iconArea:{
    width:50,
    height:50,
    justifyContent:"center",
    alignContent:"center",
  },
  iconStyle:{
    width:"100%",
    height:"100%"
  },
  buttonName:{
    width: 300,
    fontSize: 20,
    color:"white",
    marginLeft: 28,
  },
  sp:{
    width:400,
    marginTop:10,
    height:0.5,
    backgroundColor: '#FFFFFF90'
  }
})