import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from '../components/shared/Avatar'
import useAuth from '../hooks/useAuth'
import ViewBackground2 from '../components/shared/ViewBackground2';
import ListItem from '../components/shared/ListItem';
import { AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import MySafeAreaView from '../components/shared/MySafeAreaView';
import useTheme from '../hooks/useTheme';
import LogoutConfirmationModal from '../components/shared/LogoutConfirmationModal';
import useProfileViewModel from '../viewModel/useProfileViewModel';
import LoadingView from './LoadingView';
import ProfileHeader from '../components/specific/profile/ProfileHeader';
import MyText from '../components/shared/MyText';
import { Redirect } from 'expo-router';

export default function ProfileView() {
    const {
        auth,
        isLoading,
        handlePasswordSetting,
        handleAboutUs,
        handleAboutApp
    } = useProfileViewModel();
    const { theme, themeColors, toggleTheme } = useTheme();

    if (isLoading) {
        return (
            <LoadingView />
        )
    }

    if (!auth || auth == null) {
        return (
            <Redirect href={'/(v1)/(aux)/login'} />
        )
    }

    return (
        <MySafeAreaView>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ProfileHeader />
                <View style={styles.containerProfile}>
                    <Avatar />
                    <View style={{ marginBottom: 10, }} />
                    <MyText numberOfLines={1} style={styles.username}>{auth?.name || 'Guest'}</MyText>
                </View>
                <ViewBackground2 style={styles.containerMenuOptions}>
                    <ListItem
                        onPress={handlePasswordSetting}
                        left={
                            <Entypo name="lock" size={24} color={themeColors.text} />
                        }
                        title='Password Settings'
                    />
                    <ListItem
                        onPress={handleAboutUs}
                        left={
                            <AntDesign name="exclamationcircle" size={24} color={themeColors.text} />
                        }
                        title='About Us'
                    />
                    <ListItem
                        onPress={handleAboutApp}
                        left={
                            <>
                                <MaterialIcons name="app-shortcut" size={24} color={themeColors.text} />
                            </>
                        }
                        title='About App'
                    />
                    <ListItem
                        onPress={async () => toggleTheme()}
                        left={
                            <>
                                <MaterialCommunityIcons name="theme-light-dark" size={24} color={themeColors.text} />
                            </>
                        }
                        right={
                            <>
                                {
                                    theme == 'light' ? (
                                        <FontAwesome5 name="cloud-sun" size={24} color={themeColors.text} />
                                    ) : (

                                        <FontAwesome5 name="cloud-moon" size={24} color={themeColors.text} />
                                    )
                                }
                            </>
                        }
                        title={`Theme`}
                    />
                </ViewBackground2>

                <LogoutConfirmationModal />
            </ScrollView>
        </MySafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        flex: 1.7,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerMenuOptions: {
        flex: 2,
        padding: 15,
        gap: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

})