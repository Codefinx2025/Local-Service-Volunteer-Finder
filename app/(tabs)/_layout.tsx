import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  const isFirstTime = true; // later replace with AsyncStorage

  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* Onboarding screen */}
      <Stack.Screen name="onboarding" />

      {/* Tabs (your main app) */}
      <Stack.Screen name="(tabs)" />

    </Stack>
  );
}