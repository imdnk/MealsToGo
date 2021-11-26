import React from "react";
import { Text, View, Image } from "react-native";
import {  Card, Paragraph, Title as PaperTitle} from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/SpaceComponent/Spacer";


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

const Section = styled(View)`
   flexDirection: row;
   alignItems: center;
`;

const Rating = styled(View)`
   flex: 1 ;
   flexDirection: row;
   paddingTop: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled(View)`
   flexDirection: row;
   justifyContent: flex-end;
   paddingTop: ${(props) => props.theme.space[2]};
   paddingLeft: 8px;
`;
export const RestaurantsInfoCard = (restaurant = {}) => {
  const {
    name = "DNK Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    address = "Perundurai Road, Erode",
    photos = [{uri: 'https://lh3.googleusercontent.com/LwldymTId-YhaZtpGnRMxMwk2_1CYkYxjYoF8G89c_kOviI4qTTc_H0MAQD_DwbaJaZkF43ReKv3UvB05JF-fHgMGl8=w1000'},{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU'}],
    IsOpenNow = true,
    IsTemperiryClosed = true,
    rating =4,
  } = restaurant;


  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <CardCover source={photos[0]} />
      <CardInfo>
        <Title>{name}</Title>
        <Section>
        <Rating>
        {ratingArray.map( () => <SvgXml xml = {star} width = '20' height = '20'/>)}
        </Rating>
        <SectionEnd>
          <Text style = {{ color: 'red', fontWeight: 'bold'}}>TEMPORARILY CLOSED</Text>
        </SectionEnd>
        <Spacer position ='left' size = 'large'>
        {IsOpenNow && <SvgXml xml = {open} width = '20' height = '20' />}
        </Spacer>
        <Spacer position ='left' size = 'large'>
        {IsTemperiryClosed && <Image style = {{width: 20,height: 20}} source = {{uri: icon}} /> }
        </Spacer>
        </Section>
        <Address>{address}</Address>
      </CardInfo>
    </RestaurantCard>
  );
};
