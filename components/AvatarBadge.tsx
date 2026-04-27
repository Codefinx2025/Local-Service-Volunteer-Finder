import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type AvatarBadgeProps = {
  size?: number;
  iconSize?: number;
};

export function AvatarBadge({ size = 72, iconSize = 36 }: AvatarBadgeProps) {
  return (
    <View style={[styles.root, { width: size, height: size, borderRadius: size / 2 }]}> 
      <View style={[styles.iconWrapper, { width: iconSize, height: iconSize, borderRadius: iconSize / 2 }]}> 
        <Feather name="user" size={iconSize * 0.65} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(59, 130, 246, 0.18)",
  },
  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B82F6",
  },
});
