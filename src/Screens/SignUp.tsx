import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { Image } from 'react-native-elements';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    Firstname: '',
    Lastname: '',
    username: '',
  });
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleSignup = async () => {

    try {
      const response = await fetch('http://192.168.43.41:8000/api/v1.0/user/create-user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          first_name: form.Firstname,
          last_name: form.Lastname,
          username: form.username,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.user_already_exists) {
          setMessage('User already exists. Please try again.');
          console.warn('User already exists:', data);
        } else {
          setMessage('User created successfully');
          console.log(data);
          console.log("signed up");
          navigation.navigate('Home');
        }
      } else {
        setMessage('Error creating user. Please try again.');
        console.error('Error:', response.status);
      }
    } catch (error) {
      setMessage('Error creating user. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Image
            source={require('../assets/signup/red.png')}
            style={{ height: 120, width: 120 }}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="username"
              placeholderTextColor="#6b7280"
              value={form.username}
              onChangeText={(username) => setForm({ ...form, username })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>First Name:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Fname"
              placeholderTextColor="#6b7280"
              value={form.Firstname}
              onChangeText={(Firstname) => setForm({ ...form, Firstname })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Last Name:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="Lname"
              placeholderTextColor="#6b7280"
              value={form.Lastname}
              onChangeText={(Lastname) => setForm({ ...form, Lastname })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="abd@gmail.com"
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputControl}
              placeholder="***********"
              placeholderTextColor="#6b7280"
              secureTextEntry
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleSignup}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 10,
  },
  input: {},
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    width: '96%',
    marginLeft: 12,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  message: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
});
