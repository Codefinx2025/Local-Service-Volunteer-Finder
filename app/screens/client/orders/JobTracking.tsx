import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function JobTrackingScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

			<View style={styles.header}>
				<TouchableOpacity style={styles.headerIconButton} onPress={() => router.back()}>
					<Ionicons name="chevron-back" size={26} color="#111" />
				</TouchableOpacity>

				<Text style={styles.headerTitle}>Job Tracking</Text>

				<TouchableOpacity style={styles.headerIconButton}>
					<Ionicons name="ellipsis-horizontal" size={22} color="#111" />
				</TouchableOpacity>
			</View>

			<View style={styles.workerCard}>
				<View style={styles.workerInfo}>
					<View style={styles.avatar}>
						<Text style={styles.avatarText}>KN</Text>
					</View>

					<View style={styles.workerTextBlock}>
						<Text style={styles.workerName}>Kate Norma</Text>
						<View style={styles.ratingRow}>
							<Ionicons name="star" size={12} color="#F6B400" />
							<Text style={styles.ratingText}>4.8</Text>
						</View>
					</View>
				</View>

				<View style={styles.actionRow}>
					<TouchableOpacity style={styles.actionButton}>
						<Ionicons name="chatbubble-outline" size={20} color="#F6B400" />
					</TouchableOpacity>
					<TouchableOpacity style={styles.actionButton}>
						<Ionicons name="call-outline" size={20} color="#F6B400" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.mapArea}>
				<View style={styles.mapGrid}>
					<View style={[styles.gridLine, styles.gridVertical1]} />
					<View style={[styles.gridLine, styles.gridVertical2]} />
					<View style={[styles.gridLine, styles.gridVertical3]} />
					<View style={[styles.gridLine, styles.gridHorizontal1]} />
					<View style={[styles.gridLine, styles.gridHorizontal2]} />
					<View style={[styles.gridLine, styles.gridHorizontal3]} />

					<View style={styles.greenPatchOne} />
					<View style={styles.greenPatchTwo} />
					<View style={styles.greenPatchThree} />

					<View style={styles.routeLabel}>
						<Text style={styles.routeLabelText}>10 min</Text>
						<Text style={styles.routeLabelSubText}>away</Text>
					</View>

					<View style={styles.destinationPin}>
						<Ionicons name="location-sharp" size={18} color="#7A5A1D" />
					</View>

					<View style={styles.originPin}>
						<Ionicons name="location-sharp" size={26} color="#FF7A1A" />
					</View>

					<View style={styles.routeLineTop} />
					<View style={styles.routeLineMid} />
					<View style={styles.routeLineLeft} />
					<View style={styles.routeLineRight} />
				</View>
			</View>

			<View style={styles.bottomCard}>
				<View style={styles.bottomCardTopRow}>
					<Text style={styles.bottomCardTitle}>Worker is on the way</Text>
					<Ionicons name="ellipsis-horizontal" size={18} color="#A7A7A7" />
				</View>

				<View style={styles.detailRow}>
					<Text style={styles.detailLabel}>Estimated arrival</Text>
					<Text style={styles.detailValue}>10:00 AM</Text>
				</View>

				<View style={styles.detailDivider} />

				<Text style={styles.detailLabel}>Service Address</Text>
				<Text style={styles.addressText}>2972 Westheimer Rd.</Text>
				<Text style={styles.addressText}>Santa Ana, Illinois 85486</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {
		height: 60,
		paddingHorizontal: 16,
		paddingTop: 40,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
	},
	headerIconButton: {
		width: 32,
		height: 32,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '600',
		color: '#111111',
	},
	workerCard: {
		marginHorizontal: 12,
		marginTop: 20,
		marginBottom: 16,
		paddingHorizontal: 14,
		paddingVertical: 12,
		borderRadius: 18,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 12,
		shadowOffset: { width: 0, height: 4 },
		elevation: 3,
	},
	workerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		flexShrink: 1,
	},
	avatar: {
		width: 42,
		height: 42,
		borderRadius: 21,
		backgroundColor: '#E8D7C5',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	avatarText: {
		fontSize: 13,
		fontWeight: '700',
		color: '#7C4F2A',
	},
	workerTextBlock: {
		gap: 2,
	},
	workerName: {
		fontSize: 15,
		fontWeight: '600',
		color: '#222222',
	},
	ratingRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	ratingText: {
		fontSize: 12,
		fontWeight: '600',
		color: '#686868',
	},
	actionRow: {
		flexDirection: 'row',
		gap: 10,
	},
	actionButton: {
		width: 44,
		height: 44,
		borderRadius: 22,
		borderWidth: 2,
		borderColor: '#F6CF6A',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	mapArea: {
		height: 240,
		marginHorizontal: 0,
		marginTop: 0,
		marginBottom: 0,
		overflow: 'hidden',
		backgroundColor: '#EEF0EE',
	},
	mapGrid: {
		flex: 1,
		backgroundColor: '#F6F6F3',
	},
	gridLine: {
		position: 'absolute',
		backgroundColor: '#E0E0DE',
	},
	gridVertical1: {
		left: '18%',
		top: 0,
		width: 1,
		height: '100%',
		opacity: 0.55,
	},
	gridVertical2: {
		left: '44%',
		top: 0,
		width: 1,
		height: '100%',
		opacity: 0.55,
	},
	gridVertical3: {
		left: '70%',
		top: 0,
		width: 1,
		height: '100%',
		opacity: 0.55,
	},
	gridHorizontal1: {
		top: '20%',
		left: 0,
		height: 1,
		width: '100%',
		opacity: 0.55,
	},
	gridHorizontal2: {
		top: '46%',
		left: 0,
		height: 1,
		width: '100%',
		opacity: 0.55,
	},
	gridHorizontal3: {
		top: '72%',
		left: 0,
		height: 1,
		width: '100%',
		opacity: 0.55,
	},
	greenPatchOne: {
		position: 'absolute',
		left: '14%',
		top: '22%',
		width: 34,
		height: 62,
		borderRadius: 4,
		backgroundColor: '#DDECCF',
		transform: [{ rotate: '18deg' }],
		opacity: 0.9,
	},
	greenPatchTwo: {
		position: 'absolute',
		left: '53%',
		top: '34%',
		width: 30,
		height: 74,
		borderRadius: 4,
		backgroundColor: '#DDECCF',
		transform: [{ rotate: '18deg' }],
		opacity: 0.75,
	},
	greenPatchThree: {
		position: 'absolute',
		left: '76%',
		top: '58%',
		width: 28,
		height: 56,
		borderRadius: 4,
		backgroundColor: '#DDECCF',
		transform: [{ rotate: '18deg' }],
		opacity: 0.85,
	},
	routeLabel: {
		position: 'absolute',
		right: '28%',
		top: '22%',
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 12,
		backgroundColor: '#F3D7A2',
		borderWidth: 1,
		borderColor: '#E8BF6E',
		alignItems: 'center',
	},
	routeLabelText: {
		fontSize: 14,
		fontWeight: '700',
		color: '#8A5D08',
		lineHeight: 16,
	},
	routeLabelSubText: {
		fontSize: 12,
		fontWeight: '600',
		color: '#8A5D08',
		lineHeight: 14,
	},
	destinationPin: {
		position: 'absolute',
		right: '23%',
		top: '30%',
	},
	originPin: {
		position: 'absolute',
		left: '11%',
		bottom: '24%',
	},
	routeLineTop: {
		position: 'absolute',
		left: '23%',
		top: '31%',
		width: '36%',
		height: 4,
		backgroundColor: '#F6A800',
		borderRadius: 4,
	},
	routeLineMid: {
		position: 'absolute',
		left: '58%',
		top: '31%',
		width: 4,
		height: '17%',
		backgroundColor: '#F6A800',
		borderRadius: 4,
	},
	routeLineLeft: {
		position: 'absolute',
		left: '23%',
		top: '48%',
		width: '26%',
		height: 4,
		backgroundColor: '#F6A800',
		borderRadius: 4,
	},
	routeLineRight: {
		position: 'absolute',
		left: '49%',
		top: '48%',
		width: 4,
		height: '18%',
		backgroundColor: '#F6A800',
		borderRadius: 4,
	},
	bottomCard: {
		minHeight: 180,
		marginTop: -8,
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 28,
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 14,
		shadowOffset: { width: 0, height: -3 },
		elevation: 6,
	},
	bottomCardTopRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	bottomCardTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#2A2A2A',
	},
	detailRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 14,
	},
	detailLabel: {
		fontSize: 13,
		color: '#8A8A8A',
		marginBottom: 6,
	},
	detailValue: {
		fontSize: 13,
		fontWeight: '700',
		color: '#2F2F2F',
	},
	detailDivider: {
		height: 1,
		backgroundColor: '#EAEAEA',
		marginBottom: 12,
	},
	addressText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#2A2A2A',
		lineHeight: 19,
	},
});
