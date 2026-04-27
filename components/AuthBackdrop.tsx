import React from "react";
import { StyleSheet, View } from "react-native";

export function AuthBackdrop() {
  return (
    <View style={styles.root} pointerEvents="none">
      <View style={[styles.circle, styles.circleOne]} />
      <View style={[styles.circle, styles.circleTwo]} />
      <View style={[styles.circle, styles.circleThree]} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  circle: {
    position: "absolute",
    borderRadius: 999,
  },
  circleOne: {
    top: -80,
    left: -80,
    width: 220,
    height: 220,
    backgroundColor: "rgba(59, 130, 246, 0.18)",
  },
  circleTwo: {
    top: 60,
    right: -60,
    width: 160,
    height: 160,
    backgroundColor: "rgba(252, 211, 77, 0.18)",
  },
  circleThree: {
    bottom: -80,
    right: -60,
    width: 240,
    height: 240,
    backgroundColor: "rgba(16, 185, 129, 0.12)",
  },
});
