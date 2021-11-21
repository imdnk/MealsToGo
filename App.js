import { StatusBar as EcpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { RestaurantsScreen } from './src/features/screens/restaurantsScreen';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <RestaurantsScreen/>
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
