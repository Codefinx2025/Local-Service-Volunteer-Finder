import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const PRIMARY = "#FFB700";

export const categories = [
  { id: "1", name: "Home\n Services", icon: "home" },
  { id: "2", name: "Vehicle\n Services", icon: "car" },
  { id: "3", name: "Construction", icon: "hammer" },
  { id: "4", name: "Health &\n Wellness", icon: "heartbeat" },
  { id: "5", name: "Pet Care\n Services", icon: "paw" },
  { id: "6", name: "IT & Tech\n Support", icon: "laptop" },
  { id: "7", name: "Cleaning &\n Maintenance", icon: "broom" },
  { id: "8", name: "Security\n Services", icon: "shield-alt" },
  { id: "9", name: "Photography &\n Videography", icon: "camera" },
];

interface Props {
  onPressCategory?: (item: any) => void;
  showHeader?: boolean;
  limit?: number; // ✅ NEW
}

const ServiceCategories: React.FC<Props> = ({
  onPressCategory,
  showHeader = true,
  limit,
}) => {
  const data = limit ? categories.slice(0, limit) : categories;

  return (
    <View>
        {showHeader && (
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Service Categories</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
        )}
        <View style={styles.grid}>
          {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => onPressCategory?.(item)}
          >
          {/* Glass Card with REAL blur */}
          <BlurView intensity={80} tint="light" style={styles.glassCard}>
            <View style={styles.innerGlow}>
              <View style={styles.iconWrapper}>

                <FontAwesome5
                  name={item.icon as any}
                  size={22}
                  color="#000"
                  style={styles.outlineIcon}
                />

                <FontAwesome5
                  name={item.icon as any}
                  size={18}
                  color={PRIMARY}
                />

              </View>
              
            </View>
          </BlurView>

          {/* Text BELOW */}
          <Text style={styles.text}>{item.name}</Text>
        
        </TouchableOpacity>
        ))}

        </View>
    </View>
  );
};
export default ServiceCategories;

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
    marginBottom: 6,
  },

  seeAll: {
    color: PRIMARY,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },

card: {
  width: "23%",
  alignItems: "center",
  marginBottom: 14,
},

glassCard: {
  width: 60,
  height: 60,
  borderRadius: 18,
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  // Glass feel
  backgroundColor: "rgba(255,255,255,0.15)", // transparent layer
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.3)",
  // Soft shadow (important!)
  elevation: 6,
},

innerGlow: {
  flex: 1,
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  // subtle light reflection
  backgroundColor: "rgba(255,255,255,0.1)",
},

  text: {
  fontSize: 11,
  textAlign: "center",
  marginTop: 6,
},

  iconWrapper: {
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  },

  outlineIcon: {
    position: "absolute",
  },
});