import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import useTheme from '@/src/hooks/useTheme'

export default function ViewBackground2({
  children,
  style,
}: {
  children: ReactNode
  style: ViewStyle
}) {

  const { themeColors } = useTheme();
  return (
    <View style={[{
      backgroundColor: themeColors.background2
    }, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})