import React, { useContext } from 'react';
import styled from 'styled-components';
import {  FlatList, View, Text} from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

import { RestaurantsInfoCard } from '../components/RestaurantsInfoCard';
import { RestaurantsContext } from '../../services/restaurants/restaurantsContext';
import { Spacer } from '../../components/SpaceComponent/Spacer';

const SearchContainer = styled.View `
      padding:${(props) => props.theme.space[3]};
      background:${(props) => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
      flex: 1;
      padding: ${(props) => props.theme.space[0]};
      background : ${(props) => props.theme.colors.bg.secondary};
`;

const MyLoading = ( ) => {
  return(
    <ActivityIndicator animating={true} color={Colors.red800} />
  )
}

export const RestaurantsScreen = () =>{
     const RenderItem = () => {
       <RestaurantsInfoCard />
     };
     const {restaurants, isLoading, error} = useContext(RestaurantsContext);
    
    return(
      (isLoading === true ) ? MyLoading : 
        <>
        <SearchContainer>
    <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>    
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          //console.log(item);
          return (
            <Spacer position="bottom" size="small">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.id}
      />
      </RestaurantListContainer>
        </>
    );
    
}
