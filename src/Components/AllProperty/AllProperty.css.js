import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productw: {
        marginBottom: 20,
    },
    container: {
        marginTop: 5,
        height: "auto",
        padding: 5,
    },
    all: {
        alignSelf: "flex-start",
        margin: 15,
        fontSize: 22,
        fontWeight: "700",
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        color: "gray"
    },
    inner: {
        padding: 10,
        borderWidth: 1,
        height: "auto",
        width: 320,
        alignSelf: "center",
        borderRadius: 2
    },
    imageContainer: {
        height: 200,
        width: 300,
        alignSelf: "center",
        padding: 3,
        position: "relative",
    },
    contant: {
        height: "auto",
        width: 300,
        alignSelf: "center",
    },
    brand: {
        fontSize: 24,
        marginLeft: 8,
        fontWeight: "500",
    },
    backgroundImage: {
        flex: 1,
    },
    contant1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        padding: 2
    },
    addtocart: {
        marginTop: 15,
    },
    desc: {
        fontSize: 18,
        height: "auto"
    },
    discount: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: "red"
    },
    back: {
        paddingTop: 18,
        paddingLeft: 12,
        width: 80,
    }
})

export default styles;