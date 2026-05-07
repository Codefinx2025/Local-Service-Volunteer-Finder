import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
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

const binanceLogo = require('../../../../assets/images/binanceLogo.png');

export default function BinancePayWithAppScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.backButton} activeOpacity={0.8}>
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Binance Pay</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.bannerCard}>
          <View style={styles.bannerLeft}>
            <View style={styles.bannerLogoWrap}>
              <Image source={binanceLogo} style={styles.bannerLogo} resizeMode="contain" />
            </View>
            <View style={styles.bannerCopy}>
              <Text style={styles.bannerTitle}>Pay with Binance Pay</Text>
              <Text style={styles.bannerSubtitle}>Scan the QR code below to complete your payment securely.</Text>
            </View>
          </View>

          <View style={styles.bannerArt}>
            <View style={styles.phoneFake} />
          </View>
        </View>

        <View style={styles.whiteCard}>
          <Text style={styles.youPaying}>You are paying</Text>
          <Text style={styles.amount}>$25.00</Text>
          <Text style={styles.itemTitle}>Community Clean-Up Drive</Text>
          <Text style={styles.itemLocation}>Greenfield Park, Downtown</Text>

          <View style={styles.qrSectionTitleWrap}>
            <Text style={styles.qrTitle}>Scan with Binance App</Text>
            <Text style={styles.qrSubtitle}>Open your Binance app and scan this QR code to pay.</Text>
          </View>

          <View style={styles.qrWrap}>
            <View style={styles.qrBox}>
              <View style={styles.qrPlaceholder}>
                <Text style={styles.qrPlaceholderText}>QR</Text>
                <Image source={binanceLogo} style={styles.qrLogo} resizeMode="contain" />
              </View>
            </View>

            <View style={styles.qrTimerRow}>
              <Ionicons name="time-outline" size={14} color="#9AA0A6" />
              <Text style={styles.qrTimer}>QR code expires in 04:54</Text>
            </View>
          </View>

          <View style={styles.secureRow}>
            <View style={styles.secureLeftCircle}>
              <Ionicons name="shield-checkmark" size={16} color="#F6AF18" />
            </View>
            <View style={styles.secureCopy}>
              <Text style={styles.secureTitle}>Secure & Trusted</Text>
              <Text style={styles.secureText}>Your payment is protected by Binance's advanced security system.</Text>
            </View>
            <View style={styles.secureRightBadge}>
              <Ionicons name="shield-checkmark" size={14} color="#10B981" />
              <Text style={styles.secureBadgeText}>100% Secure{'\n'}Payments</Text>
            </View>
          </View> 

          <View style={styles.orDividerWrap}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.orLine} />
          </View>

          <TouchableOpacity style={styles.openAppButton} activeOpacity={0.9}>
            <Ionicons name="qr-code-outline" size={18} color="#F6AF18" />
            <Text style={styles.openAppText}>Open Binance App</Text>
            <Ionicons name="chevron-forward" size={18} color="#111827" />
          </TouchableOpacity>

          <View style={styles.needHelpRow}>
            <Ionicons name="help-circle-outline" size={16} color="#9AA0A6" />
            <Text style={styles.needHelpText}>Need help?</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.viewFaqsLink}>View FAQs</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footerNote}>Binance Pay is secure, fast, and trusted by millions worldwide.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 8 : 8,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  backButton: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  headerSpacer: { width: 36, height: 36 },

  bannerCard: {
    borderRadius: 12,
    backgroundColor: '#FFF7E6',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  bannerLeft: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  bannerLogoWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bannerLogo: { width: 36, height: 36 },
  bannerCopy: { flex: 1 },
  bannerTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B', marginBottom: 4 },
  bannerSubtitle: { fontSize: 12, color: '#5B6474' },
  bannerArt: { width: 80, alignItems: 'center', justifyContent: 'center' },
  phoneFake: { width: 46, height: 74, borderRadius: 10, backgroundColor: '#1F2937' },

  whiteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
  },
  youPaying: { textAlign: 'center', color: '#667085', fontSize: 13, marginBottom: 6 },
  amount: { textAlign: 'center', fontSize: 28, fontWeight: '800', color: '#F6AF18', marginBottom: 8 },
  itemTitle: { textAlign: 'center', fontWeight: '700', color: '#111827' },
  itemLocation: { textAlign: 'center', color: '#8B93A2', marginTop: 6, marginBottom: 14 },

  qrSectionTitleWrap: { alignItems: 'center', marginBottom: 12 },
  qrTitle: { fontWeight: '700', color: '#111827', marginBottom: 4 },
  qrSubtitle: { color: '#6B7280', fontSize: 12 },

  qrWrap: { alignItems: 'center', marginTop: 10, marginBottom: 12 },
  qrBox: {
    width: 198,
    height: 198,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#F6AF18',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  qrPattern: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrPlaceholderText: {
    fontSize: 32,
    color: '#E5E7EB',
    fontWeight: '800',
    marginBottom: 4,
  },
  qrSquare: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    margin: 2,
  },
  qrLogo: { width: 40, height: 40, position: 'absolute' },
  qrTimerRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 },
  qrTimer: { marginLeft: 6, color: '#9AA0A6', fontSize: 12 },

  secureRow: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#fcf6e3', borderRadius: 10, marginTop: 8 },
  secureLeftCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FFF7E6', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  secureCopy: { flex: 1 },
  secureTitle: { fontWeight: '700', color: '#111827' },
  secureText: { color: '#59606B', marginTop: 2, fontSize: 12 },
  secureRightBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8f8f8', paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8 },
  secureBadgeText: { color: '#065F46', fontWeight: '700', fontSize: 12, marginLeft: 6 },

  orDividerWrap: { flexDirection: 'row', alignItems: 'center', marginTop: 16, marginBottom: 12 },
  orLine: { flex: 1, height: 1, backgroundColor: '#EEF2F6' },
  orText: { marginHorizontal: 10, color: '#8B93A2', fontWeight: '700' },

  openAppButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 48, borderRadius: 10, borderWidth: 1, borderColor: '#F1E2B0', backgroundColor: '#FFF', gap: 8 },
  openAppText: { fontWeight: '700', color: '#111827', marginRight: 8 },

  needHelpRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 14, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#EEF2F6' },
  needHelpText: { color: '#9AA0A6', fontSize: 13 },
  viewFaqsLink: { color: '#F6AF18', fontWeight: '700', fontSize: 13, marginLeft: 4 },

  footerNote: { textAlign: 'center', color: '#9AA0A6', fontSize: 12, marginTop: 24, marginBottom: 16 },
});
