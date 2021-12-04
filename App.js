import { StatusBar as EcpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
import { RestaurantRequest } from './src/services/restaurants/restaurantsServices';

const SafeArea = styled.SafeAreaView`
flex:1;
`;

const createIconName = {
  Restaurants : 'restaurant',
  Maps : 'google-maps',
  Settings : 'settings',
};

const createIconType = {
  Restaurants : 'Ionic',
  Maps : 'Metrial',
  Settings : 'Ionic',
};

const createScreenOptions = ( { route }) => { 
   const iconName = createIconName[route.name];
   const iconType = createIconType[route.name];
   return {
    tabBarIcon: ({ size, color }) => (
      (iconType === 'Ionic') ?
      <Ionicons name={iconName} size={size} color={color} /> :
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
  };
}



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
      <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "#005e19",
        inactiveTintColor: "gray",
      }}
      >
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

