import React from "react";
import { Text, View } from "react-native";
import {  Card, Paragraph, Title as PaperTitle} from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";


const CardCover = styled(Card.Cover)`
  padding :${(props) => props.theme.space[3]};
  background : ${(props) => props.theme.colors.bg.primary} ;
`;

const CardInfo = styled(View)`
padding :${(props) => props.theme.space[3]}; 
`;

const RestaurantCard = styled(Card)`
    margin : 16px;
    background : ${(props) => props.theme.colors.bg.primary} ;
`;

const Title = styled(Text)`
    color : ${(props) => props.theme.colors.ui.primary};
    fontFamily : ${(props) => props.theme.fonts.heading};
    fontSize: ${(props) => props.theme.fontSizes.button};
`;
const Address = styled(Text)`
fontFamily : ${(props) => props.theme.fonts.body}; 
fontSize: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled(View)`
   flexDirection: row;
   paddingTop: ${(props) => props.theme.space[2]}
`;

export const RestaurantsInfoCard = (restaurant = {}) => {
  const {
    name = "DNK Restaurant",
    icon,
    address = "Perundurai Road, Erode",
    photos = [{uri: 'https://lh3.googleusercontent.com/LwldymTId-YhaZtpGnRMxMwk2_1CYkYxjYoF8G89c_kOviI4qTTc_H0MAQD_DwbaJaZkF43ReKv3UvB05JF-fHgMGl8=w1000'}],
    IsOpenNow = true,
    IsTemperiryClosed = false,
    rating =4,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <CardCover source={photos[0]} />
      <CardInfo>
        <Title>{name}</Title>
        <Rating>
        {ratingArray.map( () => <SvgXml xml = {star} width = '20' height = '20'/>)}
        </Rating>
        <Address>{address}</Address>
      </CardInfo>
    </RestaurantCard>
  );
};
