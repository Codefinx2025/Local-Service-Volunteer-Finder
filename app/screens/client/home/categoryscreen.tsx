import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type CategoryItem = {
	id: string;
	title: string;
	subtitle: string;
	icon: keyof typeof Ionicons.glyphMap;
};

const categories: CategoryItem[] = [
	{
		id: 'home-services',
		title: 'Home Services',
		subtitle: 'Your home, our expertise',
		icon: 'game-controller-outline',
	},
	{
		id: 'vehicle-services',
		title: 'Vehicle Services',
		subtitle: 'Drive with confidence, repair with ease',
		icon: 'megaphone-outline',
	},
	{
		id: 'construction',
		title: 'Construction',
		subtitle: 'Building your dreams, brick by brick',
		icon: 'briefcase-outline',
	},
	{
		id: 'pet-care',
		title: 'Pet Care Services',
		subtitle: 'Happy pets, happy life',
		icon: 'musical-notes-outline',
	},
	{
		id: 'it-tech-support',
		title: 'IT & Tech Support',
		subtitle: 'Tech solutions for every need',
		icon: 'tv-outline',
	},
	{
		id: 'cleaning-maintenance',
		title: 'Cleaning & Maintenance',
		subtitle: 'We keep your space spotless',
		icon: 'camera-outline',
	},
	{
		id: 'security-services',
		title: 'Security Services',
		subtitle: 'Safety first, always',
		icon: 'scan-outline',
	},
	{
		id: 'photo-video',
		title: 'Photography & Videography',
		subtitle: 'Capturing moments, creating memories',
		icon: 'calendar-outline',
	},
];

export default function CategoryScreen() {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView style={styles.safeArea} edges={['top']}>
			<StatusBar barStyle="dark-content" backgroundColor="#F3F3F6" />
			<View style={[styles.headerContainer, { paddingTop: insets.top + 8 }]}> 
				<TouchableOpacity accessibilityRole="button" style={styles.backButton}>
					<Ionicons name="chevron-back" size={20} color="#2D2D33" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Service Category</Text>
				<View style={styles.headerSpacer} />
			</View>

			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
				bounces={false}>
				{categories.map((item) => (
					<TouchableOpacity key={item.id} activeOpacity={0.9} style={styles.card}>
						<View style={styles.leadingIconWrap}>
							<Ionicons name={item.icon} size={19} color="#27272A" />
						</View>

						<View style={styles.textBlock}>
							<Text style={styles.cardTitle}>{item.title}</Text>
							<Text style={styles.cardSubtitle}>{item.subtitle}</Text>
						</View>

						<Ionicons name="chevron-forward" size={17} color="#2D2D33" />
					</TouchableOpacity>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#F3F3F6',
	},
	headerContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 14,
		paddingBottom: 10,
	},
	backButton: {
		alignItems: 'center',
		height: 24,
		justifyContent: 'center',
		width: 24,
	},
	headerTitle: {
		color: '#1D1D22',
		fontSize: 20,
		fontWeight: '600',
		letterSpacing: 0.1,
	},
	headerSpacer: {
		width: 24,
	},
	scrollContent: {
		paddingHorizontal: 12,
		paddingTop: 4,
		paddingBottom: 30,
	},
	card: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderColor: '#ECECF1',
		borderRadius: 14,
		borderWidth: 1,
		flexDirection: 'row',
		elevation: 1,
		marginBottom: 10,
		minHeight: 78,
		paddingHorizontal: 14,
		paddingVertical: 14,
		shadowColor: '#17171C',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.06,
		shadowRadius: 6,
	},
	leadingIconWrap: {
		alignItems: 'center',
		backgroundColor: '#F4F4F6',
		borderRadius: 11,
		height: 39,
		justifyContent: 'center',
		marginRight: 11,
		width: 39,
	},
	textBlock: {
		flex: 1,
		paddingRight: 10,
	},
	cardTitle: {
		color: '#17171C',
		fontSize: 21,
		fontWeight: '600',
		lineHeight: 27,
	},
	cardSubtitle: {
		color: '#3E3E46',
		fontSize: 16,
		lineHeight: 21,
		marginTop: 2,
	},
});
