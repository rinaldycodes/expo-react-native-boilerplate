import React, { useState } from "react";
import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Ganti dengan icon library yang sesuai
import useTheme from "@/src/hooks/useTheme";
import ViewBackground2 from "./ViewBackground2";

interface MyTextInputProps extends TextInputProps {
    iconName: keyof typeof MaterialIcons.glyphMap; // Icon name from MaterialIcons
}

const MyTextInput: React.FC<MyTextInputProps> = ({ iconName, style, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const { themeColors } = useTheme();

    return (
        <ViewBackground2 style={[styles.container, isFocused && [{ borderColor: themeColors.tint }]]}>
            <MaterialIcons name={iconName} size={24} color={isFocused ? themeColors.tint : "#999"} style={styles.icon} />
            <TextInput
                {...props}
                style={[styles.input, { color: themeColors.text}, style]}
                placeholderTextColor={themeColors.text}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </ViewBackground2>
    );
};

export default MyTextInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        // backgroundColor: "#fff",
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        outlineStyle: 'none'
    },
});
