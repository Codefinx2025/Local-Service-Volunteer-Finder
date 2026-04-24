import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

export default function Onboarding({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Top Illustration */}
      <View style={styles.header}>

        <Image
          source={require("../../../assets/icons/workers.png")} // replace with your image
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Workly</Text>
        <Text style={styles.subtitle}>Where Skills and Needs Meet</Text>

      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Continue as</Text>
        <Text style={styles.sectionDesc}>
          Whether you're here to help or find help, start by choosing the role
          that suits you best.
        </Text>

        {/* Worker Card */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("WorkerLogin")}
        >
          <View style={[styles.iconBox, { backgroundColor: "#FFF3D6" }]}>
            <Image
              source={require("../../../assets/icons/worker-icon.png")}
              style={styles.iconImage}
            />
          </View>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>WORKER</Text>
            <Text style={styles.cardSubtitle}>
              Turn your talent into earning today
            </Text>
          </View>

          <View style={[styles.arrowBtn, { backgroundColor: "#F5A623" }]}>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </View>

        </TouchableOpacity>

          {/* Hire Someone Card */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("HireLogin")}
          >

          <View style={[styles.iconBox, { backgroundColor: "#E6F0FF" }]}>
            <Image
              source={require("../../../assets/icons/hire-icon.png")}
              style={styles.iconImage}
            />
          </View>

          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>HIRE SOMEONE</Text>
            <Text style={styles.cardSubtitle}>
              Get the job done with just one click
            </Text>
          </View>

          <View style={[styles.arrowBtn, { backgroundColor: "#2F80ED" }]}>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </View>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6F2",
    paddingHorizontal: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 20,
  },

  image: {
    width: "100%",
    height: 185,
    marginTop: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0B1C2C",

  },

  subtitle: {
    fontSize: 14,
    color: "#7A869A",
    marginTop: 5,
  },

  body: {
    marginTop: 35,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0B1C2C",
    marginTop: 35,
  },

  sectionDesc: {
    fontSize: 14,
    color: "#7A869A",
    marginTop: 8,
    lineHeight: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginTop: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  iconImage: {
    width: 40,
    height: 40,
  },

  cardText: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0B1C2C",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#7A869A",
    marginTop: 4,
  },

  arrowBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});