import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WorkerProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* 🔥 HEADER + AVATAR */}
      <View style={styles.topSection}>
        {/* BACK BUTTON */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>

        {/* HIRE BUTTON */}
        <TouchableOpacity style={styles.hireBtn}>
          <Text style={styles.hireText}>HIRE NOW</Text>
        </TouchableOpacity>

        {/* PROFILE IMAGE */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300?img=5" }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* 👤 PROFILE CARD */}
      <View style={styles.card}>
        <Text style={styles.name}>Kate Norman</Text>
        <Text style={styles.role}>Pet Care Services</Text>

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color="#777" />
          <Text style={styles.location}> Wakwella, Galle</Text>
        </View>

        {/* STATS */}
        <View style={styles.stats}>
          <View>
            <Text style={styles.statLabel}>Ratings</Text>
            <Text style={styles.statValue}>4.8 ⭐</Text>
          </View>
          <View>
            <Text style={styles.statLabel}>Orders</Text>
            <Text style={styles.statValue}>120</Text>
          </View>
          <View>
            <Text style={styles.statLabel}>Reviews</Text>
            <Text style={styles.statValue}>222</Text>
          </View>
        </View>
      </View>

      {/* 📄 DESCRIPTION */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          As a dedicated pet care provider, I specialize in delivering
          compassionate and reliable services tailored to your pets' needs.
          My expertise includes pet sitting, dog walking, grooming, and
          personalized care routines.
        </Text>
      </View>

      {/* 📁 CV */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CV/Resume</Text>

        <View style={styles.cvBox}>
          <MaterialIcons name="description" size={28} color="#000" />

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cvTitle}>Kate Norman CV.PDF</Text>
            <Text style={styles.cvSub}>PDF Document 1.2MB</Text>
            <Text style={styles.cvSub}>Updated on 10 May 2024</Text>
          </View>

          <TouchableOpacity style={styles.downloadBtn}>
            <Ionicons name="download-outline" size={16} color="#000" />
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.verifyBox}>
          <Ionicons name="checkmark-circle" size={18} color="green" />
          <Text style={styles.verifyText}>
            This is a verified CV uploaded by Kate Norman
          </Text>
        </View>
      </View>

      {/* ⭐ REVIEWS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>

        {["Kyle Wilson", "John Dave", "Nahim Mazin"].map((name, i) => (
          <View key={i} style={styles.reviewItem}>
            <Text style={styles.reviewName}>{name}</Text>
            <Text style={styles.reviewText}>Awesome job!</Text>

            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <FontAwesome key={s} name="star" size={14} color="#FFA500" />
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  /* 🔥 HEADER */
  topSection: {
    backgroundColor: "#FFA500",
    height: 130,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 45,
  },

  backBtn: {
    position: "absolute",
    left: 15,
    top: 50,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 20,
  },

  hireBtn: {
    position: "absolute",
    right: 15,
    top: 50,
    backgroundColor: "#000",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  hireText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },

  avatarWrapper: {
    position: "absolute",
    bottom: -45,
    alignSelf: "center",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },

  /* 👤 CARD */
  card: {
    backgroundColor: "#fff",
    margin: 15,
    marginTop: 55,
    borderRadius: 15,
    padding: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  role: {
    color: "#777",
    marginTop: 3,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  location: {
    color: "#777",
    fontSize: 12,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  statLabel: {
    color: "#777",
    fontSize: 12,
  },

  statValue: {
    fontWeight: "bold",
  },

  /* 📦 SECTIONS */
  section: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    padding: 15,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#555",
    fontSize: 13,
    lineHeight: 18,
  },

  /* 📄 CV */
  cvBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  cvTitle: {
    fontWeight: "bold",
  },

  cvSub: {
    fontSize: 11,
    color: "#777",
  },

  downloadBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 6,
    borderRadius: 8,
  },

  downloadText: {
    fontSize: 12,
    marginLeft: 5,
  },

  verifyBox: {
    backgroundColor: "#FFE8A3",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  verifyText: {
    marginLeft: 8,
    fontSize: 12,
  },

  /* ⭐ REVIEWS */
  reviewItem: {
    marginBottom: 10,
  },

  reviewName: {
    fontWeight: "bold",
  },

  reviewText: {
    fontSize: 12,
    color: "#777",
  },

  stars: {
    flexDirection: "row",
    marginTop: 3,
  },
});