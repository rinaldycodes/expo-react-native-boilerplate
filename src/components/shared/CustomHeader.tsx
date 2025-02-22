import useTheme from "@/src/hooks/useTheme";
import { screenWidth } from "@/src/utils/MyConstants";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import MyView from "./MyView";
import MyText from "./MyText";

interface CustomHeaderProps {
    title?: string;
    headerLeft?: JSX.Element;
    headerRight?: JSX.Element;
    headerStyle?: ViewStyle;
}

function CustomHeader({ title = "", headerStyle, headerLeft, headerRight }: CustomHeaderProps) {

    const { themeColors } = useTheme();
    
    return (
        <MyView style={[styles.container, headerStyle]}>
            {/* Left Icon */}
            <View style={styles.leftContainer}>
                {
                    !headerLeft && router.canGoBack() && (
                        <TouchableOpacity onPress={() => router.back()}>
                            <AntDesign name="arrowleft" size={24} color={themeColors.text} />
                        </TouchableOpacity>
                    )
                }
                {headerLeft}
            </View>

            {/* Header Title */}
            <MyText style={styles.title}>{title}</MyText>

            {/* Right Icon */}
            <View style={styles.leftContainer}>{headerRight}</View>
        </MyView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%', // Custom width
        maxWidth: screenWidth, // Custom width
        height: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignSelf: "center", // Ensures header stays centered
        borderBottomWidth: 1, // Removes bottom shadow
        borderBottomColor: 'gainsboro',
        elevation: 7,
    },
    leftContainer: {
        
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default CustomHeader;
