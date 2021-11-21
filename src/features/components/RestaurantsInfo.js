import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantsInfo = (restaurant = {}) => {
  const {
    name = "DNK Restaurant",
    icon,
    address = "Google pathu vaa",
    photos = "https://www.linguahouse.com/linguafiles/md5/d01dfa8621f83289155a3be0970fb0cb",
    IsOpenNow = true,
    IsTemperiryClosed = false
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={photos} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};
