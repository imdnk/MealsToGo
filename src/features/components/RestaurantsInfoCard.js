import React from "react";
import { View, Image } from "react-native";
import { Card, Paragraph, Title as PaperTitle } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/SpaceComponent/Spacer";
import { Text } from "../../components/Typography/TextComponent";
import {
  Icon,
  CardCover,
  CardInfo,
  Section,
  SectionEnd,
  RestaurantCard,
  Rating,
  Address
} from "./RestaurantInfoCardStyle";

export const RestaurantsInfoCard = (restaurant = {}) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <CardCover source={ {uri: photos[0]}} />
      <CardInfo>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width="20" height="20" />
            ))}
          </Rating>
          <SectionEnd>
            <Text variant="error">CLOSED TEMPORARILY</Text>
          </SectionEnd>
          <Spacer position="left" size="large">
            {isOpenNow && <SvgXml xml={open} width="20" height="20" />}
          </Spacer>
          <Spacer position="left" size="large">
            {isClosedTemporarily && <Icon source={{ uri: icon }} />}
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </CardInfo>
    </RestaurantCard>
  );
};
