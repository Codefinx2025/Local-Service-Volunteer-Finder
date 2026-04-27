import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";
import { useColors } from "@/hooks/useColors";
import type { Country } from "@/constants/countries";

type PhoneFieldProps = TextInputProps & {
  country: Country;
  onCountryChange: (country: Country) => void;
  error?: string;
};

export function PhoneField({
  country,
  onCountryChange,
  error,
  style,
  ...props
}: PhoneFieldProps) {
  const colors = useColors();

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.row,
          {
            borderColor: error ? "#f87171" : colors.border,
            backgroundColor: colors.background,
          },
        ]}
      >
        <Pressable
          onPress={() => onCountryChange(country)}
          style={[styles.countryButton, { borderColor: colors.border }]}
        >
          <Text style={[styles.countryText, { color: colors.foreground }]}> 
            {country.dialCode}
          </Text>
          <Feather name="chevron-down" size={14} color={colors.mutedForeground} />
        </Pressable>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor={colors.mutedForeground}
          keyboardType="phone-pad"
          style={[styles.input, { color: colors.foreground }, style]}
          {...props}
        />
      </View>
      {error ? <Text style={[styles.errorText, { color: "#f87171" }]}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 10,
  },
  countryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingRight: 8,
    marginRight: 4,
    borderRightWidth: 1,
  },
  countryText: {
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
  input: {
    flex: 1,
    fontSize: 16,
    minHeight: 40,
  },
  errorText: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
});
