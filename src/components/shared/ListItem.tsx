import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import MyText from './MyText'
import useTheme from '@/src/hooks/useTheme'

export default function ListItem({
    style,
    left,
    title,
    titleStyle,
    right,
    onPress,
}: {
    style?: ViewStyle,
    left?: ReactNode,
    title: string,
    titleStyle?: TextStyle,
    right?: ReactNode,
    onPress?: () => Promise<void>
}) {

    const { themeColors } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, style]}
        >
            {
                left && (
                    <View style={styles.left}>
                        {left}
                    </View>
                )
            }
            <View style={styles.center}>
                <MyText style={[styles.title, titleStyle]}>{title}</MyText>
            </View>
            {
                right ? (
                    <View style={styles.right}>
                        {right}
                    </View>
                ) : (
                    <View style={styles.right}>
                        <AntDesign name="right" size={24} color={themeColors.text} />
                    </View>
                )
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    left: {
        // flex: 1,
    },
    center: {
        flex: 1,
    },
    right: {
        // flex: 1,
    },
    title: {
        fontWeight: '500',
    }
})