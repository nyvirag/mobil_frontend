import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Proba from './Proba'
import Proba2 from './Proba2'
import Proba3 from './Proba3'
import Proba4 from './Proba4';
import Kep4 from './Kep4';
import Lenyilo from './Lenyilo';
import ProbaFeltoltes from './ProbaFeltoltes'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />

      <Button onPress={() => navigation.navigate('Proba4')} title="Próba4 screen meghívása" /> 

      <Button onPress={() => navigation.navigate('ProbaFeltoltes')} title="PróbaFeltöltés meghívása" /> 
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Root({ navigation }){
  return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Próba" component={ProbaScreen} />
        <Drawer.Screen name="Próba2" component={ProbaScreenSW} />
        <Drawer.Screen name="Próba3" component={ProbaScreen3} />
        <Drawer.Screen name="Proba4" component={Proba4} />
        <Drawer.Screen name="Kep4" component={Kep4} />
        <Drawer.Screen name="Lenyilo" component={Lenyilo} />
        <Drawer.Screen name="ProbaFeltoltes" component={ProbaFeltoltes} />
      </Drawer.Navigator>
  );
}

function ProbaScreen({ navigation }) {
  return (
     <Proba/>
  );
}


function ProbaScreenSW({ navigation }) {
  return (
    <Proba2/>
  );
}

function ProbaScreen3({ navigation }) {
  return (
    <Proba3/>
  );
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Root" component={Root}  options={{headerShown:false}}/> 
          <Stack.Screen name="Proba4" component={Proba4} />
          <Stack.Screen name="ProbaFeltoltes" component={ProbaFeltoltes} />
        </Stack.Navigator>
          

          
    </NavigationContainer>
  );
}