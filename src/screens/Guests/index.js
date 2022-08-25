import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
export default function GuestsScreen() {
    const [adult, setAdult]= useState(0);
    const [children, setChildren]= useState(0);
    const [infants, setInfants]= useState(0);
    return (
        <View>

            <View style={styles.row}>
                <View >
                    <Text style={{ fontWeight: "bold" }}>ADults</Text>
                    <Text style={{ color: "lightgrey" }}>Ages 13 or A</Text>
                </View>
                <View style={{flexDirection:"row", alignItems: "center"}} >

                    <Pressable onPress={() => setAdult(Math.max(0, adult-1))} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20,fontsize:16 }}>{adult}</Text>

                    <Pressable onPress={() => setAdult(adult+1)} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>+</Text>
                    </Pressable>

                </View>
            </View>
             <View style={styles.row}>
                <View >
                    <Text style={{ fontWeight: "bold" }}>ADults</Text>
                    <Text style={{ color: "lightgrey" }}>Ages 13 or A</Text>
                </View>
                <View style={{flexDirection:"row", alignItems: "center"}} >

                    <Pressable onPress={() => setChildren(Math.max(0, children-1))} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20,fontsize:16 }}>{children}</Text>

                    <Pressable onPress={() => setChildren(children+1)} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>+</Text>
                    </Pressable>

                </View>
            </View>
             <View style={styles.row}>
                <View >
                    <Text style={{ fontWeight: "bold" }}>ADults</Text>
                    <Text style={{ color: "lightgrey" }}>Ages 13 or A</Text>
                </View>
                <View style={{flexDirection:"row", alignItems: "center"}} >

                    <Pressable onPress={() => setInfants(Math.max(0, infants-1))} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal:20,fontsize:16 }}>{infants}</Text>

                    <Pressable onPress={() => setInfants(infants+1)} style={styles.button}>
                        <Text style={{fontsize:20, color:'#474747' }}>+</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}