import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const img = require('../../../../assets/images/portfolio.png');
const { width } = Dimensions.get('window');

const WorkerAccepted = () => {
  const navigation = useNavigation();

  const handleConfirmBooking = () => {
    console.log('Confirm Booking');
    // TODO: navigate to booking confirmation or tracking
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={handleCancel} style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Worker Accepted</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.topSection}>
          <Image source={img} style={styles.image} />

          <Text style={styles.title}>Kate Norma has accepted your request!</Text>
          <Text style={styles.subtitle}>Please review the details and confirm to proceed further.</Text>

          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Service</Text>
              <Text style={styles.cardValue}>House Cleaning</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Date & Time</Text>
              <Text style={styles.cardValue}>May 12, 2024 · 10:00 AM</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Duration</Text>
              <Text style={styles.cardValue}>3 Hours</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Total Amount</Text>
              <Text style={styles.cardValue}>$45.00</Text>
            </View>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Estimate Arrival</Text>
              <Text style={styles.cardValue}>9:45 AM - 10:00 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.outlineButton} onPress={handleCancel}>
            <Text style={styles.outlineText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filledButton} onPress={handleConfirmBooking}>
            <Text style={styles.filledText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 26 : 0,
  },
  headerRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 0,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#111',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  headerSpacer: { width: 34 },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'android' ? 30 : 16,
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: Math.min(210, width * 0.57),
    height: Math.min(175, width * 0.47),
    resizeMode: 'contain',
    marginTop: Platform.OS === 'android' ? 14 : 20,
    marginBottom: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#262C3A',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 286,
  },
  subtitle: {
    fontSize: 12,
    color: '#8B93A6',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 12,
    marginBottom: 18,
    maxWidth: 318,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9E9EF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  cardLabel: {
    color: '#8E95A5',
    fontSize: 14,
    fontWeight: '500',
  },
  cardValue: {
    color: '#2A3040',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: Platform.OS === 'android' ? 10 : 4,
  },
  outlineButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F5C453',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  filledButton: {
    flex: 1,
    backgroundColor: '#FDBA12',
    borderRadius: 12,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineText: {
    color: '#F4B223',
    fontWeight: '700',
    fontSize: 16,
  },
  filledText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default WorkerAccepted;