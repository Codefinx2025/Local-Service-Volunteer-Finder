import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

const PRIMARY = "#FFB700";

const freelancers = [
  {
    id: "1",
    name: "John Sammit",
    role: "Car Repair",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Ashley Parker",
    role: "Pet Care",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Will Parker",
    role: "Construction",
    rating: 4.7,
    image: "https://i.pravatar.cc/150?img=3",
  },
];

interface Props {
  showHeader?: boolean;
}

const TopFreelancers: React.FC<Props> = ({ showHeader = true }) => {
  return (
    <View>
      {/* HEADER */}
      {showHeader && (
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Top Freelancers</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
      )}

      {/* LIST */}
      <FlatList
        horizontal
        data={freelancers}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 20 }}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />

              <View style={styles.rating}>
                <Text style={styles.ratingText}>★ {item.rating}</Text>
              </View>
            </View>

            <View style={styles.infoCard}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardRole}>{item.role}</Text>

              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.role}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopFreelancers;

const styles = StyleSheet.create({
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  seeAll: {
    color: PRIMARY,
    fontWeight: "600",
  },

  cardWrapper: {
    width: 120,
    marginRight: 14,
    marginTop: 15,
  },

  imageContainer: {
    position: "relative",
  },

  cardImage: {
    width: "100%",
    height: 110,
    borderRadius: 18,
  },

  rating: {
    position: "absolute",
    bottom: 75,
    left: 10,
    backgroundColor: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },

  infoCard: {
    backgroundColor: "#fff",
    marginTop: -25,
    borderRadius: 20,
    padding: 12,
    elevation: 6,
  },

  cardName: {
    fontWeight: "bold",
    fontSize: 14,
  },

  cardRole: {
    fontSize: 12,
    color: "#777",
  },

  tag: {
    marginTop: 6,
    backgroundColor: "#F4E8C7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  tagText: {
    fontSize: 11,
  },
});