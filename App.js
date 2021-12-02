import { StatusBar as EcpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  useFonts as useFontOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useFontLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen} from './src/features/screens/RestaurantsScreen';
import { MapScreen  } from './src/features/screens/MapScreen';
import { SettingsScreen } from './src/features/screens/SettingsScreen';

const SafeArea = styled.SafeAreaView`
flex:1;
`;

export default function App() {

  const [Oswald] = useFontOswald({
    
    Oswald_400Regular,
  });
  const [Lato] = useFontLato({
    Lato_400Regular,
  });

  const Tab = createBottomTabNavigator();

  const MyTab = () => {
    return (
      <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Maps" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    );
  }

  return (
    <ThemeProvider theme ={ theme }>
      <NavigationContainer>
      <SafeArea >
      <MyTab />
    </SafeArea> 
      </NavigationContainer> 
    <StatusBar style="auto" />
    </ThemeProvider>
  );
}

