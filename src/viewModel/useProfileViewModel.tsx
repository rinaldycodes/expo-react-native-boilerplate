import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router';
import useAuth from '../hooks/useAuth';
import { useAtom } from 'jotai';
import { logoutModalAtom } from '../atoms/atoms';
import useToast from '../hooks/useToast';

export default function useProfileViewModel() {
    const [modalLogoutVisible, setModalLogoutVisible] = useAtom(logoutModalAtom);
    const { auth, isLoading: isLoadingAuth } = useAuth();
    const { toastSuccess } = useToast();

    const isLoading = (isLoadingAuth);

    const handleLogout = () => {
        setModalLogoutVisible(true);
    }

    const handlePasswordSetting = async () => {
        toastSuccess("Pressed", "Password Setting")
    }

    const handleAboutUs = async () => {
        toastSuccess("Pressed", "About Us")
    }

    const handleAboutApp = async () => {
        // toastSuccess("Pressed", "About App");
        router.navigate('/(v1)/about-app')
    }


    return {
        auth,
        isLoading,
        handleLogout,
        handlePasswordSetting,
        handleAboutUs,
        handleAboutApp
    }
}

const styles = StyleSheet.create({})