import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import useAuth from '@/src/hooks/useAuth';
import MySafeAreaView from '../components/shared/MySafeAreaView';

export default function HomveView() {

    const { auth } = useAuth();

    return (
        <MySafeAreaView>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                headerImage={
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                        style={styles.reactLogo}
                    />
                }>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Welcome!</ThemedText>
                    <HelloWave />
                </ThemedView>
                <ThemedView style={styles.stepContainer}>
                    {
                        auth && (
                            <ThemedText type="subtitle">{(auth && auth.name)}</ThemedText>
                        )
                    }
                </ThemedView>

            </ParallaxScrollView>
        </MySafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
