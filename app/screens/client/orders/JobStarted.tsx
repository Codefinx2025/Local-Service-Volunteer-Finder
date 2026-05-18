import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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

function JobStartedIllustration() {
	return (
		<View style={styles.illustrationWrap}>
			<Image
				source={require('../../../../assets/images/jobStart.png')}
				style={styles.illustrationImage}
				resizeMode="contain"
			/>
		</View>
	);
}

export default function JobStartedScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

			<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
						<Ionicons name="chevron-back" size={26} color="#1D1D1D" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Job Started</Text>
					<View style={styles.headerRightSpace} />
				</View>

				<JobStartedIllustration />

				<View style={styles.messageBlock}>
					<Text style={styles.titleLine}>
						<Text style={styles.workerName}>Kate Norma</Text>
						<Text style={styles.titleLineRest}> has </Text>
						<Text style={styles.highlight}>started</Text>
						<Text style={styles.titleLineRest}> the job</Text>
					</Text>
					<Text style={styles.subtitle}>You can contact the worker anytime if need help.</Text>
				</View>

				<View style={styles.infoCard}>
					<View style={styles.infoRow}>
						<View style={styles.infoLeft}>
							<View style={styles.iconBubble}>
								<MaterialCommunityIcons name="clock-outline" size={16} color="#F6A400" />
							</View>
							<Text style={styles.infoLabel}>Job Started At</Text>
						</View>
						<View style={styles.infoValuePill}>
							<Text style={styles.infoValueText}>10:05 AM</Text>
						</View>
					</View>

					<View style={styles.divider} />

					<View style={styles.infoRow}>
						<View style={styles.infoLeft}>
							<View style={styles.iconBubble}>
								<MaterialCommunityIcons name="timer-outline" size={16} color="#F6A400" />
							</View>
							<Text style={styles.infoLabel}>Elapsed Time</Text>
						</View>
						<View style={styles.infoValuePill}>
							<Text style={styles.infoValueText}>00:15:30</Text>
						</View>
					</View>
				</View>

				<View style={styles.progressCard}>
					<View style={styles.progressLeft}>
						<View style={styles.progressShield}>
							<MaterialCommunityIcons name="shield-check" size={20} color="#F5A400" />
						</View>
					</View>
					<View style={styles.progressBody}>
						<Text style={styles.progressTitle}>Service in Progress</Text>
						<Text style={styles.progressText}>Our professional is working on your service.</Text>
						<Text style={styles.progressText}>You can contact them anytime if you need help.</Text>
					</View>
					<View style={styles.progressRight}>
						<View style={styles.progressBadge}>
							<MaterialIcons name="shield" size={22} color="#F5CF93" />
						</View>
					</View>
				</View>

				<TouchableOpacity style={styles.outlineButton}>
					<Ionicons name="chatbubble-ellipses-outline" size={18} color="#F6A400" />
					<Text style={styles.outlineButtonText}>Chat with Worker</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.filledButton}>
					<Ionicons name="call" size={18} color="#FFFFFF" />
					<Text style={styles.filledButtonText}>Call Worker</Text>
				</TouchableOpacity>

				<View style={styles.privacyRow}>
					<MaterialCommunityIcons name="lock" size={12} color="#F6A400" />
					<Text style={styles.privacyText}>Your safety and privacy are our priority.</Text>
				</View>
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
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 24,
	},
	header: {
		height: 44,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 14,
	},
	backButton: {
		width: 32,
		height: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 18,
		lineHeight: 22,
		fontWeight: '600',
		color: '#1B1B1B',
	},
	headerRightSpace: {
		width: 32,
		height: 32,
	},
	illustrationWrap: {
		width: '100%',
		height: 215,
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
		marginTop: 4,
		marginBottom: 14,
	},
	titleLine: {
		fontSize: 16,
		lineHeight: 23,
		textAlign: 'center',
		color: '#2A2A2A',
		fontWeight: '600',
	},
	workerName: {
		color: '#F6A400',
		fontWeight: '700',
	},
	titleLineRest: {
		color: '#2B2B2B',
		fontWeight: '600',
	},
	highlight: {
		color: '#F6A400',
		fontWeight: '700',
	},
	subtitle: {
		marginTop: 4,
		fontSize: 11,
		lineHeight: 16,
		textAlign: 'center',
		color: '#8B8B8B',
	},
	infoCard: {
		borderRadius: 10,
		backgroundColor: '#FEF7E8',
		borderWidth: 1,
		borderColor: '#F8E7BE',
		paddingHorizontal: 14,
		paddingVertical: 10,
	},
	infoRow: {
		minHeight: 38,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	infoLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flexShrink: 1,
	},
	iconBubble: {
		width: 22,
		height: 22,
		borderRadius: 11,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
		backgroundColor: '#FFF6E2',
	},
	infoLabel: {
		fontSize: 12,
		lineHeight: 16,
		color: '#5E5E5E',
		fontWeight: '500',
	},
	infoValuePill: {
		minWidth: 80,
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 8,
		backgroundColor: '#FFF5DD',
		alignItems: 'center',
		justifyContent: 'center',
	},
	infoValueText: {
		fontSize: 12,
		lineHeight: 16,
		color: '#F39B00',
		fontWeight: '700',
	},
	divider: {
		height: 1,
		backgroundColor: '#F0E1B8',
		marginVertical: 1,
	},
	progressCard: {
		marginTop: 10,
		borderRadius: 10,
		backgroundColor: '#FFF8EA',
		borderWidth: 1,
		borderColor: '#F7E7BF',
		paddingHorizontal: 14,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'center',
	},
	progressLeft: {
		width: 34,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginRight: 10,
		paddingTop: 2,
	},
	progressShield: {
		width: 24,
		height: 24,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF4D9',
	},
	progressBody: {
		flex: 1,
	},
	progressTitle: {
		fontSize: 13,
		lineHeight: 17,
		color: '#F39B00',
		fontWeight: '700',
		marginBottom: 2,
	},
	progressText: {
		fontSize: 9,
		lineHeight: 13,
		color: '#6F6F6F',
	},
	progressRight: {
		width: 36,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	progressBadge: {
		width: 28,
		height: 28,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#F5E2B8',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF9EE',
	},
	outlineButton: {
		marginTop: 10,
		height: 41,
		borderRadius: 7,
		borderWidth: 1.5,
		borderColor: '#F6A400',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 8,
		backgroundColor: '#FFFFFF',
	},
	outlineButtonText: {
		fontSize: 13,
		lineHeight: 17,
		color: '#F6A400',
		fontWeight: '600',
	},
	filledButton: {
		marginTop: 8,
		height: 41,
		borderRadius: 7,
		backgroundColor: '#F6A400',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 8,
	},
	filledButtonText: {
		fontSize: 13,
		lineHeight: 17,
		color: '#FFFFFF',
		fontWeight: '600',
	},
	privacyRow: {
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 6,
	},
	privacyText: {
		fontSize: 9,
		lineHeight: 13,
		color: '#8D8D8D',
	},
});
