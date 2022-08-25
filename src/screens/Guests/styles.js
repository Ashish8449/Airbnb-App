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
        justifyContent:'space-between',
        alignItems: "center",
        marginVertical: 10,
        borderBottomWidth:1,
        borderColor:"lightgrey",
        padding: 20,
        marginHorizontal:20,
        borderBottomWidth:1
    },
    iconContainer: {
      backgroundColor:'#d4d4d4',
      padding:10,
      borderRadius:10,

    },
    locationText: {
   fontWeight:"bold"
    },

    button:{
        borderWidth:1,
        width:30,
        height: 30,
        borderRadius:15,
        justifyContent: "center",
        alignItems: "center",
        borderColor:"#676767"

    }


})
export default styles;