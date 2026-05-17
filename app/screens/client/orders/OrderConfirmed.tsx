import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function OrderConfirmedScreen() {
  const router = useRouter();

  const orderDetails = {
    service: 'House Cleaning',
    date: 'May 12, 2024',
    time: '10:00 AM',
    serviceFee: '$40.00',
    platformFee: '$3.00',
    tax: '$2.00',
    totalAmount: '$45.00',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Order Confirmed</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={60} color="#FFC107" />
          </View>
        </View>

        {/* Success Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.successTitle}>Your booking is confirmed!</Text>
          <Text style={styles.successSubtitle}>
            We will notify you when the job{'\n'}starts.
          </Text>
        </View>

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          {/* Service Details */}
          <View style={styles.serviceDetailsBox}>
            <View style={styles.serviceRow}>
              <Text style={styles.serviceLabel}>{orderDetails.service}</Text>
            </View>
            <Text style={styles.serviceDate}>
              {orderDetails.date} • {orderDetails.time}
            </Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Fee Breakdown */}
            <View style={styles.feeRow}>
              <Text style={styles.feeLabel}>Service Fee</Text>
              <Text style={styles.feeAmount}>{orderDetails.serviceFee}</Text>
            </View>

            <View style={styles.feeRow}>
              <Text style={styles.feeLabel}>Platform Fee</Text>
              <Text style={styles.feeAmount}>{orderDetails.platformFee}</Text>
            </View>

            <View style={styles.feeRow}>
              <Text style={styles.feeLabel}>Tax (5%)</Text>
              <Text style={styles.feeAmount}>{orderDetails.tax}</Text>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Total Amount */}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalAmount}>{orderDetails.totalAmount}</Text>
            </View>
          </View>
        </View>

        {/* Track Button */}
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Your Job</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: (StatusBar.currentHeight ?? 0) + 12,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 32,
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
  placeholder: {
    width: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFF9E6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFE082',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  summaryContainer: {
    marginBottom: 24,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  serviceDetailsBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
  },
  serviceRow: {
    marginBottom: 4,
  },
  serviceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  serviceDate: {
    fontSize: 13,
    color: '#999',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 12,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  feeLabel: {
    fontSize: 13,
    color: '#666',
  },
  feeAmount: {
    fontSize: 13,
    color: '#666',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  totalAmount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  trackButton: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  trackButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});
