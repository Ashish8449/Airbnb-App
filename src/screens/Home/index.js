import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
export default function HomeScreen(props) {
    return (
        <View>
            <Pressable style={styles.searchButton} onPress={() => { }} >
                <Fontisto name="search" size={25} color="#f15454" />
                <Text style={styles.searchButtonText}>Explore Near By Places..</Text>
            </Pressable>

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image} >
                <Text style={styles.title}>
                    Go Near
                </Text>
                <Pressable style={styles.button} onPress={() => { }} >
                    <Text style={styles.buttonText}>Explore Near By Places..</Text>
                </Pressable>
            </ImageBackground >
        </View >
    )
}