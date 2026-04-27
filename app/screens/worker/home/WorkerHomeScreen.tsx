import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function WorkerHomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 🔶 HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.userRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              style={styles.avatar}
            />
            <Text style={styles.username}>Courtney Henry</Text>
          </View>

          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </View>

        {/* 🔍 SEARCH */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search for 'Indoor Cleaning'"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* 📊 STATS */}
      <View style={styles.statsRow}>
        {/* Progress */}
        <View style={styles.circleCard}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>32%</Text>
          </View>
          <Text style={styles.statTitle}>Great Job!</Text>
          <Text style={styles.statSub}>
            You're on your way to hitting your monthly goal
          </Text>
        </View>

        {/* Rating */}
        <View style={styles.ratingCard}>
          <Text style={styles.ratingNumber}>4.5 ⭐</Text>
          <Text style={styles.statSub}>Average Reviews</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((s) => (
              <FontAwesome key={s} name="star" size={12} color="#FFA500" />
            ))}
          </View>

          <Text style={styles.reviewCount}>2,256,896</Text>
        </View>
      </View>

      {/* 📦 JOB CARDS WITH ICONS */}
      <View style={styles.smallCards}>
        {[
          { title: "Total Jobs", value: "10", icon: "briefcase-outline" },
          { title: "Ongoing", value: "5", icon: "time-outline" },
          { title: "Pending", value: "3", icon: "alert-circle-outline" },
          { title: "Completed", value: "1", icon: "checkmark-circle-outline" },
        ].map((item, i) => (
          <View key={i} style={styles.smallCard}>
            <Ionicons name={item.icon as any} size={20} color="#6c63ff" />
            <Text style={styles.smallValue}>{item.value}</Text>
            <Text style={styles.smallLabel}>{item.title}</Text>
          </View>
        ))}
      </View>

      {/* 🧰 CATEGORY */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Service Category</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <View style={styles.categoryGrid}>
        {[
          { name: "Home Services", icon: "home-outline" },
          { name: "Vehicle Services", icon: "car-outline" },
          { name: "Construction", icon: "hammer-outline" },
          { name: "Health & Wellness", icon: "medkit-outline" },
          { name: "Pet Care", icon: "paw-outline" },
          { name: "IT & Tech", icon: "laptop-outline" },
          { name: "Cleaning", icon: "brush-outline" },
          { name: "Security", icon: "shield-checkmark-outline" },
        ].map((item, i) => (
          <View key={i} style={styles.categoryItem}>
            <Ionicons name={item.icon as any} size={22} color="#333" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        ))}
      </View>

      {/* ⭐ REVIEWS */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      {[1, 2, 3].map((_, i) => (
        <View key={i} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <View style={styles.reviewUser}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=3" }}
                style={styles.reviewAvatar}
              />
              <View>
                <Text style={styles.reviewName}>Courtney Henry</Text>
                <View style={styles.starsRow}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FontAwesome
                      key={s}
                      name="star"
                      size={12}
                      color="#FFA500"
                    />
                  ))}
                </View>
              </View>
            </View>

            <Ionicons name="ellipsis-vertical" size={16} color="#555" />
          </View>

          <Text style={styles.reviewText}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation.
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  header: {
    backgroundColor: "#FFA500",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  searchBox: {
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  searchInput: { marginLeft: 10, flex: 1 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  circleCard: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 12,
    borderRadius: 15,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "#FFA500",
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: { fontWeight: "bold" },

  statTitle: { fontWeight: "bold", marginTop: 5 },

  statSub: { fontSize: 12, color: "#777" },

  ratingCard: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 12,
    borderRadius: 15,
    alignItems: "center",
  },

  ratingNumber: { fontSize: 20, fontWeight: "bold" },

  starsRow: { flexDirection: "row", marginTop: 5 },

  reviewCount: { fontSize: 12, color: "#777", marginTop: 5 },

  smallCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  smallCard: {
    backgroundColor: "#fff",
    width: "23%",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },

  smallValue: { fontWeight: "bold", fontSize: 14 },

  smallLabel: { fontSize: 10, color: "#777", textAlign: "center" },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },

  sectionTitle: { fontWeight: "bold", fontSize: 16 },

  seeAll: { color: "#6c63ff", fontSize: 12 },

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 10,
  },

  categoryItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
  },

  reviewCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 12,
    borderRadius: 12,
  },

  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  reviewUser: {
    flexDirection: "row",
  },

  reviewAvatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },

  reviewName: { fontWeight: "bold" },

  reviewText: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
});