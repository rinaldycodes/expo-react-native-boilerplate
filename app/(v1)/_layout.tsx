import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/src/components/shared/CustomHeader'
import useTheme from '@/src/hooks/useTheme'

export default function _layout() {
    const { themeColors, theme } = useTheme();
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='(aux)'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='(tabs)'
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='about-app'
                    options={{
                        presentation: 'modal',
                        header: () => {
                            return (
                                <CustomHeader title='About the App' />
                            )
                        }
                    }}
                />
            </Stack>
            <StatusBar
                barStyle={theme == 'light' ? 'dark-content' : 'light-content'}
            />
        </>
    )
}

const styles = StyleSheet.create({})