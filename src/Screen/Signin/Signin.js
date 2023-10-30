import { View, Text } from 'react-native'
import React from 'react'
import SigninComponent from '../../Components/Signin/Signin.Component';

const Signin = ({ navigation }) => {
    return <>
        <SigninComponent navigation={navigation} />
    </>
}

export default Signin;