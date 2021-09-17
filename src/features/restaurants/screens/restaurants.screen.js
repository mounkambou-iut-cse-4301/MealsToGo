import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import ResturantInfoCard from "../components/resturant-info-card";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SeachContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SeachContainer>
        <Searchbar />
      </SeachContainer>
      <RestaurantListContainer>
        <ResturantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
