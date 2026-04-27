import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Location from "expo-location";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AuthBackdrop } from "@/components/AuthBackdrop";
import { AvatarBadge } from "@/components/AvatarBadge";
import { FormInput } from "@/components/FormInput";
import { GoogleIcon } from "@/components/GoogleIcon";
import { KeyboardAwareScrollViewCompat } from "@/components/KeyboardAwareScrollViewCompat";
import { PhoneField } from "@/components/PhoneField";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Country, DEFAULT_COUNTRY } from "@/constants/countries";
import { useColors } from "@/hooks/useColors";

type Errors = Partial<
  Record<
    | "firstName"
    | "lastName"
    | "email"
    | "password"
    | "confirm"
    | "phone"
    | "location",
    string
  >
>;

export default function SignUpScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [location, setLocation] = useState("");
  const [locating, setLocating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const next: Errors = {};
    if (!firstName.trim()) next.firstName = "Required";
    if (!lastName.trim()) next.lastName = "Required";
    if (!email.includes("@")) next.email = "Enter a valid email";
    if (password.length < 6) next.password = "At least 6 characters";
    if (confirm !== password) next.confirm = "Passwords don't match";
    if (phone.replace(/\D/g, "").length < 6) next.phone = "Enter a valid phone";
    if (!location.trim()) next.location = "Add your location";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleLocate = async () => {
    setLocating(true);
    try {
      if (Platform.OS === "web") {
        if ("geolocation" in navigator) {
          await new Promise<void>((resolve) => {
            navigator.geolocation.getCurrentPosition(
              () => {
                setLocation("Current location · San Francisco, CA");
                resolve();
              },
              () => {
                setLocation("San Francisco, CA");
                resolve();
              },
              { timeout: 5000 },
            );
          });
        } else {
          setLocation("San Francisco, CA");
        }
      } else {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Location permission",
            "We use your location to surface jobs near you. You can also type it in.",
          );
          return;
        }
        const pos = await Location.getCurrentPositionAsync({});
        const places = await Location.reverseGeocodeAsync({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        const place = places[0];
        if (place) {
          const parts = [place.city, place.region].filter(Boolean);
          setLocation(parts.join(", ") || "Current location");
        } else {
          setLocation("Current location");
        }
      }
      if (Platform.OS !== "web") {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch {
      setLocation("San Francisco, CA");
    } finally {
      setLocating(false);
    }
  };

  const showSuccess = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleSubmit = async () => {
    if (!validate()) {
      if (Platform.OS !== "web") {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      if (Platform.OS !== "web") {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      showSuccess(
        "Account created",
        `Welcome aboard, ${firstName.trim()}! Your account is ready.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      showSuccess(
        "Sign up with Google",
        "Google sign-up is a design preview only.",
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <AuthBackdrop />
      <View
        style={[
          styles.headerBar,
          {
            paddingTop: insets.top + (isWeb ? 67 : 8),
            paddingHorizontal: 24,
          },
        ]}
      >
        <Pressable
          hitSlop={10}
          onPress={() =>
            showSuccess(
              "Back",
              "This demo only includes the Create Account screen.",
            )
          }
          style={({ pressed }) => [
            styles.backBtn,
            {
              borderColor: colors.border,
              backgroundColor: colors.background,
              opacity: pressed ? 0.6 : 1,
            },
          ]}
        >
          <Feather name="chevron-left" size={20} color={colors.foreground} />
        </Pressable>
      </View>

      <KeyboardAwareScrollViewCompat
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.scroll,
          {
            paddingBottom: insets.bottom + (isWeb ? 34 : 24),
          },
        ]}
        keyboardShouldPersistTaps="handled"
        bottomOffset={20}
      >
        <View style={styles.heroSection}>
          <AvatarBadge size={84} iconSize={42} />
          <Text style={[styles.title, { color: colors.foreground }]}>
            Create Account
          </Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
            Please fill in the details to get started
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <FormInput
                icon="user"
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
                error={errors.firstName}
              />
            </View>
            <View style={{ flex: 1 }}>
              <FormInput
                icon="user"
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
                error={errors.lastName}
              />
            </View>
          </View>

          <FormInput
            icon="mail"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            error={errors.email}
          />

          <FormInput
            icon="lock"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            togglePassword
            error={errors.password}
          />

          <FormInput
            icon="lock"
            placeholder="Confirm Password"
            value={confirm}
            onChangeText={setConfirm}
            secureTextEntry
            togglePassword
            error={errors.confirm}
          />

          <PhoneField
            country={country}
            onCountryChange={setCountry}
            value={phone}
            onChangeText={setPhone}
            error={errors.phone}
          />

          <FormInput
            icon="map-pin"
            placeholder={locating ? "Detecting location..." : "Add Location"}
            value={location}
            onChangeText={setLocation}
            rightIcon={locating ? "loader" : "crosshair"}
            onRightIconPress={handleLocate}
            error={errors.location}
          />

          <View style={styles.locationHint}>
            <Feather name="info" size={13} color={colors.primary} />
            <Text style={[styles.hintText, { color: colors.mutedForeground }]}>
              We will use your location to find nearby jobs faster.
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <PrimaryButton
            label="Create Account"
            onPress={handleSubmit}
            loading={submitting}
          />

          <View style={styles.dividerRow}>
            <View style={[styles.line, { backgroundColor: colors.border }]} />
            <Text
              style={[styles.dividerText, { color: colors.mutedForeground }]}
            >
              OR
            </Text>
            <View style={[styles.line, { backgroundColor: colors.border }]} />
          </View>

          <PrimaryButton
            label="Sign up with Google"
            variant="outline"
            loading={googleLoading}
            onPress={handleGoogle}
            leftIcon={<GoogleIcon size={20} />}
          />

          <View style={styles.footer}>
            <Text
              style={{
                color: colors.mutedForeground,
                fontFamily: "Inter_400Regular",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Pressable
              onPress={() =>
                showSuccess(
                  "Sign In",
                  "Sign In is not part of this design preview.",
                )
              }
            >
              <Text
                style={{
                  color: colors.primary,
                  fontFamily: "Inter_600SemiBold",
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollViewCompat>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  headerBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 110,
    gap: 28,
  },
  heroSection: {
    alignItems: "center",
    gap: 12,
  },
  title: {
    fontSize: 26,
    marginTop: 6,
    fontFamily: "Inter_700Bold",
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  form: {
    gap: 14,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  locationHint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: -6,
    marginLeft: 4,
  },
  hintText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    flex: 1,
  },
  actions: {
    gap: 16,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  line: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    letterSpacing: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
});
