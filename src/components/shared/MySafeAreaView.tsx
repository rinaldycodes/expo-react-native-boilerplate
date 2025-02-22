import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import useTheme from '@/src/hooks/useTheme'

export default function MySafeAreaView({
    children,
    style
}: {
    children: ReactNode,
    style?: ViewStyle
}) {

    const { themeColors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, {
            backgroundColor: themeColors.background,
            width: '100%',
            maxWidth: 500,
            alignSelf: 'center',
        }, style
        ]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})