import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

type GoogleIconProps = {
  size?: number;
};

export function GoogleIcon({ size = 20 }: GoogleIconProps) {
  return (
    <View style={[styles.root, { width: size + 12, height: size + 12, borderRadius: (size + 12) / 2 }]}> 
      <AntDesign name="google" size={size} color="#2563EB" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
});
