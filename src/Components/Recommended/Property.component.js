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

function Recommended({ navigation }) {
    const styles = StyleSheet.create({
        container: {
            height: hp(50),
            width: wp(100),
            padding: 5,
        },
        inn: {
            height: hp(45),
            padding: 10,
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
            paddingBottom: 8,
        }
    })
    return <>
        <ScrollView horizontal>
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://www.thespruce.com/thmb/Zp91irzUDWsJAIuwT0d3R0KVbTI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DSCF6983-2e54e701a8fe4c3ba02516caaad115ef.jpg" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington , New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>5022.67/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://www.ikea.com/images/a-colourful-living-room-with-a-sofa-and-a-chaise-longue-in-o-00751d1b036ac33f4730ffbc32c08cc9.jpg?f=xxxl" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Spacelly Bunglow</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Uvn , New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.5</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>15400.54/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://img.freepik.com/photos-premium/illustration-maquette-chambre-interieurs-lumineux-minimes-modernes-grand-luxe_883101-6236.jpg" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington,New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>52.67/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://img.freepik.com/premium-photo/yellow-modern-interior-style-generative-aixa_174954-1891.jpg?size=626&ext=jpg&ga=GA1.1.680983195.1696464000&semt=ais" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington,New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>52.67/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://www.shapeinteriors.in/starter/wp-content/uploads/2014/02/jaipur%20interior%20designer.jpg" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington,New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>52.67/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg?f=xxxl" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington,New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>52.67/-</Text>
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
            <View style={styles.container}>
                <View style={styles.inn}>
                    <View style={styles.other}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: "https://cdn.shopify.com/s/files/1/2983/8386/t/20/assets/ftt006living_room_walls_white-hart-no51skirting_landscape-1665269269636.jpg?v=1665269271" }} />
                        </View>
                        <View style={styles.contant}>
                            <Text style={styles.name}>Duplex Appartment</Text>
                        </View>
                        <View style={styles.contantarea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.locate} color="blue" name="map-marker" />
                                <Text style={styles.areaName}>Washington,New York</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: hp(3) }}>
                                <Icon name='star' color="gold" size={20} />
                                <Text style={{ marginLeft: hp(1) }}>4.3</Text>
                            </View>
                        </View>
                        <View style={styles.priceArea}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon style={styles.inr} color="blue" name="inr" />
                                <Text style={styles.price}>52.67/-</Text>
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
        </ScrollView>
    </>
}

export default Recommended;