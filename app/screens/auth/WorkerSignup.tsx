import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { PhoneField } from "@/components/PhoneField";
import { Country, DEFAULT_COUNTRY } from "@/constants/countries";

export default function WorkerSignup() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCountryPress = (_country: Country) => {
    Alert.alert("Select country code", "Choose a dial code", [
      {
        text: "Sri Lanka +94",
        onPress: () => setCountry({ code: "LK", label: "Sri Lanka", dialCode: "+94" }),
      },
      {
        text: "United States +1",
        onPress: () => setCountry({ code: "US", label: "United States", dialCode: "+1" }),
      },
      {
        text: "India +91",
        onPress: () => setCountry({ code: "IN", label: "India", dialCode: "+91" }),
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const handleDetectLocation = () => {
    setLocation("Current location · Colombo");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Feather name="arrow-left" size={20} color="#111" />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <View style={styles.profileIcon}>
          <View style={styles.profileIconHead} />
          <View style={styles.profileIconBody} />
        </View>
      </View>

      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Please fill in the details to get started
      </Text>

      {/* Name Row */}
      <View style={styles.row}>
        <View style={[styles.inputWrapper, styles.inputWrapperHalf]}>
          <Feather name="user" size={18} color="#777" style={styles.inputIcon} />
          <TextInput placeholder="First Name" style={styles.inputWithIcon} placeholderTextColor="#777" />
        </View>
        <View style={[styles.inputWrapper, styles.inputWrapperHalf]}>
          <Feather name="user" size={18} color="#777" style={styles.inputIcon} />
          <TextInput placeholder="Last Name" style={styles.inputWithIcon} placeholderTextColor="#777" />
        </View>
      </View>

      {/* Email */}
      <View style={styles.inputWrapper}>
        <Feather name="mail" size={18} color="#777" style={styles.inputIcon} />
        <TextInput placeholder="Email" style={styles.inputWithIcon} placeholderTextColor="#777" keyboardType="email-address" />
      </View>

      {/* Password */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={18} color="#777" style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.inputWithIcon}
          placeholderTextColor="#777"
        />
        <TouchableOpacity
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.passwordToggle}
        >
          <Feather name={showPassword ? "eye" : "eye-off"} size={18} color="#777" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputWrapper}>
        <Feather name="lock" size={18} color="#777" style={styles.inputIcon} />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          style={styles.inputWithIcon}
          placeholderTextColor="#777"
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword((prev) => !prev)}
          style={styles.passwordToggle}
        >
          <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={18} color="#777" />
        </TouchableOpacity>
      </View>

      {/* Phone Input (FLAG + CODE + NUMBER) */}
      <PhoneField
        country={country}
        onCountryChange={handleCountryPress}
        value={phone}
        onChangeText={setPhone}
      />

      {/* Location */}
      <View style={styles.locationBlock}>
        <View style={styles.locationHeader}>
          <Text style={styles.locationLabel}>Location</Text>
          <TouchableOpacity onPress={handleDetectLocation}>
            <Text style={styles.detectText}>Detect</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.locationBox}
          onPress={() => Alert.alert("Location", "Tap Detect to fill location")}
        >
          <Text style={location ? styles.locationText : styles.locationPlaceholder}>
            {location || "Add Location"}
          </Text>
          <Feather name="map-pin" size={18} color="#f5a623" style={styles.locationIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.noteRow}>
        <Feather name="map-pin" size={14} color="#f5a623" style={styles.noteIcon} />
        <Text style={styles.note}>
          We will use your location to find nearby jobs faster
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.or}>OR</Text>

      {/* Google Button */}
      <TouchableOpacity style={styles.googleBtn}>
        <Image
          source={require("../../../assets/images/google_icon.png")}
          style={styles.googleIcon}
          resizeMode="contain"
        />
        <Text style={styles.googleBtnText}>Sign up with Google</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footer}>
        Already have an account?{" "}
        <Text style={{ color: "#f5a623", fontWeight: "bold" }}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF6E2",
    flexGrow: 1,
    justifyContent: "center",
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 16,
  },

  profileIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#f5a623",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIconHead: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 6,
  },
  profileIconBody: {
    width: 34,
    height: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },

  inputHalf: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    width: "48%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 54,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 14,
    marginBottom: 12,
    minHeight: 54,
  },
  inputWrapperHalf: {
    width: "48%",
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    color: "#111",
    minHeight: 54,
  },
  inputIcon: {
    marginRight: 10,
  },
  passwordToggle: {
    padding: 8,
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 54,
  },

  phoneContainer: {
    width: "100%",
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 54,
  },

  phoneTextContainer: {
    borderRadius: 14,
    backgroundColor: "#fff",
  },

  locationBlock: {
    marginBottom: 8,
    gap: 10,
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  locationLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#444",
  },
  detectText: {
    color: "#f5a623",
    fontWeight: "600",
  },
  locationBox: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  locationPlaceholder: {
    color: "#999",
    fontSize: 15,
  },
  locationText: {
    color: "#111",
    fontSize: 15,
    flex: 1,
  },
  locationIcon: {
    marginLeft: 10,
    fontSize: 16,
  },
  noteRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 15,
  },
  noteIcon: {
    marginTop: 2,
  },
  note: {
    fontSize: 12,
    color: "#999",
    flex: 1,
  },

  button: {
    backgroundColor: "#f5a623",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    marginVertical: 10,
    color: "#999",
  },

  googleBtn: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  googleBtnText: {
    color: "#111",
    fontWeight: "600",
    marginLeft: 8,
  },

  footer: {
    textAlign: "center",
    marginTop: 15,
    color: "#555",
  },
});