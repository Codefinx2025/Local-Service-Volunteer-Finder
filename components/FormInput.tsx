import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";
import { useColors } from "@/hooks/useColors";

type FormInputProps = TextInputProps & {
  icon?: React.ComponentProps<typeof Feather>["name"];
  error?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  togglePassword?: boolean;
};

export function FormInput({
  icon,
  error,
  rightIcon,
  onRightIconPress,
  togglePassword,
  secureTextEntry,
  style,
  ...props
}: FormInputProps) {
  const colors = useColors();
  const [showPassword, setShowPassword] = useState(false);
  const isSecure = secureTextEntry && !showPassword;

  const renderRightIcon = () => {
    if (rightIcon === "loader") {
      return <ActivityIndicator size="small" color={colors.mutedForeground} />;
    }

    if (rightIcon) {
      return (
        <Pressable onPress={onRightIconPress} style={styles.iconButton}>
          <Feather name={rightIcon as any} size={18} color={colors.mutedForeground} />
        </Pressable>
      );
    }

    if (togglePassword) {
      return (
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.iconButton}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={18}
            color={colors.mutedForeground}
          />
        </Pressable>
      );
    }

    return null;
  };

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.inputRow,
          { borderColor: error ? "#f87171" : colors.border, backgroundColor: colors.background },
        ]}
      >
        {icon ? (
          <Feather
            name={icon as any}
            size={18}
            color={error ? "#f87171" : colors.mutedForeground}
            style={styles.icon}
          />
        ) : null}
        <TextInput
          style={[styles.input, { color: colors.foreground }, style]}
          placeholderTextColor={colors.mutedForeground}
          secureTextEntry={isSecure}
          {...props}
        />
        {renderRightIcon()}
      </View>
      {error ? <Text style={[styles.errorText, { color: "#f87171" }]}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  icon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    minHeight: 40,
  },
  iconButton: {
    padding: 4,
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
});
