import { Alert, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Setting_Picture = require('../assets/set.png');
const help = require('../assets/profile/help.png');
const notification = require('../assets/profile/notifi.png');
const logout = require('../assets/profile/logout.png');

const Setting = () => {
  const navigation = useNavigation();

  const showAlert = () => {
    Alert.alert(
      '📢 Notification',
      'Message: 🌟 Dive into the world of PSL with Signa! Our app provides an interactive and engaging way to learn and practice Pakistan Sign Language. Whether you are a beginner or looking to enhance your skills, Signa offers a variety of lessons, gesture recognition, and real-time feedback! 🤟',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

  const showHelpAlert = () => {
    Alert.alert(
      '🆘 Need Help? Discover Support in Signa!',
      'Message: 📚 Learning PSL made easy with Signa! If you ever need assistance or have questions, our Help section is here for you. Access tutorials, FAQs, and contact support for personalized help. We are here to support you every step of the way.🌟 \n\nEmail: signasupport@gmail.com',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

  const handleLogout = async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const accessToken = await AsyncStorage.getItem('accessToken');

      if (!refreshToken || !accessToken) {
        navigation.navigate('Login')
      }

      const response = await fetch('http://192.168.18.194:8000/api/v1.0/user/logout-user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (response.ok) {
        console.log('LogOut User');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('accessToken');
        navigation.navigate('Login'); // Ensure you have a Login screen in your navigator
      } else {
        console.log('Error:', response.statusText);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Logout error:', error.message); // Log the specific error message
      } else {
        console.error('Unexpected logout error', error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topSection}>
          <View style={styles.propicArea}>
            <Image source={Setting_Picture} style={styles.propic} />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9} onPress={showAlert}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
              <Image source={notification} style={styles.iconStyle} />
            </View>
            <Text style={styles.buttonName}>Notification</Text>
          </View>
          <View style={styles.sp}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9} onPress={showHelpAlert}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
              <Image source={help} style={styles.iconStyle} />
            </View>
            <Text style={styles.buttonName}>Help</Text>
          </View>
          <View style={styles.sp}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSection} activeOpacity={0.9} onPress={handleLogout}>
          <View style={styles.buttonArea}>
            <View style={styles.iconArea}>
              <Image source={logout} style={styles.iconStyle} />
            </View>
            <Text style={styles.buttonName}>LogOut</Text>
          </View>
          <View style={styles.sp}></View>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  safeArea: {
    flex: 1
  },
  topSection: {
    height: 300,
    justifyContent: "center",
    alignItems: 'center'
  },
  propicArea: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "red"
  },
  propic: {
    width: '100%',
    height: '100%'
  },
  name: {
    marginTop: 20,
    color: "white",
    fontSize: 30
  },
  buttonSection: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 10
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconArea: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20
  },
  iconStyle: {
    width: "100%",
    height: "100%"
  },
  buttonName: {
    width: 300,
    fontSize: 20,
    color: "white",
    marginLeft: 28,
  },
  sp: {
    width: 400,
    marginTop: 10,
    height: 0.5,
    backgroundColor: '#FFFFFF90'
  }
});
