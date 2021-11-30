import styled from "styled-components";
import { Image, View, Text } from "react-native";
import { Card } from "react-native-paper";

export const Icon = styled(Image)`
     width : 20px;
     height : 20px;
`;
export const CardCover = styled(Card.Cover)`
  padding :${(props) => props.theme.space[3]};
  background : ${(props) => props.theme.colors.bg.primary} ;
`;

export const CardInfo = styled(View)`
padding :${(props) => props.theme.space[3]}; 
`;

export const RestaurantCard = styled(Card)`
    margin : 16px;
    background : ${(props) => props.theme.colors.bg.primary} ;
`;

export const Address = styled(Text)`
fontFamily : ${(props) => props.theme.fonts.body}; 
fontSize: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled(View)`
   flexDirection: row;
   alignItems: center;
`;

export const Rating = styled(View)`
   flex: 1 ;
   flexDirection: row;
   paddingTop: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled(View)`
   flexDirection: row;
   justifyContent: flex-end;
   paddingTop: ${(props) => props.theme.space[2]};
   paddingLeft: 8px;
`;