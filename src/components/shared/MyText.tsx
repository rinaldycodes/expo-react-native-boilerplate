import { StyleSheet, Text, TextProps, TextStyle, StyleProp } from 'react-native'
import React from 'react'
import useTheme from '@/src/hooks/useTheme'

interface MyTextProps extends TextProps {
  style?: StyleProp<TextStyle>
}

export default function MyText({ children, style, ...props }: MyTextProps) {
  const { themeColors } = useTheme()

  return (
    <Text 
      style={[{ color: themeColors.text }, style] as StyleProp<TextStyle>} 
      {...props}
    >
      {children}
    </Text>
  )
}
