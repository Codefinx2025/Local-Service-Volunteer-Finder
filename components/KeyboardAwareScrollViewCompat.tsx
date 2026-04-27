import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, type ScrollViewProps, View } from "react-native";

type KeyboardAwareScrollViewCompatProps = ScrollViewProps & {
  bottomOffset?: number;
};

export function KeyboardAwareScrollViewCompat({ bottomOffset = 0, children, style, ...props }: KeyboardAwareScrollViewCompatProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={bottomOffset}
    >
      <ScrollView style={style} {...props}>
        <View style={{ flex: 1 }}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
