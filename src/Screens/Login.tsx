import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { API_URL, useAuth } from '../components/AuthContext';
import { Alert } from 'react-native';
import {storeToken} from '../components/AsynStorage';


const Login = () => {

    const navigation = useNavigation();
    const Header = () => {
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
      const [email, setEmail] = useState('')
      const [ username, setUsername] = useState('')
      const [ password, setPassword] = useState('')
      const { onLogin, onRegister} = useAuth()

      const [error, setError] = useState<string | null>(null)
      const handleSubmit = async () => {
        try {
          const response = await fetch('http://192.168.43.41:8000/api/v1.0/user/login-user/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${username}&password=${password}`
          })

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const data = await response.json()
          console.log(data)
    
          if (data) {
            // Handle successful login
            // await storeToken(data.token)
            console.log('Login successful')
            Alert.alert("Welcome","Your are Logged In")
            navigation.navigate('Tabs')
            // login();
          } else {
            setError(data.error)
          }
        } catch (error) {
          setError('An error occurred')
        }
      }
      
      

  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <Header/>
      <View style={styles.container}>
        <View style={styles.headerimg} >
            <Image
                source={require('../assets/profile/profile.png')}
                style={styles.headerImg}
            />
        </View>
        <View style={{margin:12}}>
          <Text style={styles.headertitle}>Sign in to SIGNA</Text>
          <Text style={styles.subtitle}>Get access to your SIGNA and more</Text>
        </View>
        <View >
            <View style={styles.input}>
                <Text style={styles.inputLabel}>Email Address:</Text>

                <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                style={styles.inputControl}
                placeholder='abd@gmail.com'
                placeholderTextColor="#6b7280"
                value={username}
                onChangeText={text => setUsername(text)}
                // value={email}
                // onChangeText={(text : string) => setEmail(text)}
                />
            </View>

            <View style={styles.input}>
                <Text style={styles.inputLabel}>Password:</Text>

                <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputControl}
                placeholder='***********'
                placeholderTextColor="#6b7280"
                // value={password}
                // onChangeText={ (text : string) => setPassword(text)}
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.touchable}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           
              <View style={{flexDirection:'row',justifyContent:"center"}}>
              <Text style={styles.formFooter}>Don't have a account? </Text>
               <TouchableOpacity 
               onPress={()=>navigation.navigate('SignUp')}> 
                <Text style={{textDecorationLine:"underline",color:"#f567be", fontWeight:"bold",fontSize:20,marginTop:16}}>Sign up</Text>
               </TouchableOpacity>
              
              </View>

        </View>
        <View style={{alignItems:'center'}}>
          <View style={{ width: '100%',height: 1,backgroundColor:'grey',marginTop:10}}>
          </View>
        </View>
      </View>  
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
      },
    header: {
        width: '100%',
        height: '7%',
        backgroundColor: 'black',
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'space-between', // Space out buttons evenly
        alignItems: 'center', // Center buttons vertically
      },
      headerimg:{
        marginLeft:45
      },
      headertitle:{
        alignSelf:"center",
        marginLeft:5,
        color:"white",
        fontSize:25,
        fontWeight:"600"
        
      },
      headerImg:{
        width:150,
        height:150,
        alignSelf:"center",
        marginTop:20,
        marginRight:30
      },
      title:{
        fontSize:27,
        fontWeight: '700',
        color:"#1e1e1e",
        textAlign: 'center'
      },
      subtitle:{
        fontSize:18,
        fontWeight:"500",
        color:"#929292",
        marginBottom:6
      },
      input:{},
      inputLabel:{
        fontSize: 17,
        fontWeight:"600",
        color:"white",
        marginBottom:15,
        marginTop:12
      },
      inputControl:{
        height:44,
        backgroundColor: '#fff',
        paddingHorizontal:16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: "500",
        color:"#222"
      },
      btn:{
        backgroundColor:"#075eec",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#075eec",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:25
      },
      btnText:{
        fontSize:20,
        fontWeight:"600",
        color:'#fff'
      },
      formFooter:{
        fontSize:17,
        fontWeight:"600",
        color:'white',
        textAlign:'center',
        letterSpacing:0.15,
        marginTop:20
      },
    touchable: {
        marginTop:15,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
      
})


