import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface OrderStatus {
  id: string;
  label: string;
  completed: boolean;
  current: boolean;
}

const ClientOrderDetails = () => {
  const navigation = useNavigation();
  const [orderStatuses, setOrderStatuses] = useState<OrderStatus[]>([
    { id: '1', label: 'Request Sent', completed: true, current: false },
    { id: '2', label: 'Waiting for worker to accept', completed: false, current: true },
    { id: '3', label: 'Worker Accepted', completed: false, current: false },
    { id: '4', label: 'Client Confirmation', completed: false, current: false },
    { id: '5', label: 'Job Started', completed: false, current: false },
    { id: '6', label: 'Completed', completed: false, current: false },
  ]);

  const handleCancelRequest = () => {
    Alert.alert(
      'Cancel Request',
      'Are you sure you want to cancel this request?',
      [
        { text: 'No', onPress: () => {}, style: 'cancel' },
        {
          text: 'Yes, Cancel',
          onPress: () => {
            Alert.alert('Success', 'Request has been cancelled.');
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleContactWorker = (type: 'message' | 'call') => {
    if (type === 'message') {
      Alert.alert('Message', 'Opening chat with Kate Norma...');
    } else {
      Alert.alert('Call', 'Initiating call with Kate Norma...');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Feather name="chevron-left" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Details</Text>
          <View style={styles.headerSpacer} />
        </View>

        {/* Status Badge and Order ID Row */}
        <View style={styles.topRow}>
          <View style={styles.pendingBadge}>
            <Text style={styles.badgeText}>PENDING</Text>
          </View>
          <Text style={styles.orderIDTopRight}>Order ID: #ORD012345</Text>
        </View>

        {/* Service Info */}
        <View style={styles.serviceInfo}>
          <Text style={styles.serviceName}>House Cleaning</Text>
          <Text style={styles.serviceDate}>May 12, 2024 • 10:00 AM (3 Hours)</Text>
          <Text style={styles.servicePrice}>$45.00</Text>
        </View>

        {/* Location */}
        <View style={styles.locationSection}>
          <MaterialIcons name="location-on" size={20} color="#FFD700" />
          <View style={styles.locationText}>
            <Text style={styles.locationStreet}>2972 Westheimer Rd.</Text>
            <Text style={styles.locationCity}>Santa Ana, Illinois 85486</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Worker Section */}
        <View style={styles.workerSection}>
          <Text style={styles.sectionTitle}>Worker</Text>
          <View style={styles.workerCard}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
              }}
              style={styles.workerImage}
            />
            <View style={styles.workerInfo}>
              <Text style={styles.workerName}>Kate Norma</Text>
              <View style={styles.ratingContainer}>
                <MaterialIcons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.6 (120 jobs)</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={[styles.iconButton, styles.filledIcon]}
                onPress={() => handleContactWorker('message')}
              >
                <MaterialIcons name="chat-bubble-outline" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.iconButton, styles.filledIcon]}
                onPress={() => handleContactWorker('call')}
              >
                <MaterialIcons name="call" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Order Status */}
        <View style={styles.statusSection}>
          <Text style={styles.sectionTitle}>Order Status</Text>
          <View style={styles.statusTimeline}>
            {orderStatuses.map((status, index) => (
              <View key={status.id} style={styles.statusItem}>
                <View style={styles.statusLeft}>
                  <View
                    style={[
                      styles.statusCircle,
                      status.completed && styles.statusCircleCompleted,
                      status.current && styles.statusCircleCurrent,
                    ]}
                  >
                    {status.completed && (
                      <MaterialIcons name="check" size={14} color="#fff" />
                    )}
                    {status.current && <View style={styles.statusInnerDot} />}
                  </View>

                  {index < orderStatuses.length - 1 && (
                    <View
                      style={[
                        styles.statusLine,
                        (status.completed || status.current) && styles.statusLineActive,
                      ]}
                    />
                  )}
                </View>

                <View style={styles.statusRight}>
                  <View style={styles.statusLabelRow}>
                    <Text
                      style={[
                        styles.statusLabel,
                        (status.completed || status.current) && styles.statusLabelActive,
                      ]}
                    >
                      {status.label}
                    </Text>

                    {index === 0 && (
                      <Text style={styles.statusTimeRight}>May 11, 9:30 AM</Text>
                    )}
                    {status.current && index !== 0 && (
                      <Text style={styles.statusTimeRight}>Pending</Text>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Cancel Button */}
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRequest}>
          <Text style={styles.cancelButtonText}>Cancel Request</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) : 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'android' ? 20 : 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  topRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pendingBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.5,
  },
  orderIDTopRight: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  serviceInfo: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  serviceName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  serviceDate: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  servicePrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  locationSection: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 12,
    alignItems: 'flex-start',
  },
  locationText: {
    marginLeft: 12,
    flex: 1,
  },
  locationStreet: {
    fontSize: 13,
    color: '#000',
    fontWeight: '500',
  },
  locationCity: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  workerSection: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  workerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  workerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  workerInfo: {
    flex: 1,
  },
  workerName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  filledIcon: {
    backgroundColor: '#FFD700',
    borderWidth: 0,
  },
  statusSection: {
    paddingHorizontal: 16,
    marginBottom: -8,
    paddingBottom: 12,
  },
  statusTimeline: {
    marginTop: 4,
  },
  statusItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  statusLeft: {
    alignItems: 'center',
    marginRight: 12,
    width: 24,
  },
  statusCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  statusCircleCompleted: {
    backgroundColor: '#FFD700',
  },
  statusCircleCurrent: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  statusLine: {
    width: 2,
    height: 24,
    backgroundColor: '#E0E0E0',
    marginTop: 2,
  },
  statusLineActive: {
    backgroundColor: '#FFD700',
  },
  statusInnerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFD700',
    position: 'absolute',
  },
  statusRight: {
    flex: 1,
    paddingTop: 0,
  },
  statusLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 13,
    color: '#999',
    fontWeight: '500',
    flex: 1,
  },
  statusLabelActive: {
    color: '#000',
    fontWeight: '600',
  },
  statusTimeRight: {
    fontSize: 12,
    color: '#999',
  },
  cancelButton: {
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 20, // Increased margin to move the button upwards
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ff1e00',
  },
  bottomSpacing: {
    height: 0,
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    marginVertical: 12,
  },
});

export default ClientOrderDetails;
