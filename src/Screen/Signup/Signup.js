import { View, Text } from 'react-native'
import React from 'react'
import SignupComponent from '../../Components/Signup/Signup.Component';

const Signup = ({ navigation }) => {
    return <>
        <SignupComponent navigation={navigation} />
    </>
}

export default Signup;