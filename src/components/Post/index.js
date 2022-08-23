import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
export default function Post(props) {
    const { post } = props;
    console.log(post)
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{ uri: post.image }} />

            <Text style={styles.bedrooms}>{post.bed} BED  {post.bedroom} bedroom </Text>

            <Text style={styles.discription} numberOfLines={2}> {post.type} {post.title}</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>
                    ${post.oldPrice}
                </Text> <Text style={styles.newPrice}>
                    ${post.newPrice}
                </Text>
                / night

            </Text>
            <Text style={styles.totalPrice}>
                ${post.totalPrice} total

            </Text>

        </View>
    )
}