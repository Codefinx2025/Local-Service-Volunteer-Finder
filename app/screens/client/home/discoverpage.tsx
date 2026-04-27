import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "1",
    name: "Will Parker",
    job: "Construction",
    rating: 4.4,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "John Sammit",
    job: "Car Repair",
    rating: 4.2,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "3",
    name: "Ashley Parker",
    job: "Pet Care",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "4",
    name: "Will Parker",
    job: "Construction",
    rating: 4.4,
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "5",
    name: "John Sammit",
    job: "Car Repair",
    rating: 4.2,
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "6",
    name: "Ashley Parker",
    job: "Pet Care",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=8",
  },
];

export default function DiscoverPage() {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.rating}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View>

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.job}>{item.job}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover</Text>
      </View>

      <Text style={styles.section}>Top rated freelancers</Text>

      {/* Grid */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.footer}>
        {[
          { icon: "home", label: "Home" },
          { icon: "search", label: "Search" },
          { icon: "compass", label: "Discover", active: true },
          { icon: "clipboard", label: "Orders" },
          { icon: "user", label: "Profile" },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.footerItem}>
            <View style={[styles.footerIconWrap, item.active && styles.footerIconActive]}>
              <Feather
                name={item.icon as any}
                size={20}
                color={item.active ? "#FFA500" : "#777"}
              />
            </View>
            <Text style={[styles.footerLabel, item.active && styles.footerLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 42,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  header: {
    backgroundColor: "#FFA500",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 22,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
    minHeight: 92,
    justifyContent: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
  },

  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },

  rating: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 5,
  },

  ratingText: {
    fontSize: 12,
  },

  name: {
    fontWeight: "bold",
    marginTop: 5,
  },

  job: {
    color: "#777",
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  footerItem: {
    alignItems: "center",
  },
  footerIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6",
    marginBottom: 4,
  },
  footerIconActive: {
    backgroundColor: "#FFE6C0",
  },
  footerLabel: {
    fontSize: 11,
    color: "#777",
  },
  footerLabelActive: {
    color: "#FFA500",
    fontWeight: "600",
  },
});