import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import { useColors } from "@/hooks/useColors";

type PrimaryButtonProps = PressableProps & {
  label: string;
  loading?: boolean;
  variant?: "outline" | "filled";
  leftIcon?: React.ReactNode;
};

export function PrimaryButton({
  label,
  loading,
  variant = "filled",
  leftIcon,
  disabled,
  style,
  ...props
}: PrimaryButtonProps) {
  const colors = useColors();
  const isOutline = variant === "outline";
  const styleProp = typeof style === "function" ? undefined : (style as StyleProp<ViewStyle>);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isOutline ? colors.background : colors.primary,
          borderColor: colors.border,
          opacity: disabled || loading ? 0.6 : pressed ? 0.7 : 1,
        },
        styleProp,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}
      {loading ? (
        <ActivityIndicator color={isOutline ? colors.primary : "#fff"} />
      ) : (
        <Text
          style={[
            styles.label,
            {
              color: isOutline ? colors.primary : "#fff",
            },
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  leftIcon: {
    marginRight: 8,
  },
});
