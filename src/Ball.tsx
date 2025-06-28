import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const Ball = () => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.spring(position, nextPosition).start();
  }, [position]);

  const nextPosition = { toValue: { x: 200, y: 500 }, useNativeDriver: true };

  return (
    <Animated.View style={{ transform: position.getTranslateTransform() }}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "black",
    backgroundColor: "black",
  },
});

export default Ball;
