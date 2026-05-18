import { Feather, MaterialIcons } from '@expo/vector-icons';
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

interface OrderStatusItem {
	id: string;
	label: string;
	time: string;
	completed: boolean;
}

export default function OrderStatusCompletedScreen() {
	const router = useRouter();
	const [orderStatuses] = React.useState<OrderStatusItem[]>([
		{ id: '1', label: 'Request Sent', time: 'May 11, 9:30 AM', completed: true },
		{ id: '2', label: 'Worker Accepted', time: 'May 11, 9:55 AM', completed: true },
		{ id: '3', label: 'Client Confirmation', time: 'May 11, 9:40 AM', completed: true },
		{ id: '4', label: 'Job Started', time: 'May 12, 10:05 AM', completed: true },
		{ id: '5', label: 'Completed', time: 'May 12, 11:05 AM', completed: true },
		{ id: '6', label: 'Payment Completed', time: 'May 12, 11:10 AM', completed: true },
	]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

			<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
						<Feather name="chevron-left" size={28} color="#000" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Order Status (Completed)</Text>
					<View style={styles.headerRight} />
				</View>

				<View style={styles.topRow}>
					<View style={styles.completedBadge}>
						<Text style={styles.badgeText}>COMPLETED</Text>
					</View>
					<Text style={styles.orderID}>Order ID: #ORD012345</Text>
				</View>

				<View style={styles.serviceInfo}>
					<Text style={styles.serviceName}>House Cleaning</Text>
					<Text style={styles.serviceDate}>May 12, 2024 • 10:00 AM (3 Hours)</Text>
					<Text style={styles.servicePrice}>$45.00</Text>
				</View>

				<View style={styles.locationSection}>
					<MaterialIcons name="location-on" size={20} color="#FFD700" />
					<View style={styles.locationText}>
						<Text style={styles.locationStreet}>2972 Westheimer Rd.</Text>
						<Text style={styles.locationCity}>Santa Ana, Illinois 85486</Text>
					</View>
				</View>

				<View style={styles.divider} />

				<View style={styles.workerSection}>
					<Text style={styles.sectionTitle}>Worker</Text>
					<View style={styles.workerCard}>
						<Image
							source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' }}
							style={styles.workerImage}
						/>
						<View style={styles.workerInfo}>
							<Text style={styles.workerName}>Kate Norma</Text>
							<View style={styles.ratingContainer}>
								<MaterialIcons name="star" size={14} color="#FFD700" />
								<Text style={styles.ratingText}>4.0 (150 jobs)</Text>
							</View>
						</View>
						<View style={styles.actionButtons}>
							<TouchableOpacity style={[styles.iconButton, styles.filledIcon]}>
								<MaterialIcons name="chat-bubble-outline" size={18} color="#FFFFFF" />
							</TouchableOpacity>
							<TouchableOpacity style={[styles.iconButton, styles.filledIcon]}>
								<MaterialIcons name="call" size={18} color="#FFFFFF" />
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={styles.divider} />

				<View style={styles.statusSection}>
					<Text style={styles.sectionTitle}>Order Status</Text>
					<View style={styles.statusTimeline}>
						{orderStatuses.map((status, index) => (
							<View key={status.id} style={styles.statusItem}>
								<View style={styles.statusLeft}>
									<View style={[styles.statusCircle, styles.statusCircleCompleted]}>
										<MaterialIcons name="check" size={12} color="#FFFFFF" />
									</View>
									{index < orderStatuses.length - 1 && (
										<View style={[styles.statusLine, styles.statusLineActive]} />
									)}
								</View>
								<View style={styles.statusRight}>
									<View style={styles.statusLabelRow}>
										<Text style={[styles.statusLabel, styles.statusLabelActive]}>
											{status.label}
										</Text>
										<Text style={styles.statusTimeRight}>{status.time}</Text>
									</View>
								</View>
							</View>
						))}
					</View>
				</View>

				<TouchableOpacity style={styles.invoiceButton}>
					<Text style={styles.invoiceButtonText}>Download Invoice</Text>
				</TouchableOpacity>

				<View style={styles.bottomSpacing} />
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
	header: {
		height: 60,
		paddingHorizontal: 12,
		paddingTop: 24,
		marginTop: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
	},
	backButton: {
		padding: 8,
	},
	headerTitle: {
		fontSize: 17,
		fontWeight: '600',
		color: '#1A1A1A',
	},
	headerRight: {
		width: 32,
	},
	topRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		marginVertical: 8,
		gap: 12,
	},
	completedBadge: {
		paddingHorizontal: 10,
		paddingVertical: 4,
		borderRadius: 4,
		backgroundColor: '#D4EDDA',
	},
	badgeText: {
		fontSize: 10,
		fontWeight: '700',
		color: '#155724',
	},
	orderID: {
		fontSize: 12,
		fontWeight: '600',
		color: '#6F6F6F',
	},
	serviceInfo: {
		paddingHorizontal: 16,
		marginVertical: 8,
	},
	serviceName: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 2,
	},
	serviceDate: {
		fontSize: 12,
		color: '#6F6F6F',
		marginBottom: 4,
	},
	servicePrice: {
		fontSize: 16,
		fontWeight: '700',
		color: '#1A1A1A',
	},
	locationSection: {
		flexDirection: 'row',
		paddingHorizontal: 16,
		marginVertical: 12,
		gap: 12,
	},
	locationText: {
		flex: 1,
	},
	locationStreet: {
		fontSize: 13,
		fontWeight: '600',
		color: '#1A1A1A',
		marginBottom: 2,
	},
	locationCity: {
		fontSize: 12,
		color: '#6F6F6F',
	},
	divider: {
		height: 1,
		backgroundColor: '#E8E8E8',
		marginVertical: 12,
	},
	workerSection: {
		paddingHorizontal: 16,
	},
	sectionTitle: {
		fontSize: 14,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 10,
	},
	workerCard: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 12,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E8E8E8',
		marginBottom: 12,
	},
	workerImage: {
		width: 44,
		height: 44,
		borderRadius: 22,
		marginRight: 12,
	},
	workerInfo: {
		flex: 1,
	},
	workerName: {
		fontSize: 13,
		fontWeight: '700',
		color: '#1A1A1A',
		marginBottom: 2,
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	ratingText: {
		fontSize: 11,
		color: '#6F6F6F',
		fontWeight: '600',
	},
	actionButtons: {
		flexDirection: 'row',
		gap: 8,
	},
	iconButton: {
		width: 36,
		height: 36,
		borderRadius: 18,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filledIcon: {
		backgroundColor: '#FFD700',
	},
	statusSection: {
		paddingHorizontal: 16,
	},
	statusTimeline: {
		marginLeft: 4,
	},
	statusItem: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	statusLeft: {
		alignItems: 'center',
		marginRight: 12,
		width: 24,
	},
	statusCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#FFD700',
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusCircleCompleted: {
		backgroundColor: '#FFD700',
		borderColor: '#FFD700',
	},
	statusLine: {
		width: 2,
		height: 32,
		backgroundColor: '#E8E8E8',
		marginTop: 2,
	},
	statusLineActive: {
		backgroundColor: '#FFD700',
	},
	statusRight: {
		flex: 1,
		paddingTop: 2,
	},
	statusLabelRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	statusLabel: {
		fontSize: 13,
		color: '#999999',
		fontWeight: '600',
	},
	statusLabelActive: {
		color: '#1A1A1A',
		fontWeight: '700',
	},
	statusTimeRight: {
		fontSize: 11,
		color: '#999999',
		fontWeight: '500',
	},
	invoiceButton: {
		marginHorizontal: 16,
		marginTop: 20,
		marginBottom: 12,
		paddingVertical: 12,
		borderRadius: 8,
		backgroundColor: '#FFD700',
		alignItems: 'center',
	},
	invoiceButtonText: {
		fontSize: 13,
		fontWeight: '700',
		color: '#FFFFFF',
	},
	bottomSpacing: {
		height: 80,
	},
});
