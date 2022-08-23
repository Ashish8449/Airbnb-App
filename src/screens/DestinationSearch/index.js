import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import searchResult from "../../../assets/data/search";
import Entypo from 'react-native-vector-icons/Entypo'
export default function DestionationSearch() {
    const [inputText, setInputText] = useState("");
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Where are you going?" value={inputText} onChangeText={text => setInputText(text)} />
            <FlatList data={searchResult} renderItem={({ item }) => {
                return <View style={styles.row}>
                    <View style={styles.iconContainer}>
                   <Entypo name={"location"} size={30}/>
                    </View>
                    <Text>  {item.description}</Text>
                </View>
            }} />
        </View>
    )
}
