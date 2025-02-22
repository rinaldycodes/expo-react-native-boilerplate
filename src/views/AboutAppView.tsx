import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MySafeAreaView from '../components/shared/MySafeAreaView'
import { MyEnv } from '../utils/MyEnv'

export default function AboutAppView() {
  return (
    <MySafeAreaView style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.logo}
      />

      <Text style={styles.description}>
        {MyEnv.APP_DESCRIPTION}
      </Text>

      <View style={styles.featureList}>
        <FeatureItem text="🚀 Fast & Optimized Performance" />
        <FeatureItem text="🎨 Modern & Responsive UI" />
        <FeatureItem text="🛠️ TypeScript Support" />
        <FeatureItem text="⚡ Built-in Navigation & Theming" />
      </View>
    </MySafeAreaView>
  )
}

const FeatureItem = ({ text }: { text: string }) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureText}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  featureList: {
    width: '100%',
    alignItems: 'center',
  },
  featureItem: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
})
