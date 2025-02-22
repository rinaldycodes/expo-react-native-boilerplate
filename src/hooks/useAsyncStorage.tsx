import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EncryptHelper } from '../helpers/EncryptHelper';


const KEY_PREFIX = "APP_";
export default function useAsyncStorage() {

    const storeData = async (key: string, value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            const encrypted = await EncryptHelper.encrypt(jsonValue,'')
            await AsyncStorage.setItem(KEY_PREFIX + key, encrypted);
        } catch (e) {
            // saving error
            throw e;
        }
    };

    const getData = async (key: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(KEY_PREFIX + key);
            if ( jsonValue != null ) {
                const decrypted = await EncryptHelper.decrypt(jsonValue,'')
                return jsonValue != null ? JSON.parse(decrypted) : null;
            }

            // throw new Error("not found data with key "+key);
        } catch (e) {
            // error reading value
            throw e;
        }
    };

    const removeData = async (key: string) => {
        try {
            await AsyncStorage.removeItem(KEY_PREFIX + key)
        } catch (e) {
            // remove error
            throw e;
        }

        console.log('Done.')
    }

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
            throw e;
        }

        console.log('Done.')
    }

    return {
        storeData,
        getData,
        removeData,
        clearAll
    }
}

const styles = StyleSheet.create({})