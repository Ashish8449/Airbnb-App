

import { View, Text, FlatList } from 'react-native'
import React from 'react'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post'

export default function SearchResultScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    )
}