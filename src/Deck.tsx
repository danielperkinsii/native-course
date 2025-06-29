import React, { useRef } from "react";
import { View, Animated, Text, StyleSheet, PanResponder } from "react-native";
import { Card, Button } from "@rneui/themed";

const Deck = ({ data, renderCard }: any) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const position = useRef(new Animated.ValueXY()).current;

  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      {data.map((item: any, i: number) => (
        <Card>
          <Card.Title>{item.text}</Card.Title>
          <Card.Image
            style={styles.avatar}
            resizeMode="cover"
            source={{ uri: item.uri }}
          />

          <Button
            icon={{ name: "code" }}
            style={styles.button}
            title={"view now!"}
          ></Button>
        </Card>
      ))}
    </Animated.View>
  );
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: "center",
  },
  card: {
    width: "90%", // Adjust card width as needed
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#03A9F4",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 14,
    color: "gray",
  },
});
