import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfo } from '../components/restaurantsInfo';

export const RestaurantsScreen = () =>{
    return(
        <>
        <View style = {styles.search}>
    <Searchbar />
      </View>
      <View style = {styles.list}><RestaurantsInfo /></View>
        </>
    );
    
}

const styles = StyleSheet.create({
    search:{
      padding:16,
      backgroundColor: '#cacfcb',
    },
    list:
    {
      flex: 1,
      padding: 16,
      backgroundColor: 'blue',
    },
  });
  