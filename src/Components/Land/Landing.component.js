import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import tw from 'tailwind-rn';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from "react-native";
import CategoryComponent from "../Category/Category.component";
import AllProperty from "../AllProperty/Property.component";
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';
import Recommended from "../Recommended/Property.component";
import { Avatar, Searchbar } from 'react-native-paper';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
function LandingComponent({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            height: "auto",
            width: wp(100),
            backgroundColor: "white",
        },
        innerContainer: {
            backgroundColor: "white",
            height: hp(7),
            width: wp(100),
            marginTop: hp(5.5),
            alignItems: "center",
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(5),
            paddingRight: wp(5)
        },
        menubar: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        location: {
            marginLeft: wp(3),
            fontSize: 13
        },
        locate: {
            fontSize: 14,
            color: "blue",
            marginLeft: wp(3)
        },
        searchContainer: {
            height: hp(10),
            width: wp(93),
            marginTop: hp(1.5),
            justifyContent: "center",
            alignSelf: "center"
        },
        input: {
            backgroundColor: "white",
            padding: 10,
            marginLeft: 32,
            marginRight: 10,
            width: wp(70),
            borderWidth: 0.5,
            borderColor: "gray",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
        },
        searchIcon: {
            position: "absolute",
            zIndex: 1,
            paddingLeft: 25,
            backgroundColor: "white",
        },
        icno: {
            backgroundColor: "white",
            position: "absolute",
            zIndex: 1,
            width: wp(9),
            height: hp(6.4),
            justifyContent: 'center',
            paddingLeft: wp(2),
            marginLeft: 5,
            paddingBottom: wp(1),
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            borderWidth: 0.5,
            borderColor: "gray",
        },
        filter: {
            padding: wp(3),
            borderWidth: 0.2,
            borderRadius: 5,
            marginRight: wp(3)
        },
        populer: {
            fontSize: 16,
            fontWeight: "600",
            marginLeft: hp(2.8),
            color: 'gray'
        },
        see: {
            marginRight: wp(8)
        },
        line: {
            width: wp(45.5),
            borderBottomWidth: 1.5,
            marginLeft: wp(6.1),
            marginTop: hp(-1.5),
            borderColor: "gray"
        }
    })
    function onChangeSearch(e) {
        console.log(e)
    }
    const [searchQuery, setS] = useState('');
    return <>
        <ScrollView>
            <StatusBar style="dark" />

            <View style={styles.container}>

                {/* top navbar */}

                <Animated.View style={styles.innerContainer} entering={FadeInDown.delay(300).duration(600)}>
                    <Animated.View style={styles.menubar}>
                        <View style={{ borderWidth: 0.2, padding: 8, borderRadius: 5 }}><Text><Icon name="bars" size={25} /></Text></View>
                        <View>
                            <Text style={styles.location}>
                                Location
                            </Text>
                            <Text style={styles.locate}>
                                Indore , Madhya Pradesh
                            </Text>
                        </View>
                    </Animated.View>
                    <TouchableOpacity onPress={() => navigation.push("Signin")}>
                        <Animated.View>
                            <Avatar.Image size={45} source={{ uri: "https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg" }} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>

                {/* search container */}

                <Animated.View style={styles.searchContainer} entering={FadeInDown.delay(600).duration(500)}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        fontSize={15}
                    />
                </Animated.View>

                {/* categories */}

                <Animated.View entering={FadeInRight.delay(1200).duration(500)}>
                    <CategoryComponent navigation={navigation} />
                </Animated.View>

                {/* Populer property */}

                <Animated.View entering={FadeInDown.delay(1500).duration(700)}>
                    <Text style={styles.populer}>Populer Nearest You . . </Text>
                    <Text style={styles.line}></Text>
                    <AllProperty navigation={navigation} />
                </Animated.View>

                {/* Recommended properties */}

                {/* <Animated.View entering={FadeInDown.delay(1800).duration(700)}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.populer}>Recommended You . . </Text>
                        <Text style={styles.see}>See More</Text>
                    </View>
                    <Text style={styles.line}></Text>
                    <Recommended navigation={navigation} />
                </Animated.View> */}

                {/* something else */}
            </View>
        </ScrollView>
    </>
}

export default LandingComponent;