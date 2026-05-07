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
const binanceIcon = require('../../../../assets/images/binanceIcon.png');

const acceptedPayments = [
	{ key: 'binance', image: binanceIcon, label: 'Binance' },
	{ key: 'usdt', text: 'T', tint: '#26A17B', background: '#EAF8F3' },
	{ key: 'eth', text: '◇', tint: '#5B6780', background: '#ECEFF5' },
	{ key: 'btc', text: '₿', tint: '#F7931A', background: '#FFF1E0' },
	{ key: 'usdc', text: '$', tint: '#2775CA', background: '#EAF1FF' },
];

const steps = [
	{ number: '1', icon: 'scan-outline', label: 'Choose\nBinance Pay' },
	{ number: '2', icon: 'person-outline', label: 'Confirm with your\nBinance account' },
	{ number: '3', icon: 'shield-checkmark-outline', label: 'Review and\nconfirm payment' },
	{ number: '4', icon: 'checkmark-circle-outline', label: 'Payment\ncompleted' },
];

const reasons = [
	{
		icon: 'shield-checkmark-outline',
		iconColor: '#3D4A62',
		iconBg: '#FFF7E8',
		title: 'Top Security',
		description: 'Your payments are protected with advanced security and encryption.',
	},
	{
		icon: 'globe-outline',
		iconColor: '#D99000',
		iconBg: '#FFF8E8',
		title: 'Global & Borderless',
		description: 'Pay anyone, anywhere. Supports multiple currencies and countries.',
	},
	{
		icon: 'flash-outline',
		iconColor: '#F2B400',
		iconBg: '#FFF7DE',
		title: 'Fast & Low Fees',
		description: 'Enjoy instant payments with minimal fees.',
	},
];

export default function BinancePayScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView
				style={styles.scrollView}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.headerRow}>
					<TouchableOpacity activeOpacity={0.8} style={styles.backButton}>
						<Ionicons name="arrow-back" size={22} color="#27324A" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Binance Pay</Text>
					<View style={styles.headerSpacer} />
				</View>

				<View style={styles.heroCard}>
					<View style={styles.heroLeft}>
<View style={styles.heroLogoCircleLarge}>
						<Image source={binanceLogo} style={styles.heroLogoLarge} resizeMode="contain" />
					</View>

						<Text style={styles.heroSubtitle}>Fast, secure and borderless</Text>
						<Text style={styles.heroSubtitle}>Payments with your crypto</Text>
						<Text style={styles.heroSubtitle}>and Binance balance.</Text>

						<View style={styles.heroBadge}>
							<Ionicons name="shield-checkmark" size={11} color="#D79E00" />
							<Text style={styles.heroBadgeText}>Secure · Fast · Global</Text>
						</View>
					</View>

					<View style={styles.heroArtWrap}>
						<View style={styles.sparkleOne} />
						<View style={styles.sparkleTwo} />
						<View style={styles.phoneShadow} />
						<View style={styles.phoneFrame}>
							<View style={styles.phoneScreen}>
								<View style={styles.phoneCard}>
									<View style={styles.phoneCardIconRow}>
										<View style={styles.phoneCardBinanceMark}>
											<Image source={binanceLogo} style={styles.phoneCardLogo} resizeMode="contain" />
										</View>
										<Text style={styles.phoneCardPayText}>PAY</Text>
									</View>
								</View>

								<View style={styles.coinBadge}>
									<Image source={binanceLogo} style={styles.coinBadgeLogo} resizeMode="contain" />
								</View>
							</View>
						</View>
					</View>
				</View>

				<Text style={styles.sectionHeading}>How it works</Text>
				<View style={styles.stepsCard}>
					{steps.map((step, index) => (
						<View key={step.number} style={styles.stepItem}>
							<View style={styles.stepTopRow}>
								<View style={styles.stepNumberBubble}>
									<Text style={styles.stepNumber}>{step.number}</Text>
								</View>
								{index < steps.length - 1 ? <View style={styles.stepConnector} /> : null}
							</View>

							<View style={styles.stepIconCircle}>
								<Ionicons name={step.icon as keyof typeof Ionicons.glyphMap} size={19} color="#3B4358" />
							</View>

							<Text style={styles.stepLabel}>{step.label}</Text>
						</View>
					))}
				</View>

				<Text style={styles.sectionHeading}>Why choose Binance Pay?</Text>
				<View style={styles.reasonsCard}>
					{reasons.map((reason) => (
						<View key={reason.title} style={styles.reasonRow}>
							<View style={[styles.reasonIconWrap, { backgroundColor: reason.iconBg }]}>
								<Ionicons name={reason.icon as keyof typeof Ionicons.glyphMap} size={16} color={reason.iconColor} />
							</View>
							<View style={styles.reasonCopy}>
								<Text style={styles.reasonTitle}>{reason.title}</Text>
								<Text style={styles.reasonDescription}>{reason.description}</Text>
							</View>
						</View>
					))}
				</View>

				<Text style={styles.sectionHeading}>Accepted Payments</Text>
				<View style={styles.acceptedCard}>
					<View style={styles.acceptedRow}>
						{acceptedPayments.map((item) => (
							<View key={item.key} style={styles.acceptedIconWrap}>
								{item.image ? (
									item.key === 'binance' ? (
										<Image source={item.image} style={styles.acceptedLogoPlain} resizeMode="contain" />
									) : (
										<View style={[styles.acceptedLogoCircle, { backgroundColor: '#FFF4CF' }]}>
											<Image source={item.image} style={styles.acceptedLogo} resizeMode="contain" />
										</View>
									)
								) : (
									<View style={[styles.acceptedLogoCircle, { backgroundColor: item.background }]}>
										<Text style={[styles.acceptedSymbol, { color: item.tint }]}>{item.text}</Text>
									</View>
								)}
							</View>
						))}
						<View style={styles.morePill}>
							<Text style={styles.morePillText}>+100</Text>
							<Text style={styles.morePillSubText}>more</Text>
						</View>
					</View>
					<Text style={styles.acceptedNote}>Supports 100+ cryptocurrencies and Binance balance.</Text>
				</View>

				<View style={styles.noticeCard}>
					<View style={styles.noticeIconWrap}>
						<Ionicons name="shield-outline" size={16} color="#A5AABD" />
					</View>
					<View style={styles.noticeCopy}>
						<Text style={styles.noticeTitle}>Important Notice</Text>
						<Text style={styles.noticeText}>
							You will be redirected to Binance Pay to complete this transaction securely.
						</Text>
					</View>
				</View>

				<TouchableOpacity activeOpacity={0.9} style={styles.ctaButton}>
					<Ionicons name="lock-closed-outline" size={17} color="#ffffff" />
					<Text style={styles.ctaText}>Continue with Binance Pay</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#FAFAFB',
		paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 8 : 8,
	},
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		paddingHorizontal: 14,
		paddingBottom: 20,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	backButton: {
		width: 32,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#26304A',
	},
	headerSpacer: {
		width: 32,
		height: 32,
	},
	heroCard: {
		minHeight: 148,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: '#F0DEAE',
		backgroundColor: '#FFF8E7',
		paddingHorizontal: 14,
		paddingVertical: 14,
		flexDirection: 'row',
		overflow: 'hidden',
		marginBottom: 16,
	},
	heroLeft: {
		flex: 1,
		paddingRight: 10,
		justifyContent: 'center',
	},
	heroLogoCircle: {
		width: 52,
		height: 52,
		borderRadius: 26,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	heroLogo: {
		width: 26,
		height: 26,
	},
	heroLogoCircleLarge: {
		width: 76,
		height: 76,
		borderRadius: 38,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 14,
	},
	heroLogoLarge: {
		width: 64,
		height: 64,
	},
	heroTitle: {
		fontSize: 17,
		lineHeight: 21,
		fontWeight: '700',
		color: '#24304B',
		marginBottom: 3,
	},
	heroSubtitle: {
		fontSize: 11.5,
		lineHeight: 15,
		color: '#6F7685',
	},
	heroBadge: {
		alignSelf: 'flex-start',
		marginTop: 9,
		paddingHorizontal: 10,
		height: 22,
		borderRadius: 7,
		backgroundColor: '#FFFDF4',
		borderWidth: 1,
		borderColor: '#F3D97B',
		flexDirection: 'row',
		alignItems: 'center',
	},
	heroBadgeText: {
		marginLeft: 5,
		fontSize: 10,
		fontWeight: '600',
		color: '#7A6B33',
	},
	heroArtWrap: {
		width: 132,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sparkleOne: {
		position: 'absolute',
		right: 18,
		top: 22,
		width: 5,
		height: 5,
		borderRadius: 2.5,
		backgroundColor: '#F4D85A',
		transform: [{ rotate: '24deg' }],
		opacity: 0.75,
	},
	sparkleTwo: {
		position: 'absolute',
		left: 18,
		top: 64,
		width: 4,
		height: 4,
		borderRadius: 2,
		backgroundColor: '#F4D85A',
		transform: [{ rotate: '24deg' }],
		opacity: 0.55,
	},
	phoneShadow: {
		position: 'absolute',
		right: 16,
		top: 12,
		width: 68,
		height: 122,
		borderRadius: 16,
		backgroundColor: 'rgba(219, 174, 54, 0.18)',
		transform: [{ rotate: '10deg' }],
	},
	phoneFrame: {
		width: 76,
		height: 126,
		borderRadius: 16,
		backgroundColor: '#1C1F2A',
		padding: 4,
		transform: [{ rotate: '10deg' }],
		shadowColor: '#9C7421',
		shadowOpacity: 0.18,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 5 },
		elevation: 2,
	},
	phoneScreen: {
		flex: 1,
		borderRadius: 12,
		backgroundColor: '#FFF8E6',
		borderWidth: 1,
		borderColor: '#EDD19C',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	},
	phoneCard: {
		width: 52,
		height: 58,
		borderRadius: 10,
		backgroundColor: '#1F2431',
		transform: [{ translateY: -4 }],
		alignItems: 'center',
		justifyContent: 'center',
	},
	phoneCardIconRow: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	phoneCardBinanceMark: {
		width: 16,
		height: 16,
		marginBottom: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	phoneCardLogo: {
		width: 16,
		height: 16,
		tintColor: '#F0B400',
	},
	phoneCardPayText: {
		fontSize: 12,
		fontWeight: '800',
		color: '#F2D270',
		letterSpacing: 0.4,
	},
	coinBadge: {
		position: 'absolute',
		right: 10,
		bottom: 10,
		width: 26,
		height: 26,
		borderRadius: 13,
		backgroundColor: '#F4B000',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,
		borderColor: '#FFF1C9',
	},
	coinBadgeLogo: {
		width: 11,
		height: 11,
		tintColor: '#FFFFFF',
	},
	sectionHeading: {
		fontSize: 15.5,
		lineHeight: 19,
		fontWeight: '700',
		color: '#273147',
		marginBottom: 9,
	},
	stepsCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#E9ECF3',
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 10,
		paddingTop: 12,
		paddingBottom: 13,
		flexDirection: 'row',
		marginBottom: 16,
	},
	stepItem: {
		flex: 1,
		alignItems: 'center',
	},
	stepTopRow: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	stepNumberBubble: {
		width: 18,
		height: 18,
		borderRadius: 9,
		backgroundColor: '#FFB000',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 6,
	},
	stepNumber: {
		fontSize: 10,
		fontWeight: '800',
		color: '#FFFFFF',
	},
	stepConnector: {
		flex: 1,
		height: 1,
		borderStyle: 'dashed',
		borderTopWidth: 1,
		borderColor: '#D9DDE7',
		opacity: 0.9,
	},
	stepIconCircle: {
		width: 44,
		height: 44,
		borderRadius: 22,
		backgroundColor: '#F6F7FA',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 8,
	},
	stepLabel: {
		textAlign: 'center',
		fontSize: 10.5,
		lineHeight: 13,
		color: '#5A6477',
	},
	reasonsCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#E9ECF3',
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 12,
		paddingVertical: 10,
		marginBottom: 16,
	},
	reasonRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingVertical: 9,
	},
	reasonIconWrap: {
		width: 28,
		height: 28,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
		marginTop: 1,
	},
	reasonCopy: {
		flex: 1,
	},
	reasonTitle: {
		fontSize: 13,
		lineHeight: 16,
		fontWeight: '700',
		color: '#2B3448',
		marginBottom: 2,
	},
	reasonDescription: {
		fontSize: 11,
		lineHeight: 15,
		color: '#7B8393',
	},
	acceptedCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#E9ECF3',
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 12,
		paddingTop: 14,
		paddingBottom: 12,
		marginBottom: 14,
	},
	acceptedRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	acceptedIconWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	acceptedLogoCircle: {
		width: 32,
		height: 32,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},
	acceptedLogo: {
		width: 16,
		height: 16,
		tintColor: '#F0B400',
	},
	acceptedLogoPlain: {
		width: 28,
		height: 28,
	},
	acceptedSymbol: {
		fontSize: 17,
		fontWeight: '700',
	},
	morePill: {
		width: 42,
		height: 42,
		borderRadius: 21,
		backgroundColor: '#F2F5FA',
		alignItems: 'center',
		justifyContent: 'center',
	},
	morePillText: {
		fontSize: 12,
		fontWeight: '700',
		color: '#7A8190',
		lineHeight: 14,
	},
	morePillSubText: {
		fontSize: 8.5,
		color: '#7A8190',
		lineHeight: 10,
	},
	acceptedNote: {
		textAlign: 'center',
		fontSize: 10.5,
		lineHeight: 14,
		color: '#838C9B',
	},
	noticeCard: {
		borderRadius: 12,
		borderWidth: 1,
		borderColor: '#E9ECF3',
		backgroundColor: '#FBFCFE',
		paddingHorizontal: 12,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 16,
	},
	noticeIconWrap: {
		width: 20,
		height: 20,
		borderRadius: 10,
		marginTop: 2,
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	noticeCopy: {
		flex: 1,
	},
	noticeTitle: {
		fontSize: 12.5,
		fontWeight: '700',
		color: '#2E3649',
		marginBottom: 3,
	},
	noticeText: {
		fontSize: 11,
		lineHeight: 15,
		color: '#808796',
	},
	ctaButton: {
		height: 46,
		borderRadius: 10,
		backgroundColor: '#F6AF18',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#D08A00',
		shadowOpacity: 0.16,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 4 },
		elevation: 2,
	},
	ctaText: {
		marginLeft: 8,
		fontSize: 15.5,
		fontWeight: '700',
		color: '#FFFFFF',
	},
});
