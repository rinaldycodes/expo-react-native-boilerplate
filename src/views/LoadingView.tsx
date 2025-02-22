import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyView from '../components/shared/MyView'
import MyText from '../components/shared/MyText'

interface LoadingViewProps {
    message?: string
}

export default function LoadingView({ message = 'Loading...' }: LoadingViewProps) {
    return (
        <MyView style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF" />
            <MyText style={styles.text}>{message}</MyText>
        </MyView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
    },
})
