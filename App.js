import { StatusBar as EcpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

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

  return (
    <ThemeProvider theme ={ theme }>
    <SafeArea >
      <RestaurantsScreen/>
    </SafeArea>
    <StatusBar style="auto" />
    </ThemeProvider>
  );
}

