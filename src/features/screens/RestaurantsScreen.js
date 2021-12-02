import React from 'react';
import styled from 'styled-components';
import {  FlatList, View, Text} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantsInfoCard } from '../components/RestaurantsInfoCard';


const SearchContainer = styled.View `
      padding:${(props) => props.theme.space[3]};
      background:${(props) => props.theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
      flex: 1;
      padding: ${(props) => props.theme.space[0]};
      background : ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen = () =>{
     const RenderItem = () => {
       <RestaurantsInfoCard />
     };
    
    return(
        <>
        <SearchContainer>
    <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>    
      <FlatList
        data={[{name : 1}, {name : 2},{name : 3}, {name : 4},]}
        renderItem={() => <RestaurantsInfoCard />}
        keyExtractor={item => item.id}
      />
      </RestaurantListContainer>
        </>
    );
    
}
