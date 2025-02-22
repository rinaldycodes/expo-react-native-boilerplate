import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { authAtom } from '../atoms/authAtom'
import { IAuth } from '../models/AuthModel';
import useAsyncStorage from './useAsyncStorage';

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useAtom(authAtom);
  const { storeData, clearAll, getData } = useAsyncStorage();

  useEffect(() => {
    checkSession();
  }, [])

  const checkSession = async () => {
    try {
      setIsLoading(true);
      const data = await getData('auth');
      if (data) {
        setAuth(data);
      }
    } catch (error) {
      alert(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }

  const login = async (data: IAuth) => {
    setAuth(data);
    await storeData('auth', data)
  }

  const logout = async () => {
    await clearAll();
    setAuth(null);
  }

  return {
    auth,
    isLoading,
    login,
    logout
  }
}

const styles = StyleSheet.create({})