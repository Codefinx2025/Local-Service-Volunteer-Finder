import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function PaymentScreen() {
  const [selectedPayment, setSelectedPayment] = useState('card');

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit / Debit Card',
    },
    {
      id: 'binance',
      name: 'Binance Pay',
      icon: '🪙',
      logo: 'BINANCE',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🅿️',
      logo: 'PayPal',
    },
  ];

  const paymentSummary = [
    {
      label: 'Community Clean-Up Drive',
      sublabel: '📍 Greenfield Park, Downtown',
      amount: '$25.00',
    },
    {
      label: 'Service Fee',
      amount: '$22.00',
    },
    {
      label: 'Platform Fee',
      amount: '$2.00',
    },
    {
      label: 'Donation (Optional)',
      amount: '$1.00',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroGlow} />
          <View style={styles.heroHeartOne} />
          <View style={styles.heroHeartTwo} />
          <View style={styles.heroHouseBase} />
          <View style={styles.heroHouseRoof} />

          <View style={styles.heroRow}>
            <View style={styles.heroBadge}>
              <View style={styles.heroBadgeInner}>
                <Ionicons name="shield-checkmark" size={26} color="#fff" />
              </View>
            </View>

            <View style={styles.heroCopy}>
              <Text style={styles.heroTitle}>Secure Payment</Text>
              <Text style={styles.heroSubtitle}>Your payment is safe and</Text>
              <Text style={styles.heroSubtitle}>encrypted 🔐</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Payment Summary</Text>

          <View style={styles.summaryTopRow}>
            <View style={styles.summaryAvatar}>
              <Ionicons name="people" size={20} color="#111" />
            </View>
            <View style={styles.summaryMain}>
              <Text style={styles.summaryTitle}>Community Clean-Up Drive</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-outline" size={12} color="#9AA0A6" />
                <Text style={styles.summaryLocation}>Greenfield Park, Downtown</Text>
              </View>
            </View>
            <Text style={styles.summaryPrice}>$25.00</Text>
          </View>

          <View style={styles.divider} />

          {paymentSummary.slice(1).map((item) => (
            <View key={item.label} style={styles.summaryItem}>
              <View style={styles.summaryLeft}>
                <Text style={styles.summaryLabel}>{item.label}</Text>
                {item.label === 'Platform Fee' ? (
                  <View style={styles.inlineInfoRow}>
                    <Ionicons name="information-circle-outline" size={13} color="#9AA0A6" />
                  </View>
                ) : null}
              </View>
              <Text style={styles.summaryAmount}>{item.amount}</Text>
            </View>
          ))}

          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalAmount}>$25.00</Text>
          </View>
        </View>

        <View style={styles.methodsWrap}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>

          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              activeOpacity={0.85}
              style={[
                styles.methodCard,
                selectedPayment === method.id && styles.methodCardSelected,
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <View style={styles.methodLeft}>
                <View style={[
                  styles.radio,
                  selectedPayment === method.id && styles.radioSelected,
                ]}>
                  {selectedPayment === method.id ? <View style={styles.radioDot} /> : null}
                </View>

                {method.id === 'card' ? (
                  <View style={styles.cardMiniIcon}>
                    <Ionicons name="card-outline" size={14} color="#58606B" />
                  </View>
                ) : null}

                {method.id === 'binance' ? (
                  <View style={styles.binanceMiniIcon}>
                    <Image
                      source={require('../../../../assets/images/binance.png')}
                      style={styles.methodImage}
                      resizeMode="contain"
                    />
                  </View>
                ) : null}

                {method.id === 'paypal' ? (
                  <View style={styles.paypalMiniIcon}>
                    <Image
                      source={require('../../../../assets/images/paypal.png')}
                      style={styles.methodImage}
                      resizeMode="contain"
                    />
                  </View>
                ) : null}

                <Text style={styles.methodName}>{method.name}</Text>
              </View>

              <View style={styles.methodRight}>
                {method.id === 'card' ? (
                  <View style={styles.brandStack}>
                    <Text style={styles.visaText}>VISA</Text>
                    <View style={styles.mastercardGroup}>
                      <View style={styles.masterRed} />
                      <View style={styles.masterOrange} />
                    </View>
                  </View>
                ) : null}
                {method.id === 'binance' ? (
                  <Text style={styles.binanceText}>BINANCE</Text>
                ) : null}
                {method.id === 'paypal' ? (
                  <Text style={styles.paypalText}>PayPal</Text>
                ) : null}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.securityNote}>
          <View style={styles.securityIconWrap}>
            <Ionicons name="shield-outline" size={18} color="#FFAF1F" />
          </View>
          <View>
            <Text style={styles.securityText}>We never store your card details.</Text>
            <Text style={styles.securityText}>100% secure & trusted payments.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.payButton} activeOpacity={0.9}>
          <Ionicons name="lock-closed-outline" size={17} color="#fff" />
          <Text style={styles.payButtonText}>Pay $25.00</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 22,
    paddingBottom: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1D21',
  },
  headerSpacer: {
    width: 34,
    height: 34,
  },
  heroCard: {
    marginHorizontal: 8,
    borderRadius: 12,
    minHeight: 90,
    backgroundColor: '#FFB000',
    paddingHorizontal: 16,
    paddingVertical: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  heroGlow: {
    position: 'absolute',
    right: -10,
    top: -8,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  heroHeartOne: {
    position: 'absolute',
    right: 16,
    top: 12,
    width: 32,
    height: 32,
    borderRadius: 8,
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  heroHeartTwo: {
    position: 'absolute',
    right: 34,
    top: 6,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  heroHouseBase: {
    position: 'absolute',
    right: 22,
    bottom: 6,
    width: 46,
    height: 18,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  heroHouseRoof: {
    position: 'absolute',
    right: 28,
    bottom: 18,
    width: 34,
    height: 34,
    backgroundColor: 'rgba(255,255,255,0.06)',
    transform: [{ rotate: '45deg' }],
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  heroBadge: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#FFF7E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  heroBadgeInner: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFA600',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCopy: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 11.5,
    color: '#2F2F2F',
    lineHeight: 14,
  },
  summaryCard: {
    marginTop: -10,
    marginHorizontal: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#222A33',
    marginBottom: 12,
  },
  summaryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  summaryAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF1D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  summaryMain: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 12.5,
    fontWeight: '500',
    color: '#1F1F1F',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryLocation: {
    fontSize: 10.5,
    color: '#9AA0A6',
    marginLeft: 3,
  },
  summaryPrice: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F1F1F',
    alignSelf: 'flex-start',
    paddingTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginBottom: 4,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 11,
  },
  summaryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  summaryLabel: {
    fontSize: 11.5,
    color: '#31363B',
  },
  summaryAmount: {
    fontSize: 11.8,
    fontWeight: '600',
    color: '#31363B',
  },
  inlineInfoRow: {
    marginLeft: 6,
  },
  totalSection: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF8ED',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  totalLabel: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#24303A',
  },
  totalAmount: {
    fontSize: 15.5,
    fontWeight: '700',
    color: '#FFA600',
  },
  methodsWrap: {
    marginTop: 14,
    marginHorizontal: 8,
  },
  methodCard: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 9,
    paddingHorizontal: 12,
    paddingVertical: 11,
    marginBottom: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  methodCardSelected: {
    borderColor: '#FFB21E',
    backgroundColor: '#FFFDF8',
  },
  methodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: '#FFB21E',
    backgroundColor: '#fff',
  },
  radioDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFB21E',
  },
  cardMiniIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  binanceMiniIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  paypalMiniIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  methodName: {
    fontSize: 11.5,
    fontWeight: '500',
    color: '#1F252B',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  methodRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 72,
  },
  brandStack: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  visaText: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#153EA9',
    marginRight: 3,
  },
  mastercardGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodImage: {
    width: 52,
    height: 16,
    alignSelf: 'center',
  },
  masterRed: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#EB001B',
    marginRight: -4,
    opacity: 0.95,
  },
  masterOrange: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#FF5F00',
    opacity: 0.95,
  },
  binanceText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#FFB21E',
  },
  paypalText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#1650B8',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 8,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
  },
  securityIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFF4DB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  securityText: {
    fontSize: 11.2,
    color: '#5F646A',
    lineHeight: 16,
  },
  payButton: {
    marginHorizontal: 8,
    backgroundColor: '#FFA600',
    borderRadius: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  payButtonText: {
    fontSize: 15.5,
    fontWeight: '700',
    color: '#fff',
  },
});
