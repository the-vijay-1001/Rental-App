import { View, Text, Image } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Signin.css';

const SigninComponent = ({ navigation }) => {
    return (
        <View>
            <View className="bg-red-200 mt-10 p-5">
                <View style={styles.imageContainer}>
                    <Icon name='user' size={150} />
                </View>
            </View>
        </View>
    )
}

export default SigninComponent;