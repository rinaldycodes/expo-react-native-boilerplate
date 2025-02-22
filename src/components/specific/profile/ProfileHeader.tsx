import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import CustomHeader from '@/src/components/shared/CustomHeader'
import useTheme from '@/src/hooks/useTheme'
import { AntDesign } from '@expo/vector-icons'
import useProfileViewModel from '@/src/viewModel/useProfileViewModel'

export default function ProfileHeader() {
    const { themeColors } = useTheme();
    const { handleLogout } = useProfileViewModel();

    const renderHeader = () => (
        <CustomHeader
            headerStyle={{ backgroundColor: themeColors.background, borderWidth: 0 }}
            headerLeft={
                <View style={[styles.iconContainer, { borderColor: themeColors.text }]}>
                    <AntDesign name="mail" size={18} color={themeColors.text} />
                </View>
            }
            headerRight={
                <Pressable onPress={handleLogout} style={[styles.iconContainer, { borderColor: themeColors.text }]}>
                    <AntDesign name="logout" size={16} color="red" />
                </Pressable>
            }
        />
    );

    return (
        <Stack.Screen
            options={{
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: '',
                header: renderHeader,
            }}
        />
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 999,
    },
});
