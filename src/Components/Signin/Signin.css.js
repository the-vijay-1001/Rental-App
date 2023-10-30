const { StyleSheet } = require("react-native");
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        height: "auto",
    },
    imageContainer: {
        height: hp(30),
        alignSelf: "center",
        justifyContent: "center"
    }
})

export default styles;