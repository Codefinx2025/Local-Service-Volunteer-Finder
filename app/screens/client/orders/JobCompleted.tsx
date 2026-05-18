import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function JobCompletedIllustration() {
  return (
    <View style={styles.illustrationWrap}>
      <Image
        source={require('../../../../assets/images/jobComplete.png')}
        style={styles.illustrationImage}
        resizeMode="contain"
      />
    </View>
  );
}

export default function JobCompletedScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={26} color="#202020" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Job Completed</Text>
          <View style={styles.headerRightSpace} />
        </View>

        <JobCompletedIllustration />

        <View style={styles.messageBlock}>
          <Text style={styles.titleLine}>
            <Text style={styles.workerName}>Kate Norma</Text>
            <Text style={styles.titleLineRest}> has completed the job</Text>
          </Text>
          <Text style={styles.subtitle}>Please review the job and proceed with payment.</Text>
        </View>

        <Text style={styles.sectionLabel}>Job Summary</Text>

        <View style={styles.summaryCard}>
          <View style={styles.summaryItemTop}>
            <Text style={styles.summaryService}>House Cleaning</Text>
            <Text style={styles.summaryDate}>May 12, 2024 • 10:00 AM</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryKey}>Duration</Text>
            <Text style={styles.summaryValue}>3 Hours</Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryKey}>Total Amount</Text>
            <Text style={styles.summaryValueStrong}>$45.00</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Report an Issue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 14,
    paddingTop: 22,
    paddingBottom: 24,
  },
  header: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  backButton: {
    width: 32,
    height: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: '600',
    color: '#222222',
  },
  headerRightSpace: {
    width: 32,
    height: 32,
  },
  illustrationWrap: {
    width: '100%',
    height: 212,
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  messageBlock: {
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 16,
  },
  titleLine: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#2B2B2B',
    fontWeight: '600',
  },
  workerName: {
    color: '#262626',
    fontWeight: '700',
  },
  titleLineRest: {
    color: '#2B2B2B',
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    color: '#949494',
  },
  sectionLabel: {
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: '#2D2D2D',
  },
  summaryCard: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  summaryItemTop: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
  },
  summaryService: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: '#404040',
    marginBottom: 2,
  },
  summaryDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#6F6F6F',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#EFEFEF',
  },
  summaryRow: {
    minHeight: 50,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryKey: {
    fontSize: 13,
    lineHeight: 18,
    color: '#4B4B4B',
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 13,
    lineHeight: 18,
    color: '#3A3A3A',
    fontWeight: '600',
  },
  summaryValueStrong: {
    fontSize: 13,
    lineHeight: 18,
    color: '#3A3A3A',
    fontWeight: '700',
  },
  primaryButton: {
    marginTop: 14,
    height: 42,
    borderRadius: 7,
    backgroundColor: '#F7B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  secondaryButton: {
    marginTop: 10,
    height: 42,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#F7B400',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  secondaryButtonText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#F7B400',
    fontWeight: '700',
  },
});