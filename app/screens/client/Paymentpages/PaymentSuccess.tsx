import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PaymentSuccessScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.headerTitle}>Payment Successful</Text>

				<View style={styles.heroWrap}>
					<View style={styles.confettiOne} />
					<View style={styles.confettiTwo} />
					<View style={styles.confettiThree} />
					<View style={styles.confettiFour} />
					<View style={styles.confettiFive} />
					<View style={styles.confettiSix} />
					<View style={styles.confettiSeven} />
					<View style={styles.confettiEight} />

					<View style={styles.outerCircle}>
						<View style={styles.innerCircle}>
							<Ionicons name="checkmark" size={44} color="#fff" />
						</View>
					</View>
				</View>

				<Text style={styles.successTitle}>Payment Successful!</Text>
				<Text style={styles.successSubtitle}>Your payment of $25.00 has been processed.</Text>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Payment Summary</Text>

					<View style={styles.summaryRow}>
						<View style={styles.summaryIconWrap}>
							<Ionicons name="construct" size={17} color="#f0a205" />
						</View>

						<View style={styles.summaryMainCopy}>
							<Text style={styles.summaryName}>Community Clean-Up Drive</Text>
							<View style={styles.locationRow}>
								<Ionicons name="location-outline" size={12} color="#9fa5b1" />
								<Text style={styles.locationText}>Greenfield Park, Downtown</Text>
							</View>
						</View>

						<Text style={styles.summaryAmount}>$25.00</Text>
					</View>

					<View style={styles.divider} />

					<View style={styles.totalRow}>
						<Text style={styles.totalLabel}>Total Amount</Text>
						<Text style={styles.totalAmount}>$25.00</Text>
					</View>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Card Used</Text>

					<View style={styles.cardUsedRow}>
						<View style={styles.masterWrap}>
							<View style={styles.masterRed} />
							<View style={styles.masterOrange} />
						</View>

						<View style={styles.cardUsedMain}>
							<Text style={styles.cardUsedName}>John Doe</Text>
							<Text style={styles.cardUsedNumber}>**** **** **** 3456</Text>
						</View>

						<View style={styles.paidBadge}>
							<Text style={styles.paidText}>Paid</Text>
						</View>
					</View>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Transaction Details</Text>

					<View style={styles.detailsRow}>
						<Text style={styles.detailLabel}>Transaction ID</Text>
						<Text style={styles.detailValue}>TXN1234567890</Text>
					</View>

					<View style={styles.detailsRow}>
						<Text style={styles.detailLabel}>Date & Time</Text>
						<Text style={styles.detailValue}>May 24, 2024 - 9:41 AM</Text>
					</View>

					<View style={styles.detailsRow}>
						<Text style={styles.detailLabel}>Payment Method</Text>
						<Text style={styles.detailValue}>Mastercard •••• 3456</Text>
					</View>

					<View style={styles.receiptNote}>
						<View style={styles.receiptIconWrap}>
							<Ionicons name="mail-outline" size={18} color="#7c4dff" />
						</View>
						<View style={styles.receiptTextWrap}>
							<Text style={styles.receiptText}>A receipt has been sent to</Text>
							<Text style={styles.receiptEmail}>johndoe@email.com</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity activeOpacity={0.9} style={styles.primaryButton}>
					<Text style={styles.primaryButtonText}>View Receipt</Text>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={0.9} style={styles.secondaryButton}>
					<Text style={styles.secondaryButtonText}>Back to Home</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 8 : 8,
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		paddingHorizontal: 16,
		paddingTop: 8,
		paddingBottom: 24,
	},
	headerTitle: {
		textAlign: 'center',
		fontSize: 19,
		fontWeight: '700',
		color: '#2c3350',
		marginBottom: 20,
	},
	heroWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 122,
		marginBottom: 12,
	},
	outerCircle: {
		width: 92,
		height: 92,
		borderRadius: 46,
		backgroundColor: '#eaf8ee',
		alignItems: 'center',
		justifyContent: 'center',
	},
	innerCircle: {
		width: 62,
		height: 62,
		borderRadius: 31,
		backgroundColor: '#3ec55d',
		alignItems: 'center',
		justifyContent: 'center',
	},
	confettiOne: {
		position: 'absolute',
		left: 54,
		top: 28,
		width: 6,
		height: 6,
		borderRadius: 2,
		backgroundColor: '#3ec55d',
		transform: [{ rotate: '45deg' }],
	},
	confettiTwo: {
		position: 'absolute',
		left: 32,
		top: 50,
		width: 5,
		height: 5,
		borderRadius: 2,
		backgroundColor: '#1b74e4',
		transform: [{ rotate: '45deg' }],
	},
	confettiThree: {
		position: 'absolute',
		left: 82,
		top: 70,
		width: 5,
		height: 5,
		borderRadius: 2,
		backgroundColor: '#ffb000',
		transform: [{ rotate: '45deg' }],
	},
	confettiFour: {
		position: 'absolute',
		right: 54,
		top: 28,
		width: 6,
		height: 6,
		borderRadius: 2,
		backgroundColor: '#3ec55d',
		transform: [{ rotate: '45deg' }],
	},
	confettiFive: {
		position: 'absolute',
		right: 32,
		top: 50,
		width: 5,
		height: 5,
		borderRadius: 2,
		backgroundColor: '#1b74e4',
		transform: [{ rotate: '45deg' }],
	},
	confettiSix: {
		position: 'absolute',
		right: 82,
		top: 70,
		width: 5,
		height: 5,
		borderRadius: 2,
		backgroundColor: '#ffb000',
		transform: [{ rotate: '45deg' }],
	},
	confettiSeven: {
		position: 'absolute',
		left: 102,
		top: 18,
		width: 4,
		height: 8,
		borderRadius: 2,
		backgroundColor: '#ffb000',
		transform: [{ rotate: '25deg' }],
	},
	confettiEight: {
		position: 'absolute',
		right: 102,
		top: 18,
		width: 4,
		height: 8,
		borderRadius: 2,
		backgroundColor: '#1b74e4',
		transform: [{ rotate: '-25deg' }],
	},
	successTitle: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '700',
		color: '#2d3561',
		marginBottom: 6,
	},
	successSubtitle: {
		textAlign: 'center',
		fontSize: 12,
		color: '#9da3b0',
		marginBottom: 16,
	},
	card: {
		backgroundColor: '#ffffff',
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#eef0f5',
		paddingHorizontal: 12,
		paddingVertical: 12,
		marginBottom: 12,
		shadowColor: '#000',
		shadowOpacity: 0.04,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
	},
	cardTitle: {
		fontSize: 13,
		fontWeight: '700',
		color: '#2d3553',
		marginBottom: 12,
	},
	summaryRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	summaryIconWrap: {
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: '#f8f1e6',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	summaryMainCopy: {
		flex: 1,
	},
	summaryName: {
		fontSize: 13.5,
		fontWeight: '600',
		color: '#23273a',
		marginBottom: 4,
	},
	locationRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	locationText: {
		marginLeft: 3,
		fontSize: 10.5,
		color: '#9fa5b1',
	},
	summaryAmount: {
		fontSize: 13.5,
		color: '#2a2f3e',
		fontWeight: '500',
		alignSelf: 'flex-start',
		paddingTop: 2,
	},
	divider: {
		height: 1,
		backgroundColor: '#edf0f4',
		marginTop: 12,
		marginBottom: 12,
	},
	totalRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	totalLabel: {
		fontSize: 12.5,
		fontWeight: '600',
		color: '#2f3443',
	},
	totalAmount: {
		fontSize: 13.5,
		fontWeight: '700',
		color: '#f0a205',
	},
	cardUsedRow: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#eef0f5',
		paddingHorizontal: 12,
		paddingVertical: 12,
	},
	masterWrap: {
		width: 30,
		height: 18,
		marginRight: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	masterRed: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#eb001b',
		marginRight: -4,
	},
	masterOrange: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#ff5f00',
	},
	cardUsedMain: {
		flex: 1,
	},
	cardUsedName: {
		fontSize: 13,
		color: '#2a3040',
		fontWeight: '600',
		marginBottom: 3,
	},
	cardUsedNumber: {
		fontSize: 11.5,
		color: '#9ba1ac',
	},
	paidBadge: {
		borderRadius: 8,
		backgroundColor: '#eef9f0',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	paidText: {
		fontSize: 10.5,
		fontWeight: '700',
		color: '#50c36b',
	},
	detailsRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 7,
	},
	detailLabel: {
		fontSize: 11.5,
		color: '#9ba1ac',
		flex: 1,
	},
	detailValue: {
		fontSize: 11.5,
		color: '#4b5160',
		textAlign: 'right',
		flex: 1,
	},
	receiptNote: {
		marginTop: 10,
		borderRadius: 12,
		backgroundColor: '#f2ecff',
		paddingHorizontal: 12,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	receiptIconWrap: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	receiptTextWrap: {
		flex: 1,
	},
	receiptText: {
		fontSize: 10.5,
		color: '#6f6b85',
	},
	receiptEmail: {
		fontSize: 11.5,
		fontWeight: '700',
		color: '#23273a',
		marginTop: 2,
	},
	primaryButton: {
		height: 48,
		borderRadius: 10,
		backgroundColor: '#f7a700',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	primaryButtonText: {
		fontSize: 15,
		fontWeight: '700',
		color: '#ffffff',
	},
	secondaryButton: {
		height: 48,
		borderRadius: 10,
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#f7a700',
		alignItems: 'center',
		justifyContent: 'center',
	},
	secondaryButtonText: {
		fontSize: 15,
		fontWeight: '700',
		color: '#2d3561',
	},
});
