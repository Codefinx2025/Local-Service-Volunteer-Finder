import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function AddCardScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.header}>
					<TouchableOpacity activeOpacity={0.8} style={styles.headerIconButton}>
						<Ionicons name="arrow-back" size={22} color="#202432" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Add Card</Text>
					<View style={styles.headerSpacer} />
				</View>

				<View style={styles.heroCard}>
					<Text style={styles.heroTitle}>Secure Payments</Text>
					<Text style={styles.heroSubTitle}>Your card details are safe</Text>
					<Text style={styles.heroSubTitle}>with us.</Text>

					<View style={styles.heroCircleOne} />
					<View style={styles.heroCircleTwo} />
					<View style={styles.heroCardShape} />
					<View style={styles.heroCardStripe} />
					<View style={styles.heroShieldWrap}>
						<View style={styles.heroShieldInner}>
							<Ionicons name="lock-closed" size={18} color="#f8b114" />
						</View>
					</View>
				</View>

				<View style={styles.panelCard}>
					<Text style={styles.sectionTitle}>Payment Summary</Text>

					<View style={styles.summaryRow}>
						<View style={styles.summaryIconWrap}>
							<Ionicons name="construct" size={17} color="#f0a205" />
						</View>

						<View style={styles.summaryMainCopy}>
							<Text style={styles.summaryTitle}>Community Clean-Up Drive</Text>
							<View style={styles.summaryLocationRow}>
								<Ionicons name="location-outline" size={12} color="#a2a8b4" />
								<Text style={styles.summaryLocation}>Greenfield Park, Downtown</Text>
							</View>
						</View>

						<Text style={styles.summaryAmount}>$25.00</Text>
					</View>

					<View style={styles.divider} />

					<View style={styles.totalRow}>
						<Text style={styles.totalLabel}>Total Amount</Text>
						<Text style={styles.totalAmount}>$25.00</Text>
					</View>

					<Text style={styles.sectionTitleWithTopMargin}>Card Details</Text>

					<View style={styles.inputCardWide}>
						<Text style={styles.inputLabel}>Card Number</Text>
						<View style={styles.cardNumberRow}>
							<TextInput
								style={styles.cardNumberInput}
								value="1234 5678 9012 3456"
								editable={false}
							/>
							<View style={styles.brandRow}>
								<Text style={styles.visaText}>VISA</Text>
								<View style={styles.masterCardWrap}>
									<View style={styles.masterRed} />
									<View style={styles.masterOrange} />
								</View>
								<Text style={styles.amexText}>AMEX</Text>
							</View>
						</View>
					</View>

					<View style={styles.inputGridRow}>
						<View style={styles.inputCardHalf}>
							<Text style={styles.inputLabel}>Cardholder Name</Text>
							<TextInput style={styles.fieldInput} value="John Doe" editable={false} />
						</View>
						<View style={styles.inputCardHalf}>
							<Text style={styles.inputLabel}>Expiry Date</Text>
							<TextInput style={styles.fieldInput} value="MM/YY" editable={false} />
						</View>
					</View>

					<View style={styles.inputGridRow}>
						<View style={styles.inputCardHalf}>
							<View style={styles.labelWithIconRow}>
								<Text style={styles.inputLabel}>CVV</Text>
								<Ionicons name="information-circle-outline" size={13} color="#aeb4bf" />
							</View>
							<TextInput style={styles.fieldInput} value="123" editable={false} />
						</View>
						<View style={styles.inputCardHalf}>
							<Text style={styles.inputLabel}>Billing ZIP Code</Text>
							<TextInput style={styles.fieldInput} value="10001" editable={false} />
						</View>
					</View>

					<View style={styles.saveCardNote}>
						<View style={styles.checkCircle}>
							<Ionicons name="checkmark" size={12} color="#fff" />
						</View>
						<View>
							<Text style={styles.saveCardTitle}>Save this card for faster payments</Text>
							<Text style={styles.saveCardSubTitle}>You can manage your saved cards in Settings.</Text>
						</View>
					</View>

					<View style={styles.securityCard}>
						<View style={styles.securityIconWrap}>
							<Ionicons name="shield-checkmark" size={15} color="#f8b114" />
						</View>
						<View>
							<Text style={styles.securityTitle}>100% Secure & Encrypted</Text>
							<Text style={styles.securitySubTitle}>We use industry-standard encryption</Text>
							<Text style={styles.securitySubTitle}>to protect your information.</Text>
						</View>
					</View>

					<TouchableOpacity style={styles.payButton} activeOpacity={0.9}>
						<Ionicons name="lock-closed-outline" size={17} color="#fff" />
						<Text style={styles.payButtonText}>Pay $25.00</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
		paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 8 : 8,
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		paddingTop: 6,
		paddingBottom: 24,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingTop: 14,
		paddingBottom: 10,
	},
	headerIconButton: {
		width: 34,
		height: 34,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1f2430',
	},
	headerSpacer: {
		width: 34,
		height: 34,
	},
	heroCard: {
		marginHorizontal: 8,
		borderRadius: 14,
		backgroundColor: '#f8b204',
		minHeight: 128,
		paddingHorizontal: 16,
		paddingTop: 20,
		paddingBottom: 18,
		overflow: 'hidden',
	},
	heroTitle: {
		fontSize: 24,
		fontWeight: '700',
		color: '#1f232f',
		letterSpacing: 0.1,
	},
	heroSubTitle: {
		fontSize: 13,
		color: '#303746',
		marginTop: 1,
	},
	heroCircleOne: {
		position: 'absolute',
		right: 36,
		top: 22,
		width: 52,
		height: 52,
		borderRadius: 26,
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
	heroCircleTwo: {
		position: 'absolute',
		right: 4,
		top: 6,
		width: 58,
		height: 58,
		borderRadius: 29,
		backgroundColor: 'rgba(255,255,255,0.16)',
	},
	heroCardShape: {
		position: 'absolute',
		right: 12,
		top: 55,
		width: 106,
		height: 64,
		borderRadius: 9,
		backgroundColor: 'rgba(255,255,255,0.65)',
	},
	heroCardStripe: {
		position: 'absolute',
		right: 18,
		top: 84,
		width: 62,
		height: 7,
		borderRadius: 4,
		backgroundColor: 'rgba(235, 200, 145, 0.9)',
	},
	heroShieldWrap: {
		position: 'absolute',
		right: 70,
		top: 30,
		width: 58,
		height: 58,
		borderRadius: 29,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heroShieldInner: {
		width: 35,
		height: 35,
		borderRadius: 17.5,
		backgroundColor: '#f5f7fb',
		alignItems: 'center',
		justifyContent: 'center',
	},
	panelCard: {
		marginTop: -8,
		marginHorizontal: 8,
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		borderBottomLeftRadius: 12,
		borderBottomRightRadius: 12,
		backgroundColor: '#ffffff',
		paddingHorizontal: 14,
		paddingTop: 14,
		paddingBottom: 12,
		shadowColor: '#000',
		shadowOpacity: 0.07,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
	},
	sectionTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: '#222838',
		marginBottom: 14,
	},
	summaryRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	summaryIconWrap: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#f8f1e6',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	summaryMainCopy: {
		flex: 1,
	},
	summaryTitle: {
		fontSize: 16,
		color: '#222733',
		fontWeight: '600',
		marginBottom: 4,
	},
	summaryLocationRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	summaryLocation: {
		marginLeft: 2,
		fontSize: 12,
		color: '#a3a8b2',
	},
	summaryAmount: {
		fontSize: 20,
		fontWeight: '600',
		color: '#202633',
	},
	divider: {
		height: 1,
		backgroundColor: '#eceef2',
		marginBottom: 14,
	},
	totalRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	totalLabel: {
		fontSize: 17,
		fontWeight: '700',
		color: '#222838',
	},
	totalAmount: {
		fontSize: 20,
		fontWeight: '700',
		color: '#f7af03',
	},
	sectionTitleWithTopMargin: {
		fontSize: 20,
		fontWeight: '700',
		color: '#222838',
		marginBottom: 12,
		marginTop: 4,
	},
	inputCardWide: {
		borderWidth: 1,
		borderColor: '#e9ebef',
		borderRadius: 11,
		paddingHorizontal: 12,
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
	},
	inputLabel: {
		fontSize: 12,
		color: '#b0b5bf',
		marginBottom: 4,
	},
	cardNumberRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	cardNumberInput: {
		flex: 1,
		fontSize: 17,
		color: '#8f959f',
		paddingVertical: 0,
		marginRight: 8,
	},
	brandRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	visaText: {
		fontSize: 13,
		fontWeight: '700',
		color: '#1f57b6',
		marginRight: 8,
	},
	masterCardWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 8,
	},
	masterRed: {
		width: 17,
		height: 17,
		borderRadius: 8.5,
		backgroundColor: '#ec001b',
		marginRight: -5,
	},
	masterOrange: {
		width: 17,
		height: 17,
		borderRadius: 8.5,
		backgroundColor: '#ff6a00',
		opacity: 0.94,
	},
	amexText: {
		fontSize: 9,
		fontWeight: '700',
		color: '#2a72b6',
		borderWidth: 1,
		borderColor: '#b8d1e8',
		paddingHorizontal: 4,
		paddingVertical: 2,
		borderRadius: 3,
		overflow: 'hidden',
	},
	inputGridRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		gap: 10,
	},
	inputCardHalf: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#e9ebef',
		borderRadius: 11,
		paddingHorizontal: 12,
		paddingTop: 10,
		paddingBottom: 10,
	},
	fieldInput: {
		fontSize: 18,
		color: '#8f959f',
		paddingVertical: 0,
	},
	labelWithIconRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	saveCardNote: {
		borderRadius: 11,
		backgroundColor: '#fef9ef',
		paddingHorizontal: 12,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 2,
		marginBottom: 10,
	},
	checkCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#f7b10b',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	saveCardTitle: {
		fontSize: 13,
		fontWeight: '600',
		color: '#313743',
	},
	saveCardSubTitle: {
		fontSize: 11,
		color: '#9ba1ac',
		marginTop: 2,
	},
	securityCard: {
		borderWidth: 1,
		borderColor: '#eceef2',
		borderRadius: 12,
		paddingHorizontal: 12,
		paddingVertical: 11,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	securityIconWrap: {
		width: 28,
		height: 28,
		borderRadius: 14,
		backgroundColor: '#fff8e7',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	securityTitle: {
		fontSize: 13,
		fontWeight: '700',
		color: '#2b313d',
		marginBottom: 2,
	},
	securitySubTitle: {
		fontSize: 11,
		color: '#9ca2ac',
		lineHeight: 14,
	},
	payButton: {
		height: 54,
		borderRadius: 11,
		backgroundColor: '#f8b004',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	payButtonText: {
		fontSize: 24,
		fontWeight: '600',
		color: '#ffffff',
	},
});
