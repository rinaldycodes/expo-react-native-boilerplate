import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';
import useToast from '../hooks/useToast';

export default function useLoginViewModel() {
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const { toastSuccess } = useToast();

    const handlePress = () => {
        setLoading(true);
        setTimeout(() => {
            login({
                name: 'Rinaldy Ramadhan'
            })
            setLoading(false);
            toastSuccess('Success', 'You login successfully')
          
        }, 2000);
    };

    return {
        loading,
        handlePress
    }
}

const styles = StyleSheet.create({})