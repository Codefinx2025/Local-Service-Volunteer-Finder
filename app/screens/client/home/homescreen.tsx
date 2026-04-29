
import ServiceCategories from "../../../../components/common/ServiceCategories/ServiceCategories";
import TopFreelancers from "../../../../components/common/TopFreelancers/TopFreelancers";

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  onPressCategory?: (item: any) => void;
  showHeader?: boolean;
  limit?: number; // 👈 ADD THIS
}


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

export default function HomeScreen() {

  const float1 = React.useRef(new Animated.Value(0)).current;
  const float2 = React.useRef(new Animated.Value(0)).current;
  const float3 = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const createAnimation = (anim: Animated.Value, delay: number) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: -10,
            duration: 2000,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      );
    };

    createAnimation(float1, 0).start();
    createAnimation(float2, 500).start();
    createAnimation(float3, 1000).start();
  }, []);

  return (

    
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>


    
      {/* ✅ HEADER (now fixed) */}
      <View style={styles.header}>

        <View style={{ flex: 1 }}>
          <Text style={styles.hello}>Hello, Adam 👋</Text>

          <Text style={styles.title}>
            Let’s find the{" "}
            <Text style={{ color: PRIMARY }}>best service</Text> for you
          </Text>
        </View>


        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />

        {/* Decorative Circles */}
        <Animated.View
            style={[
              styles.circleSmall,
              { transform: [{ translateY: float1 }] },
            ]}
          />

          <Animated.View
            style={[
              styles.circleMedium,
              { transform: [{ translateY: float2 }] },
            ]}
          />

          <Animated.View
            style={[
              styles.circleBig,
              { transform: [{ translateY: float3 }] },
            ]}
          >
            <LinearGradient
              colors={["#FFD36A", "#FFB700", "#FFA000"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, borderRadius: 190 }}
            />
          </Animated.View>

        </View>

        {/* SEARCH */}
        <View style={styles.searchWrapper}>
          <BlurView intensity={50} tint="light" style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#888" />
            <TextInput
              placeholder="Search service..."
              placeholderTextColor="#aaa"
              style={styles.searchInput}
            />
          </BlurView>
        </View>

        <ServiceCategories
          limit={8}
          onPressCategory={(item) => console.log(item)}
        />
        {/* FREELANCERS */}
        <TopFreelancers />

        {/* BANNER */}
        <View style={styles.banner}>
          <MaterialIcons name="verified" size={26} color="#fff" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.bannerTitle}>Why Choose Us?</Text>
            <Text style={styles.bannerText}>
              Verified professionals, secure payments,
              and top-quality services.
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#fff" />
        </View>

      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="home" label="Home" active />
        <NavItem icon="search" label="Search" />
        <NavItem icon="compass" label="Discover" />
        <NavItem icon="clipboard" label="Orders" />
        <NavItem icon="person" label="Profile" />
      </View>

    </View>
  );
}

const NavItem = ({ icon, label, active = false }: any) => (
  <View style={styles.navItem}>
    <Ionicons name={icon} size={22} color={active ? PRIMARY : "#999"} />
    <Text style={{ fontSize: 11, color: active ? PRIMARY : "#999" }}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  header: {

  backgroundColor: "#F1F1F1",
  paddingTop: 45,
  paddingBottom: 60,
  paddingHorizontal: 20,
  borderBottomLeftRadius: 35,
  borderBottomRightRadius: 35,
 
},

hello: {
    fontSize: 14,
    color: "#777",
},

title: {
  fontSize: 28,
  fontWeight: "bold",
  marginTop: 8,
  lineHeight: 36,
  maxWidth: "85%", // important → prevents text stretching too wide
},

 avatar: {
  position: "absolute",
  right: 20,
  top: 65,
  width: 48,
  height: 48,
  borderRadius: 24,
},

circleSmall: {
  position: "absolute",
  right: 80,
  top: 30,
  width: 35,
  height: 35,
  borderRadius: 20,
  backgroundColor: "#e7d699",

  shadowColor: "#F6E7B0",
  shadowOpacity: 0.5,
  shadowRadius: 15,
  elevation: 10,
},
circleMedium: {
  position: "absolute",
  right: 120,   // 👈 between small (80) and big (10)
  top: 100,     // 👈 adjust between top:30 and top:120

  width: 45,
  height: 45,
  borderRadius: 30,

  backgroundColor: "#FFD36A",

  shadowColor: "#FFB700",
  shadowOpacity: 0.4,
  shadowRadius: 20,
  shadowOffset: { width: 0, height: 8 },
  elevation: 12,
},
circleBig: {
  position: "absolute",
  right: 10,   // less negative → more visible
  top: 120,  // adjust position
  width: 90,
  height: 90,
  borderRadius: 190, // always half of width/height

  shadowColor: "#dfa000",
  shadowOpacity: 0.4,
  shadowRadius: 40,
  shadowOffset: { width: 0, height: 10 },
  elevation: 20,
},

searchWrapper: {
  marginHorizontal: 20,
  marginTop: -30,
  borderRadius: 35,
  overflow: "hidden",
},

searchBox: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 18,
  height: 58,
  borderRadius: 35,

  // glass look
  backgroundColor: "rgba(255,255,255,0.6)",
  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.4)",

  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 5 },
  elevation: 6,
},

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

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

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },

  categoryCard: {
    width: "23%",
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 12,
    elevation: 3,
  },

  categoryText: {
    fontSize: 11,
    textAlign: "center",
    marginTop: 8,
  },

  cardWrapper: {
    width: 140,   // was 160 → now matches design
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
    bottom: 10,
    left: 10,
    backgroundColor: PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 70,
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

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
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

  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY,
    margin: 20,
    padding: 18,
    borderRadius: 20,
  },

  bannerTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  bannerText: {
    color: "#fff",
    fontSize: 12,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
  },
});