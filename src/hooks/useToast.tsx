import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-toast-message';

export default function useToast() {
    const toastSuccess = (title = "Success", description: string) => {
        Toast.show({
            type: 'success',
            text1: title,
            text2: description,
        });
    }
    
    return {
        toastSuccess
    }
}

const styles = StyleSheet.create({})