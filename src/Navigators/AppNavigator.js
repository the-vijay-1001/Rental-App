import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from '../Screen/Welcome/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../Screen/Land/Landing';
import { Example } from '../Components/Example/example';
import Signup from '../Screen/Signup/Signup';
import Signin from '../Screen/Signin/Signin';
// import WelcomeComponent from "../Components/Welcome/Welcome.component";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const AppNavigator = () => (
    <Stack.Navigator initialRouteName='Welcom'>
        <Stack.Screen name="example" component={Example} options={{ headerShown: false }} />
        <Stack.Screen name='Welcom' component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Land' component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='Signin' component={Signin} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default AppNavigator;