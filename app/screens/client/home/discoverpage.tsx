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

export default function DiscoverPage({ navigation }: any) {
  const renderItem = ({ item }: any) => (
    <View style={styles.cardWrapper}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />

        <View style={styles.rating}>
          <Text style={styles.ratingText}>★ {item.rating}</Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardRole}>{item.job}</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.job}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* 🔥 Back Button */}
      
      <View style={styles.header}>
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation?.goBack()}
        >
        <Feather name="chevron-left" size={20} color="#444" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Discover Experts</Text>
           
       <View style={styles.accentWrapper}>
            <View style={styles.accentLine} />
            <View style={styles.accentDot} />
        </View>
     
       <Text style={styles.headerSubText}>
         Browse trusted freelancers{"\n"}for every job
        </Text>
      </View>

      

      <Text style={styles.section}>Top rated freelancers</Text>

      {/* Grid */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {[
          { icon: "home", label: "Home" },
          { icon: "search", label: "Search" },
          { icon: "compass", label: "Discover", active: true },
          { icon: "clipboard", label: "Orders" },
          { icon: "user", label: "Profile" },
        ].map((item) => (
          <TouchableOpacity key={item.label} style={styles.footerItem}>
            <View
              style={[
                styles.footerIconWrap,
                item.active && styles.footerIconActive,
              ]}
            >
              <Feather
                name={item.icon as any}
                size={20}
                color={item.active ? "#FFA500" : "#777"}
              />
            </View>
            <Text
              style={[
                styles.footerLabel,
                item.active && styles.footerLabelActive,
              ]}
            >
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

    /*Back Button Style (matches your image)*/
    backButton: {
    position: "absolute",
    top: 20,   // 🔥 inside header now
    left: 15,

    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#EFEFEF",

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    },
    headerSubText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 4,
    opacity: 0.9,
    textAlign: "center",
    },
    header: {

    backgroundColor: "#FFA500",
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderRadius: 22,
    marginTop: 15,
    marginBottom: 18,
    minHeight: 92,
    justifyContent: "center",

    },

  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  section: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 14,
  },
  /* NEW ACCENT STYLE */
    accentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    },

    accentLine: {
    width: 40,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#ffffff',
    },

    accentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginLeft: 6,
    },

  /* ✅ Card Styles (UNCHANGED) */
  cardWrapper: {
    width: "31%",
    marginBottom: 20,
  },

  imageContainer: {
    position: "relative",
  },

  cardImage: {
    width: "100%",
    height: 100,
    borderRadius: 16,
  },

  rating: {
    position: "absolute",
    bottom: 70,
    left: 8,
    backgroundColor: "#FFB700",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },

  ratingText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },

  infoCard: {
    backgroundColor: "#fff",
    marginTop: -22,
    borderRadius: 16,
    padding: 10,
    elevation: 5,
  },

  cardName: {
    fontWeight: "bold",
    fontSize: 12,
  },

  cardRole: {
    fontSize: 10,
    color: "#777",
  },

  tag: {
    marginTop: 5,
    backgroundColor: "#F4E8C7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    alignSelf: "flex-start",
  },

  tagText: {
    fontSize: 9,
  },

  /* Footer */
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