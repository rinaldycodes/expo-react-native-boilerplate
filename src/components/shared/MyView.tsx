import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import useTheme from '@/src/hooks/useTheme'

export default function MyView({
  children,
  style,
}: {
  children: ReactNode
  style: StyleProp<ViewStyle>
}) {

  const { themeColors } = useTheme();
  return (
    <View style={[{
      backgroundColor: themeColors.background
    }, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})