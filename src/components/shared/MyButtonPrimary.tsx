import useTheme from "@/src/hooks/useTheme";
import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface MyButtonPrimaryProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle; // Custom style untuk button
  textStyle?: TextStyle; // Custom style untuk text
}

const MyButtonPrimary: React.FC<MyButtonPrimaryProps> = ({
  title,
  onPress,
  loading,
  disabled,
  fullWidth,
  style,
  textStyle,
}) => {
  const { themeColors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: themeColors.tint }, fullWidth && styles.fullWidth, disabled && styles.disabled, style]} // Bisa custom style
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={[styles.text, { color: themeColors.textTint}, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default MyButtonPrimary;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    backgroundColor: "gainsboro",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
