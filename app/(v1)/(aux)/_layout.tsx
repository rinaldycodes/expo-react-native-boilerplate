import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import useAuth from '@/src/hooks/useAuth'

export default function _layout() {
  const {
    auth
  } = useAuth();

  if ( auth ) {
    return (
      <Redirect href={'/(v1)/(tabs)'} />
    )
  }

  return (
    <Stack>
        <Stack.Screen 
            name='login'
            options={{
                headerShown: false
            }}
        />
    </Stack>
  )
}

const styles = StyleSheet.create({})