import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Avatar() {
  return (
    <View>
      <Image 
        source={{ uri: 'https://github.com/rinaldycodes/react-native-portofolio/blob/main/assets/images/profile.jpg?raw=true'}} 
        style={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 125,
        height: 125,
        borderRadius: 999,
    }
})