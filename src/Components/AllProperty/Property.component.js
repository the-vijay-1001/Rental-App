import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import styles from './AllProperty.css';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Animated, { FadeInDown, FadeInRight, FadeInUp } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import api, { PORT } from '../../WebApi/api';

function AllProperty({ navigation }) {
    const [data, setData] = useState();
    const styles = StyleSheet.create({
        container: {
            height: hp(50),
            width: wp(100),
            padding: 5
        },
        inn: {
            height: hp(45),
            padding: 10
        },
        imageContainer: {
            height: hp(30),
            borderRadius: hp(3),
        },
        image: {
            width: 'auto',
            flex: 1,
            borderRadius: hp(3),
        },
        contant: {
            paddingLeft: hp(2.5),
            paddingTop: hp(1.5)
        },
        name: {
            fontSize: 20,
            fontWeight: "700"
        },
        contantarea: {
            paddingLeft: hp(2.5),
            flexDirection: "row",
            justifyContent: "space-between"
        },
        locate: {
            marginTop: hp(0.5),
            marginRight: hp(0.5)
        },
        areaName: {
            color: "blue"
        },
        inr: {
            fontSize: 22,
            marginTop: hp(0.8),
            marginRight: hp(0.5),
        },
        price: {
            fontSize: 22,
            fontWeight: "700"
        },
        heart: {
            backgroundColor: "white",
            height: hp(4),
            width: wp(9),
            padding: wp(1.5),
            borderRadius: hp(50),
            borderWidth: 0.5
        },
        priceArea: {
            marginTop: hp(1),
            paddingLeft: hp(2.5),
            flexDirection: "row",
            justifyContent: "space-between"
        },
        other: {
            borderWidth: 0.5,
            borderRadius: hp(3),
            paddingBottom: 8
        }
    })
    useEffect(() => {
        fetchProperty();
    }, [])

    async function fetchProperty() {
        const result = await axios.get(api.PROPERTY_LIST);
        if (result) {
            setData(result.data.property);
        }
    }
    return <>
        <ScrollView horizontal>
            {data && data?.map((data, index) => <View key={index}>
                <View style={styles.container}>
                    <View style={styles.inn}>
                        <View style={styles.other}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{ uri: `${PORT}/upload/${data.imagesUrlArray[1]}` }} />
                            </View>
                            <View style={styles.contant}>
                                <Text style={styles.name}>{data?.houseCategory?.toUpperCase()}</Text>
                            </View>
                            <View style={styles.contantarea}>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={styles.locate} color="blue" name="map-marker" />
                                    <Text style={styles.areaName}>{data?.locationAddress != "undefined" ? data?.locationAddress : "Indore"}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                    <Icon name='star' color="gold" size={20} />
                                    <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                                </View>
                            </View>
                            <View style={styles.priceArea}>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon style={styles.inr} color="blue" name="inr" />
                                    <Text style={styles.price}>{data?.rent}/-</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                    <View style={styles.heart}>
                                        <Icon name='heart-o' color="red" size={20} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>)}
        </ScrollView>
    </>
}

export default AllProperty;