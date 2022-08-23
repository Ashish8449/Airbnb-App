import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        margin: 20,

    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,

    },
    prices: {
        fontSize: 18,


    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    discription: {

        fontSize: 18,
        lineHeight: 26,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    }


})
export default styles;