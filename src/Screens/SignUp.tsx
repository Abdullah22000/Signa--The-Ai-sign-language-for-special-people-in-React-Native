import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../components/Header'
import { Image } from 'react-native-elements'

const SignUp = () => {
    const [ form, setForm] = useState({
        email:'',
        password:'',
        Firstname:'',
        Lastname:'',
        
    });
  return (
    
    <View style={styles.container}>
    <ScrollView>
        <Header/>
        <View style={{alignItems:"center",marginTop:15}}>
            <Image
                source={require('../assets/signup/red.png')}
                style={{height:120,width:120,}}
            />
        </View>
        <View style={{marginTop:40}}>
        <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name:</Text>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputControl}
            placeholder='Ali'
            placeholderTextColor="#6b7280"
            value={form.Firstname}
            onChangeText={Firstname => setForm({...form, Firstname})}
            />
        </View>

        <View style={styles.input}>
        <Text style={styles.inputLabel}>Last Name:</Text>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputControl}
            placeholder='Hassan'
            placeholderTextColor="#6b7280"
            value={form.Lastname}
            onChangeText={Lastname => setForm({...form, Lastname})}
            />
        </View>

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

    </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
    </ScrollView>
    </View>
    
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    inputLabel:{
        fontSize: 17,
        fontWeight:"600",
        color:"white",
        marginBottom:15,
        marginTop:15,
        marginLeft:10
      },
    input:{},
    inputControl:{
        height:44,
        backgroundColor: '#fff',
        paddingHorizontal:16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: "500",
        color:"#222",
        width:"96%",
        marginLeft:12,
      },
    btn:{
        backgroundColor:"#075eec",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#075eec",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:40,
        width:"80%",
        alignSelf:"center"
      },
    btnText:{
        fontSize:20,
        fontWeight:"600",
        color:'#fff'
      },
})