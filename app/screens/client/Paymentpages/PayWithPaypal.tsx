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

const paypalLogo = require('../../../../assets/images/paypal.png');

export default function PayWithPaypalScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.headerRow}>
					<TouchableOpacity activeOpacity={0.8} style={styles.backButton}>
						<Ionicons name="chevron-back" size={18} color="#1f2940" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Pay with PayPal</Text>
					<View style={styles.headerSpacer} />
				</View>

				<View style={styles.totalCard}>
					<Text style={styles.totalLabel}>Total Amount</Text>
					<Text style={styles.totalAmount}>$25.00</Text>
				</View>

				<View style={styles.secureRow}>
					<Ionicons name="lock-closed-outline" size={12} color="#aab1bc" />
					<Text style={styles.secureText}>Secure and encrypted payment</Text>
				</View>

				<Text style={styles.sectionTitle}>PayPal Account</Text>

				<View style={styles.accountCard}>
					<View style={styles.accountLeft}>
						<View style={styles.paypalIconWrap}>
							<Image source={paypalLogo} style={styles.paypalLogoAccount} resizeMode="contain" />
						</View>
						<View>
							<Text style={styles.accountEmail}>johndoe@email.com</Text>
							<Text style={styles.accountType}>Personal Account</Text>
						</View>
					</View>
					<TouchableOpacity activeOpacity={0.8}>
						<Text style={styles.changeText}>Change</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.noticeCard}>
					<Ionicons name="information-circle" size={18} color="#1970e6" />
					<Text style={styles.noticeText}>
						You will be redirected to PayPal to review and complete your payment securely.
					</Text>
				</View>

				<View style={styles.reviewCard}>
					<View style={styles.illustrationWrap}>
						<View style={styles.illustrationWindow}>
							<View style={styles.windowDots}>
								<View style={styles.dot} />
								<View style={styles.dot} />
								<View style={styles.dot} />
							</View>
								<Image source={paypalLogo} style={styles.paypalLogoIllustration} resizeMode="contain" />
						</View>
						<View style={styles.shieldBadge}>
							<Ionicons name="shield-checkmark" size={14} color="#ffffff" />
						</View>
					</View>

					<Text style={styles.reviewTitle}>Review your payment on PayPal</Text>
					<Text style={styles.reviewText}>
						You will be redirected to PayPal to confirm and complete your payment of $25.00.
					</Text>

					<TouchableOpacity activeOpacity={0.9} style={styles.primaryButton}>
						<Image source={paypalLogo} style={styles.paypalLogoButton} resizeMode="contain" />
						<Text style={styles.primaryButtonText}>Continue with PayPal</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.benefitsCard}>
					<View style={styles.benefitItem}>
						<View style={styles.benefitIconCircle}>
							<Ionicons name="shield-checkmark-outline" size={15} color="#6b5a2b" />
						</View>
						<Text style={styles.benefitTitle}>Secure</Text>
						<Text style={styles.benefitText}>Your payment is 100% secure</Text>
					</View>

					<View style={styles.divider} />

					<View style={styles.benefitItem}>
						<View style={styles.benefitIconCircle}>
							<Ionicons name="lock-closed-outline" size={15} color="#6b5a2b" />
						</View>
						<Text style={styles.benefitTitle}>Protected</Text>
						<Text style={styles.benefitText}>PayPal Buyer Protection</Text>
					</View>

					<View style={styles.divider} />

					<View style={styles.benefitItem}>
						<View style={styles.benefitIconCircle}>
							<Ionicons name="flash-outline" size={15} color="#6b5a2b" />
						</View>
						<Text style={styles.benefitTitle}>Fast</Text>
						<Text style={styles.benefitText}>Quick and easy checkout</Text>
					</View>
				</View>

				<View style={styles.bottomSecureRow}>
					<Ionicons name="lock-closed-outline" size={12} color="#aab1bc" />
					<Text style={styles.bottomSecureText}>You will be redirected to PayPal in a secure session.</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 6 : 6,
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		paddingHorizontal: 16,
		paddingBottom: 20,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 18,
	},
	backButton: {
		width: 28,
		height: 28,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 19,
		fontWeight: '700',
		color: '#1f2940',
	},
	headerSpacer: {
		width: 28,
		height: 28,
	},
	totalCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#f3ede2',
		backgroundColor: '#fffaf2',
		paddingHorizontal: 16,
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 11,
	},
	totalLabel: {
		fontSize: 19,
		fontWeight: '700',
		color: '#273352',
	},
	totalAmount: {
		fontSize: 29,
		fontWeight: '700',
		color: '#f4a428',
	},
	secureRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 17,
	},
	secureText: {
		marginLeft: 4,
		fontSize: 11,
		color: '#8f98a8',
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#273352',
		marginBottom: 10,
	},
	accountCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#eaedf2',
		backgroundColor: '#ffffff',
		paddingHorizontal: 14,
		paddingVertical: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	accountLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	paypalIconWrap: {
		width: 30,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	paypalLogoAccount: {
		width: 26,
		height: 26,
	},
	accountEmail: {
		fontSize: 15,
		fontWeight: '600',
		color: '#1f2940',
		marginBottom: 2,
	},
	accountType: {
		fontSize: 12,
		color: '#8f98a8',
	},
	changeText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#1f72e8',
	},
	noticeCard: {
		borderRadius: 12,
		backgroundColor: '#eef5ff',
		borderWidth: 1,
		borderColor: '#dfeafb',
		paddingHorizontal: 12,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 14,
	},
	noticeText: {
		flex: 1,
		marginLeft: 8,
		fontSize: 12,
		lineHeight: 18,
		color: '#4e5d79',
	},
	reviewCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#eaedf2',
		backgroundColor: '#ffffff',
		paddingHorizontal: 16,
		paddingVertical: 16,
		marginBottom: 14,
	},
	illustrationWrap: {
		alignSelf: 'center',
		width: 110,
		height: 82,
		marginBottom: 12,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	illustrationWindow: {
		width: 92,
		height: 74,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#e4e9f1',
		backgroundColor: '#f8fafc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	windowDots: {
		position: 'absolute',
		left: 7,
		top: 8,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 3,
	},
	dot: {
		width: 4,
		height: 4,
		borderRadius: 2,
		backgroundColor: '#d1d8e4',
	},
	paypalLogoIllustration: {
		width: 32,
		height: 32,
	},
	shieldBadge: {
		position: 'absolute',
		right: 8,
		bottom: 4,
		width: 28,
		height: 28,
		borderRadius: 14,
		backgroundColor: '#1e74e8',
		alignItems: 'center',
		justifyContent: 'center',
	},
	reviewTitle: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
		color: '#273352',
		marginBottom: 8,
	},
	reviewText: {
		textAlign: 'center',
		fontSize: 13,
		lineHeight: 18,
		color: '#63708a',
		marginBottom: 15,
	},
	primaryButton: {
		height: 46,
		borderRadius: 10,
		backgroundColor: '#006de4',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	primaryButtonText: {
		marginLeft: 8,
		fontSize: 16,
		fontWeight: '700',
		color: '#ffffff',
	},
	paypalLogoButton: {
		width: 17,
		height: 17,
		tintColor: '#ffffff',
	},
	benefitsCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#eaedf2',
		backgroundColor: '#ffffff',
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'stretch',
		marginBottom: 10,
	},
	benefitItem: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 8,
	},
	benefitIconCircle: {
		width: 34,
		height: 34,
		borderRadius: 17,
		backgroundColor: '#f8efd7',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 7,
	},
	benefitTitle: {
		fontSize: 13,
		fontWeight: '700',
		color: '#273352',
		marginBottom: 4,
	},
	benefitText: {
		textAlign: 'center',
		fontSize: 10,
		lineHeight: 13,
		color: '#7d889b',
	},
	divider: {
		width: 1,
		backgroundColor: '#edf0f5',
		marginVertical: 8,
	},
	bottomSecureRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 4,
	},
	bottomSecureText: {
		marginLeft: 4,
		fontSize: 10.5,
		color: '#9ca4b1',
	},
});
