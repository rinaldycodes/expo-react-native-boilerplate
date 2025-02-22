import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from '../components/shared/MyTextInput'
import MyButtonPrimary from '../components/shared/MyButtonPrimary';
import useLoginViewModel from '../viewModel/useLoginViewModel';
import MySafeAreaView from '../components/shared/MySafeAreaView';

export default function LoginView() {

    const {
        loading,
        handlePress
    } = useLoginViewModel();

    return (
        <MySafeAreaView style={styles.container}>
            <View style={styles.formLogin}>
                <MyTextInput iconName='email' placeholder='Email' />
                <MyTextInput secureTextEntry iconName='password' placeholder='Password' />

                <View style={{ marginBottom: 20}} />

                <MyButtonPrimary title="Login" onPress={handlePress} loading={loading} />
            </View>
        </MySafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    formLogin: {
        gap: 10,
        width: '100%',
        maxWidth: 480,
    }
})