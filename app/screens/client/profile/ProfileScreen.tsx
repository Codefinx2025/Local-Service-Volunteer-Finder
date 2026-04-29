import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={22} color="#333" />
          <Text style={styles.headerTitle}>Profile Details</Text>
          <Ionicons name="ellipsis-vertical" size={20} color="#333" />
        </View>

        {/* Profile */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150" }}
              style={styles.avatar}
            />
            <View style={styles.editIcon}>
              <Ionicons name="pencil" size={12} color="#fff" />
            </View>
          </View>
          <Text style={styles.name}>Adam Peters</Text>
          <Text style={styles.subtitle}>Client since May 12, 2024</Text>
        </View>

        {/* PERSONAL INFO */}
        <SectionHeader title="Personal Information" icon="person-outline" />
        <View style={styles.card}>
          <InfoRow label="Full Name" value="Adam Peters" />
          <InfoRow label="Email" value="adam.peters@gmail.com" />
          <InfoRow label="Password" value="••••••••••" />
          <InfoRow label="Gender" value="Male" />
        </View>

        {/* ACCOUNT OVERVIEW */}
        <SectionHeader title="Account Overview" icon="shield-checkmark-outline" />
        <View style={styles.card}>
          <InfoRow label="Member ID" value="CLT-2024-0156" />
          <InfoRow
            label="Account Status"
            value="Active"
            valueStyle={{ color: "#28C76F" }}
          />
          <InfoRow label="Last Updated" value="Today, 10:30 AM" />
        </View>

        {/* SERVICES OVERVIEW */}
        <SectionHeader title="Services Overview" icon="briefcase-outline" />
        <View style={styles.yellowCard}>
          <View style={styles.servicesBox}>
            <View>
              <Text style={styles.bigNumber}>12</Text>
              <Text style={styles.smallText}>Services Completed</Text>
            </View>

            <View style={styles.iconCircleWhite}>
              <Ionicons name="briefcase-outline" size={22} color="#FFB400" />
            </View>
          </View>

          <View style={styles.statsRow}>
            <StatItem title="4.8" subtitle="Average Rating" />
            <StatItem title="8" subtitle="Workers Served With" />
          </View>
        </View>

        {/* RECENT SERVICES */}
        <SectionHeader
          title="Recent Services"
          icon="time-outline"
          rightText="View All"
        />

        <View style={styles.card}>
          <ServiceItem title="Home Cleaning" rating="5.0" date="May 10, 2024" />
          <ServiceItem title="Plumbing Repair" rating="4.5" date="Apr 28, 2024" />
          <ServiceItem title="Electrical Installation" rating="5.0" date="Apr 15, 2024" />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="create-outline" size={16} color="#fff" />
          <Text style={styles.editButtonText}> Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={26} color="#fff" />
            </View>
            <Text style={styles.modalTitle}>Profile Updated</Text>
            <Text style={styles.modalText}>
              Adam Peters’s profile updated successfully.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

/* ---------- COMPONENTS ---------- */

const SectionHeader = ({ title, icon, rightText }: any) => (
  <View style={styles.sectionHeader}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons name={icon} size={16} color="#FFB400" />
      <Text style={styles.sectionHeaderText}> {title}</Text>
    </View>
    {rightText && <Text style={styles.viewAll}>{rightText}</Text>}
  </View>
);

const InfoRow = ({ label, value, valueStyle }: any) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueStyle]}>{value}</Text>
  </View>
);

const StatItem = ({ title, subtitle }: any) => (
  <View>
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statSubtitle}>{subtitle}</Text>
  </View>
);

const ServiceItem = ({ title, rating, date }: any) => (
  <View style={styles.serviceItem}>
    <View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDate}>{date}</Text>
    </View>
    <Text style={styles.rating}>⭐ {rating}</Text>
  </View>
);

export default ProfileScreen;

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7F9",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 16,
  },

  profileCard: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF4DF", 
    marginHorizontal: 16,
    borderRadius: 16,
  },

  avatarWrapper: { position: "relative" },
  avatar: { width: 70, height: 70, borderRadius: 40 },

  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFB400",
    padding: 4,
    borderRadius: 20,
  },

  name: { fontSize: 16, fontWeight: "600", marginTop: 8 },
  subtitle: { fontSize: 12, color: "#777" },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 6,
  },

  sectionHeaderText: {
    fontWeight: "600",
    fontSize: 13,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 14,
  },

  yellowCard: {
    backgroundColor: "#FFF4DF",
    marginHorizontal: 16,
    borderRadius: 14,
    padding: 14,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },

  label: { color: "#888", fontSize: 12 },
  value: { fontWeight: "500", fontSize: 12 },

  servicesBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bigNumber: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFB400",
  },

  smallText: { fontSize: 12, color: "#777" },

  iconCircleWhite: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  statTitle: { fontWeight: "600", fontSize: 14 },
  statSubtitle: { fontSize: 11, color: "#777" },

  viewAll: {
    color: "#FFB400",
    fontSize: 12,
  },

  serviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },

  serviceTitle: { fontSize: 13, fontWeight: "500" },
  serviceDate: { fontSize: 11, color: "#888" },
  rating: { fontSize: 12 },

  editButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB400",
    margin: 16,
    padding: 14,
    borderRadius: 12,
  },

  editButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    width: "80%",
    alignItems: "center",
  },

  checkCircle: {
    backgroundColor: "#FFB400",
    padding: 14,
    borderRadius: 50,
    marginBottom: 10,
  },

  modalTitle: { fontWeight: "600", fontSize: 16 },
  modalText: {
    textAlign: "center",
    fontSize: 12,
    color: "#777",
    marginVertical: 10,
  },

  modalButton: {
    backgroundColor: "#FFB400",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  modalButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});