import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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

function DetailRow({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
	return (
		<View style={styles.detailRow}>
			<Text style={[styles.detailLabel, bold && styles.detailLabelBold]}>{label}</Text>
			<Text style={[styles.detailValue, bold && styles.detailValueBold]}>{value}</Text>
		</View>
	);
}

export default function InvoiceScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

			<ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()} style={styles.backButton} activeOpacity={0.75}>
						<Ionicons name="chevron-back" size={24} color="#1A1A1A" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Invoice</Text>
					<View style={styles.headerSpacer} />
				</View>

				<View style={styles.invoiceHero}>
					<View>
						<Text style={styles.heroTitle}>Invoice</Text>
						<Text style={styles.heroNumber}>#INV12345</Text>
					</View>
					<TouchableOpacity style={styles.heroIconButton} activeOpacity={0.8}>
						<MaterialCommunityIcons name="download" size={18} color="#FFFFFF" />
					</TouchableOpacity>
				</View>

				<View style={styles.card}>
					<Text style={styles.serviceName}>House Cleaning</Text>
					<Text style={styles.serviceDate}>May 12, 2024 • 10:00 AM</Text>
					<Text style={styles.addressLine}>2972 Westheimer Rd.</Text>
					<Text style={styles.addressLine}>Santa Ana, Illinois 85486</Text>
				</View>

				<View style={styles.card}>
					<DetailRow label="Service Fee" value="$40.00" />
					<DetailRow label="Platform Fee" value="$3.00" />
					<DetailRow label="Tax (5%)" value="$2.00" />
					<View style={styles.totalDivider} />
					<DetailRow label="Total Amount" value="$45.00" bold />
				</View>

				<Text style={styles.sectionTitle}>Payment Method</Text>
				<View style={styles.cardCompact}>
					<View style={styles.paymentRow}>
						<View style={styles.visaBadge}>
							<Text style={styles.visaText}>VISA</Text>
						</View>
						<Text style={styles.cardDigits}>•••• •••• 4242</Text>
					</View>
				</View>

				<Text style={styles.sectionTitle}>Payment Date</Text>
				<View style={styles.cardCompact}>
					<Text style={styles.paymentDate}>May 12, 2024 • 11:10 AM</Text>
				</View>

				<TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
					<Text style={styles.primaryButtonText}>Download Invoice</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => router.back()} style={styles.backHomeButton} activeOpacity={0.75}>
					<Text style={styles.backHomeText}>Back to Home</Text>
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
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	content: {
		paddingBottom: 28,
	},
	header: {
		height: 56,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 14,
		marginTop: 22,
	},
	backButton: {
		width: 32,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	headerSpacer: {
		width: 32,
	},
	invoiceHero: {
		marginHorizontal: 12,
		marginTop: 6,
		marginBottom: 12,
		borderRadius: 8,
		backgroundColor: '#FFB800',
		paddingHorizontal: 14,
		paddingVertical: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: '#000000',
		shadowOpacity: 0.08,
		shadowRadius: 10,
		shadowOffset: { width: 0, height: 4 },
		elevation: 2,
	},
	heroTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#FFFFFF',
		marginBottom: 4,
	},
	heroNumber: {
		fontSize: 12,
		fontWeight: '600',
		color: '#FFFFFF',
		opacity: 0.95,
	},
	heroIconButton: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		marginHorizontal: 12,
		borderRadius: 10,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#EAEAEA',
		paddingHorizontal: 14,
		paddingVertical: 13,
		marginBottom: 10,
		shadowColor: '#000000',
		shadowOpacity: 0.03,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		elevation: 1,
	},
	serviceName: {
		fontSize: 13,
		fontWeight: '700',
		color: '#4A4A4A',
		marginBottom: 4,
	},
	serviceDate: {
		fontSize: 11,
		color: '#7F7F7F',
		marginBottom: 6,
	},
	addressLine: {
		fontSize: 11,
		color: '#7F7F7F',
		lineHeight: 16,
	},
	detailRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
	},
	detailLabel: {
		fontSize: 12,
		color: '#737373',
		fontWeight: '600',
	},
	detailLabelBold: {
		color: '#1A1A1A',
		fontWeight: '700',
		fontSize: 12,
	},
	detailValue: {
		fontSize: 12,
		color: '#4A4A4A',
		fontWeight: '700',
	},
	detailValueBold: {
		color: '#1A1A1A',
		fontSize: 14,
		fontWeight: '800',
	},
	totalDivider: {
		height: 1,
		backgroundColor: '#EEEEEE',
		marginBottom: 12,
	},
	sectionTitle: {
		marginHorizontal: 12,
		marginTop: 4,
		marginBottom: 8,
		fontSize: 13,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	cardCompact: {
		marginHorizontal: 12,
		borderRadius: 10,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#EAEAEA',
		paddingHorizontal: 14,
		paddingVertical: 13,
		marginBottom: 10,
		shadowColor: '#000000',
		shadowOpacity: 0.03,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		elevation: 1,
	},
	paymentRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	visaBadge: {
		width: 31,
		height: 19,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#1A4FB3',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	visaText: {
		fontSize: 8,
		fontWeight: '900',
		color: '#1A4FB3',
		letterSpacing: 0.3,
	},
	cardDigits: {
		fontSize: 12,
		color: '#4A4A4A',
		fontWeight: '600',
	},
	paymentDate: {
		fontSize: 12,
		color: '#4A4A4A',
		fontWeight: '600',
	},
	primaryButton: {
		marginHorizontal: 12,
		marginTop: 8,
		borderRadius: 7,
		backgroundColor: '#FFB800',
		paddingVertical: 13,
		alignItems: 'center',
		justifyContent: 'center',
	},
	primaryButtonText: {
		fontSize: 13,
		fontWeight: '700',
		color: '#FFFFFF',
	},
	backHomeButton: {
		alignItems: 'center',
		paddingTop: 16,
		paddingBottom: 4,
	},
	backHomeText: {
		fontSize: 12,
		fontWeight: '600',
		color: '#6B6B6B',
	},
});
