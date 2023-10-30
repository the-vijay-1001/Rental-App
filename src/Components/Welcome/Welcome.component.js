import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
function WelcomeComponent({ navigation }) {
    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);
    const sizze = useSharedValue(0);
    useEffect(() => {
        ring1padding.value = 0
        ring2padding.value = 0
        setTimeout(() => {
            ring1padding.value = withSpring(ring1padding.value + hp(2))
        }, 500);
        setTimeout(() => {
            ring2padding.value = withSpring(ring2padding.value + hp(4.4))
        }, 655);
        setTimeout(() => {
            navigation.push("Land");
        }, 2000);
    }, [])
    const styles = StyleSheet.create({
        main: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#B7F7F7",
        },
        container: {
            width: 250,
            height: 250
        },
        innerView: {
            backgroundColor: "#ffff",
            padding: ring1padding,
            borderRadius: hp("50%")
        },
        outerView: {
            backgroundColor: "lightgray",
            padding: ring2padding,
            borderRadius: hp("50%")
        },
        textDream: {
            fontSize: 33,
            fontWeight: "700"
        },
        contant: {
            padding: 50
        },
        start: {
            textAlign: 'center',
            color: 'black',
            fontWeight: '700',
            fontSize: 20,
        },
        final: {
            backgroundColor: 'yellow',
            padding: 15,
            marginTop: 5,
            width: 230,
            borderRadius: 50,
            marginTop: 20
        },
        contain: {
            color: "gray",
            fontSize: 28
        }
    });
    return <>
        <View style={styles.main}>
            <Animated.View style={styles.outerView}>
                <Animated.View style={styles.innerView}>
                    <View style={styles.container}>
                        <Image source={{ uri: "https://thefasttrick.com/live/public/userside/login/images/loginuser-img.png" }} style={styles.container} />
                    </View>
                </Animated.View>
            </Animated.View>
            <View style={styles.contant}>
                <Text style={styles.textDream}>
                    <Text style={styles.contain}>Find your</Text>
                </Text>
                <Text style={styles.textDream}>
                    <Text>Dream Home Here . . . . . .</Text>
                </Text>
            </View>
        </View>
    </>
}

export default WelcomeComponent;