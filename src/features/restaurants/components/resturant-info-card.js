import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export default function ResturantInfoCard({ resturant = {} }) {
  const {
    name = "Fire on Ice",
    icon,
    photos = [
      "https://shtheme.org/demosd/excelsure/wp-content/uploads/2021/05/service-2-1.png",
    ],
    address = "MADAGASCAR",
    openingHours = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}
