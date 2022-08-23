import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        margin: 20

    },
    textInput: {
        fontSize: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderBottomWidth:1,
        borderColor:"lightgrey"
    },
    iconContainer: {
      backgroundColor:'#d4d4d4',
      padding:10,
      borderRadius:10,

    },
    locationText: {
   fontWeight:"bold"
    }


})
export default styles;