import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from './Screens/Home';
import Alphabets from './Screens/Alphabets';
import Numbers from './Screens/Numbers';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Welcome from './Screens/Welcome';
import A from './alphabets/A';
import B from './alphabets/B';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import {AuthProvider, useAuth} from './components/AuthContext';
import Tabs from './components/Tabs';
import { Button } from 'react-native-elements';
import { useCameraPermission } from 'react-native-vision-camera';
import CameraScreen from './api/CLone';
import ImagePicker from './api/ImagePicker';
import C from './alphabets/C';
import D from './alphabets/D';
import BasicGesture from './Screens/BasicGesture';
import First from './numbers/First';
import Second from './numbers/Second';
import Third from './numbers/Third';
import Fourth from './numbers/Fourth';
import Dictionary from './Screens/Dictonary';
import Yes from './basges/Yes';
import No from './basges/No';
import Stop from './basges/Stop';
import Sorry from './basges/Sorry';
import Water from './basges/Water';
import Sleep from './basges/Sleep';
import Share from './basges/Share';
import Sad from './basges/Sad';
import Please from './basges/Please';
import Play from './basges/Play';
import More from './basges/More';
import Loveyou from './basges/Loveyou';
import Love from './basges/Love';
import Hungery from './basges/Hungery';
import Help from './basges/Help';
import Drink from './basges/Drink';
import Done from './basges/Done';
import Bath from './basges/Bath';
import Angry from './basges/Angry';
import Afraid from './basges/Afraid';
import QuizOne from './basges/QuizOne';
import QuizTwo from './basges/QuizTwo';
import QuizThree from './basges/QuizThree';
import QuizFourth from './basges/QuizFourth';

const Stack = createStackNavigator();

function App(){
 return(
      <Layout>
      </Layout>
 ) 
}

// App component renders the NavigationContainer with Tabs component inside it
export const Layout = () => {
  const { authState , onLogout} = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='Alphabets' component={Alphabets} />
        <Stack.Screen name='A' component={A} options={{gestureEnabled: false,headerLeft: () => null, }} />
        <Stack.Screen name='B' component={B} options={{gestureEnabled: false,headerLeft: () => null, }} />
        <Stack.Screen name='C' component={C} options={{gestureEnabled: false,headerLeft: () => null, }} />
        <Stack.Screen name='D' component={D}  options={{gestureEnabled: false,headerLeft: () => null, }} /> 
        <Stack.Screen name='Numbers' component={Numbers} />
        <Stack.Screen name='First' component={First} />
        <Stack.Screen name='Second' component={Second} />
        <Stack.Screen name='Third' component={Third} />
        <Stack.Screen name='Fourth' component={Fourth} />
        <Stack.Screen name='BasicGesture' component={BasicGesture} />
        <Stack.Screen name='Yes' component={Yes} />
        <Stack.Screen name='No' component={No} />
        <Stack.Screen name='Stop' component={Stop} />
        <Stack.Screen name='Sorry' component={Sorry} />
        <Stack.Screen name='Water'component={Water}/>
        <Stack.Screen name='QuizOne' component={QuizOne} />
        <Stack.Screen name='Sleep' component={Sleep} />
        <Stack.Screen name='Share' component={Share} />
        <Stack.Screen name='Sad' component={Sad} />
        <Stack.Screen name='Please' component={Please} />
        <Stack.Screen name='Play' component={Play}/>
        <Stack.Screen name='QuizTwo' component={QuizTwo} />
        <Stack.Screen name='More' component={More}/>
        <Stack.Screen name='Loveyou' component={Loveyou}/>
        <Stack.Screen name='Love' component={Love}/>
        <Stack.Screen name='Hungery' component={Hungery}/>
        <Stack.Screen name='Help' component={Help}/>
        <Stack.Screen name='QuizThree' component={QuizThree} />
        <Stack.Screen name='Drink' component={Drink}/>
        <Stack.Screen name='Done' component={Done}/>
        <Stack.Screen name='Bath' component={Bath}/>
        <Stack.Screen name='Angry' component={Angry}/>
        <Stack.Screen name='Afraid' component={Afraid}/>
        <Stack.Screen name='QuizFourth' component={QuizFourth} />
        <Stack.Screen name='Dictionary' component={Dictionary} />
        <Stack.Screen name='CameraScreen' component={CameraScreen}/>
        <Stack.Screen name='ImagePicker' component={ImagePicker}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  shadow:{
    shadowColor: 'Red',
    shadowOffset: {
      width:0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  glowingButton: {
    shadowColor: '#3498db', // Color of the glow
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  }

})
export default App;
