import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {

    const [ form, setForm] = useState({
        email:'',
        password:'',
    });
    
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
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <Header/>
      <View style={styles.container}>
        <View style={styles.headertitle} >
            <Image
                source={require('../assets/profile/profile.png')}
                style={styles.headerImg}
            />
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
                value={form.email}
                onChangeText={email => setForm({...form, email})}
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
                value={form.password}
                onChangeText={ password => setForm({...form, password})}
                />
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{margin:'auto'}}
              onPress={()=>{
                //handlePress
              }}
            >
              </TouchableOpacity>
              <View style={{flexDirection:'row',justifyContent:"center"}}>
              <Text style={styles.formFooter}>Don't have a account? </Text>
               <TouchableOpacity 
               onPress={()=>navigation.navigate('SignUp')}> 
                <Text style={{textDecorationLine:"underline",color:"white", fontSize:20,marginTop:16}}>Sign up</Text>
               </TouchableOpacity>
              
              </View>

        </View>
        <View style={{alignItems:'center'}}>
          <View style={{ width: '100%',height: 1,backgroundColor:'grey',marginTop:10}}>
          </View>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
              <View style={{
                backgroundColor:"white",
                borderRadius:8,
                borderWidth:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                paddingVertical:10,
                paddingHorizontal:20,
                marginTop:15,
                marginRight:10
              }}>
                  <Image
                    source={require('../assets/google.png')}
                    style={{width:40,height:40}}
                  />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{
                backgroundColor:"white",
                borderRadius:8,
                borderWidth:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                paddingVertical:10,
                paddingHorizontal:20,
                marginTop:15,
              }}>
                  <Image
                    source={require('../assets/facebook.png')}
                    style={{width:40,height:42}}
                  />
              </View>
            </TouchableOpacity>
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
      headertitle:{
        marginVertical: 15,
        color:"white",
        fontSize:25,
        marginLeft:47,
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
      }
      
})