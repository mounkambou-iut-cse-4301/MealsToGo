import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: "https://picsum.photos/700" }}
      />
      <Text  style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title:{
    padding: 16,
  }
});
