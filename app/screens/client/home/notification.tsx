import { Ionicons } from '@expo/vector-icons';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BottomItem = {
	id: string;
	label: string;
	icon: keyof typeof Ionicons.glyphMap;
	active?: boolean;
};

const bottomItems: BottomItem[] = [
	{ id: 'home', label: 'Home', icon: 'home-outline', active: true },
	{ id: 'search', label: 'Search', icon: 'search-outline' },
	{ id: 'discover', label: 'Discover', icon: 'compass-outline' },
	{ id: 'orders', label: 'Orders', icon: 'clipboard-outline' },
	{ id: 'profile', label: 'Profile', icon: 'person-outline' },
];

export default function NotificationScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
			<StatusBar barStyle="dark-content" backgroundColor="#F8F8FA" />

			<View style={styles.header}>
				<TouchableOpacity accessibilityRole="button" style={styles.headerIconButton}>
					<Ionicons name="chevron-back" size={20} color="#232530" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Notification</Text>
				<TouchableOpacity accessibilityRole="button" style={styles.headerIconButton}>
					<Ionicons name="ellipsis-vertical" size={18} color="#4C5473" />
				</TouchableOpacity>
			</View>

			<View style={styles.content}>
				<View style={styles.highlightCard}>
					<Text style={styles.highlightTitle}>● Request Accepted !</Text>
					<Text style={styles.highlightBody}>
						<Text style={styles.highlightStrong}>John Sammit </Text>
						has accepted your request{`\n`}for <Text style={styles.highlightStrong}>Car Repair Service</Text>
					</Text>
					<View style={styles.highlightFooter}>
						<View style={styles.timeWrap}>
							<Ionicons name="time-outline" size={13} color="#FFECBA" />
							<Text style={styles.highlightTime}>10h ago</Text>
						</View>
						<Text style={styles.markReadText}>Mark as read</Text>
					</View>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Complete your profile</Text>
					<Text style={styles.cardBody}>Please verify your profile information to{`\n`}continue using this app</Text>
					<View style={styles.timeWrap}>
						<Ionicons name="time-outline" size={13} color="#9CA0AB" />
						<Text style={styles.cardTime}>4 June</Text>
					</View>
				</View>

				<View style={styles.card}>
					<Text style={styles.cardTitle}>Request Accepted</Text>
					<Text style={styles.cardBody}>John Sammit has accepted your request{`\n`}for Car Repair Service</Text>
					<View style={styles.timeWrap}>
						<Ionicons name="time-outline" size={13} color="#9CA0AB" />
						<Text style={styles.cardTime}>3 June</Text>
					</View>
				</View>
			</View>

			<View style={styles.bottomBar}>
				{bottomItems.map((item) => (
					<TouchableOpacity key={item.id} accessibilityRole="button" style={styles.bottomItem}>
						<Ionicons
							name={item.icon}
							size={20}
							color={item.active ? '#4E5B8A' : '#A0A2AB'}
						/>
						<Text style={[styles.bottomLabel, item.active && styles.bottomLabelActive]}>{item.label}</Text>
					</TouchableOpacity>
				))}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#F8F8FA',
	},
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 12,
		paddingTop: 4,
		paddingBottom: 12,
	},
	headerIconButton: {
		alignItems: 'center',
		height: 28,
		justifyContent: 'center',
		width: 28,
	},
	headerTitle: {
		color: '#16171D',
		fontSize: 31,
		fontWeight: '600',
		letterSpacing: 0.1,
	},
	content: {
		flex: 1,
		paddingHorizontal: 14,
		paddingTop: 8,
		gap: 10,
	},
	highlightCard: {
		backgroundColor: '#F9B500',
		borderRadius: 12,
		minHeight: 122,
		paddingHorizontal: 16,
		paddingTop: 14,
		paddingBottom: 12,
	},
	highlightTitle: {
		color: '#FFFFFF',
		fontSize: 29,
		fontWeight: '700',
		lineHeight: 33,
	},
	highlightBody: {
		color: '#FFFFFF',
		fontSize: 17,
		fontWeight: '500',
		lineHeight: 25,
		marginTop: 6,
	},
	highlightStrong: {
		fontWeight: '700',
	},
	highlightFooter: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 9,
	},
	markReadText: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: '500',
	},
	card: {
		backgroundColor: '#FFFFFF',
		borderColor: '#EDEDF1',
		borderRadius: 12,
		borderWidth: 1,
		minHeight: 108,
		paddingHorizontal: 16,
		paddingTop: 14,
		paddingBottom: 12,
	},
	cardTitle: {
		color: '#202128',
		fontSize: 28,
		fontWeight: '500',
		lineHeight: 33,
	},
	cardBody: {
		color: '#52545F',
		fontSize: 15,
		fontWeight: '400',
		lineHeight: 21,
		marginTop: 5,
	},
	timeWrap: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 5,
		marginTop: 9,
	},
	highlightTime: {
		color: '#FFECBA',
		fontSize: 14,
		fontWeight: '400',
	},
	cardTime: {
		color: '#8F939E',
		fontSize: 14,
		fontWeight: '400',
	},
	bottomBar: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderTopColor: '#E6E8EF',
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		minHeight: 72,
		paddingHorizontal: 12,
		paddingTop: 8,
		paddingBottom: 12,
	},
	bottomItem: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		gap: 3,
	},
	bottomLabel: {
		color: '#A0A2AB',
		fontSize: 11,
		fontWeight: '500',
	},
	bottomLabelActive: {
		color: '#4E5B8A',
	},
});
