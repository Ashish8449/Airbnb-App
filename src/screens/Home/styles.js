import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',


    },
    title: {
        fontSize: 100,
        fontWeight: "bold",
        color: 'white',
        width: "70%",
        marginLeft: 24,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        marginLeft: 25,
        marginTop: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black'
    }
    , searchButton: {
        flexDirection: "row",
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        marginHorizontal: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 30,
        zIndex: 1000,
        elevation: 1,


    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black'
    }

})
export default styles;