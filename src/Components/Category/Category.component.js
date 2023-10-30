import { Image, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

function CategoryComponent({ navigation }) {
    const [isActive, setIsActive] = useState(false);
    const styles = StyleSheet.create({
        container: {
            height: 85,
            width: wp(100),
            padding: hp(1),
            paddingTop: hp(1.5),
            paddingLeft: 13
        },
        cate: {
            height: hp(7.5),
            width: wp(40),
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: hp(2),
            borderColor: 'gray',
            borderWidth: 0.5,
            margin: 4,
        },
        cateName: {
            fontSize: 16,
            fontWeight: '500',
            marginLeft: hp(-1),
            color: "gray"
        },
        fle: {
            flex: 1,
            width: wp(15),
            height: hp(15),
            borderRadius: 10
        },
        cateIcon: {
            padding: wp(1)
        },
        activeCategory: {
            backgroundColor: "red"
        }
    });

    return <>
        <View style={styles.container}>
            <ScrollView horizontal>
                <TouchableOpacity>
                    <View style={[styles.cate]}>
                        <View style={styles.cateIcon}>
                            <Image style={styles.fle} source={{ uri: "https://image.cnbcfm.com/api/v1/image/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg?v=1603459593&w=1920&h=1080" }} />
                        </View>
                        <View>
                            <Text style={styles.cateName}>Houses</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment.jpg" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Flats</Text>
                    </View>
                </View>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Appartment</Text>
                    </View>
                </View>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://www.gemsbougainvillas.in/wp-content/uploads/2021/09/new-bungalows-Joka-770x361.jpg" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Villas</Text>
                    </View>
                </View>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://www.workdesign.com/wp-content/uploads/2020/05/AdobeStock_210620329-scaled-e1589996821925.jpeg" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Offices</Text>
                    </View>
                </View>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://studiointegrate.in/wp-content/uploads/2021/11/signature-park-row-house-01.jpg" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Farmhouse</Text>
                    </View>
                </View>
                <View style={styles.cate}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.fle} source={{ uri: "https://www.shutterstock.com/image-photo/land-plot-aerial-view-include-260nw-1906603717.jpg" }} />
                    </View>
                    <View>
                        <Text style={styles.cateName}>Others</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </>
}

export default CategoryComponent;