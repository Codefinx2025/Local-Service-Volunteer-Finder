import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const reviews = [
	{
		name: 'Kyle Wilson',
		date: '12/10/2024',
		title: 'Awesome job!',
	},
	{
		name: 'John Dave',
		date: '02/11/2024',
		title: 'Awesome job!',
	},
	{
		name: 'Nahim Mazin',
		date: '05/11/2024',
		title: 'Awesome job!',
	},
];

export default function WorkerProfileScreen() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.scrollContent}>
				<View style={styles.backgroundTop} />
				<View style={styles.backgroundAccent} />
				<View style={styles.backgroundDotOne} />
				<View style={styles.backgroundDotTwo} />

				<View style={styles.headerRow}>
					<Pressable style={styles.backButton}>
						<Ionicons name="chevron-back" size={22} color="#232323" />
					</Pressable>

					<Pressable style={styles.topPill}>
						<View style={styles.topPillInner} />
					</Pressable>
				</View>

				<View style={styles.avatarWrap}>
					<View style={styles.avatarBackdrop} />
					<Image
						source={require('../../../../assets/images/portfolio.png')}
						style={styles.avatar}
						resizeMode="cover"
					/>
				</View>

				<View style={styles.profileCard}>
					<View style={styles.identityRow}>
						<View style={styles.identityTextWrap}>
							<Text style={styles.name}>Kate Norman</Text>
							<Text style={styles.subtitle}>Pet Care Services</Text>
						</View>
						<View style={styles.locationWrap}>
							<Ionicons name="location-outline" size={13} color="#8B8B8B" />
							<Text style={styles.location}>Wakawella, Galle</Text>
						</View>
					</View>

					<View style={styles.statsRow}>
						<View style={styles.statItem}>
							<Text style={styles.statLabel}>Ratings</Text>
							<View style={styles.ratingRow}>
								<Text style={styles.statValue}>4.8</Text>
								<Ionicons name="star" size={12} color="#F4B400" />
							</View>
						</View>
						<View style={styles.statDivider} />
						<View style={styles.statItem}>
							<Text style={styles.statLabel}>Oders</Text>
							<Text style={styles.statValue}>120</Text>
						</View>
						<View style={styles.statDivider} />
						<View style={styles.statItem}>
							<Text style={styles.statLabel}>Reviews</Text>
							<Text style={styles.statValue}>222</Text>
						</View>
					</View>
				</View>

				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>Description</Text>
					<Text style={styles.descriptionText}>
						As a dedicated pet care provider, I specialize in delivering compassionate and
						reliable services tailored to your furry friends' needs. My expertise includes pet
						sitting, dog walking, grooming, and personalized care routines that ensure your pets
						are happy, healthy, and comfortable. I prioritize understanding each pet's unique
						behavior, preferences, and requirements to create a stress-free experience for both
						pets and owners. Whether it’s daily exercise, feeding, or special attention while
						you’re away, I ensure a caring, safe, and engaging environment your pets will love
					</Text>
				</View>

				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>CV/Resume</Text>
					<View style={styles.resumeRow}>
						<View style={styles.resumeIconBox}>
							<Ionicons name="document-text-outline" size={30} color="#1E1E1E" />
						</View>
						<View style={styles.resumeInfo}>
							<Text style={styles.resumeName}>Kate Norman CV.PDF</Text>
							<Text style={styles.resumeMeta}>PDF Document 1.2MB</Text>
							<Text style={styles.resumeMeta}>Updated on 10 May 2024</Text>
						</View>
						<View style={styles.resumeActions}>
							<Pressable style={styles.downloadButton}>
								<Ionicons name="download-outline" size={14} color="#1E1E1E" />
								<Text style={styles.downloadText}>Download</Text>
							</Pressable>
							<Pressable style={styles.previewButton}>
								<Ionicons name="eye-outline" size={12} color="#1E1E1E" />
								<Text style={styles.previewText}>Preview</Text>
							</Pressable>
						</View>
					</View>

					<View style={styles.verifiedBanner}>
						<View style={styles.checkCircle}>
							<Ionicons name="checkmark" size={14} color="#2EA44F" />
						</View>
						<Text style={styles.verifiedText}>This is verified CV, Uploaded by Kate Norman</Text>
					</View>
				</View>

				<View style={styles.sectionCard}>
					<Text style={styles.sectionTitle}>Reviews</Text>
					{reviews.map((review) => (
						<View key={`${review.name}-${review.date}`} style={styles.reviewRow}>
							<View style={styles.reviewTextWrap}>
								<Text style={styles.reviewName}>{review.name}</Text>
								<Text style={styles.reviewTitle}>{review.title}</Text>
								<View style={styles.starRow}>
									<Ionicons name="star" size={10} color="#F4B400" />
									<Ionicons name="star" size={10} color="#F4B400" />
									<Ionicons name="star" size={10} color="#F4B400" />
									<Ionicons name="star" size={10} color="#F4B400" />
									<Ionicons name="star" size={10} color="#F4B400" />
								</View>
							</View>
							<Text style={styles.reviewDate}>{review.date}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#F7F6F3',
	},
	scrollContent: {
		paddingHorizontal: 14,
		paddingBottom: 24,
	},
	backgroundTop: {
		position: 'absolute',
		top: 8,
		left: 10,
		width: 152,
		height: 152,
		borderRadius: 76,
		backgroundColor: '#F4D7A6',
		opacity: 0.55,
	},
	backgroundAccent: {
		position: 'absolute',
		top: 44,
		right: -18,
		width: 72,
		height: 72,
		borderRadius: 36,
		backgroundColor: '#F5B400',
		opacity: 0.95,
	},
	backgroundDotOne: {
		position: 'absolute',
		top: 18,
		right: 86,
		width: 16,
		height: 16,
		borderRadius: 8,
		backgroundColor: '#EFC64E',
		opacity: 0.55,
	},
	backgroundDotTwo: {
		position: 'absolute',
		top: 64,
		left: 20,
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#FFF0BF',
	},
	headerRow: {
		marginTop: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	backButton: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	topPill: {
		width: 62,
		height: 24,
		borderRadius: 12,
		backgroundColor: '#F5B400',
		marginRight: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	topPillInner: {
		width: 24,
		height: 5,
		borderRadius: 999,
		backgroundColor: '#FFD45F',
	},
	avatarWrap: {
		marginTop: 0,
		alignSelf: 'flex-start',
		marginLeft: 6,
		width: 108,
		height: 108,
	},
	avatarBackdrop: {
		position: 'absolute',
		left: 2,
		top: 4,
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: '#F7D8A8',
		opacity: 0.85,
	},
	avatar: {
		position: 'absolute',
		left: 8,
		top: 0,
		width: 94,
		height: 94,
		borderRadius: 47,
		borderWidth: 3,
		borderColor: '#FFFFFF',
		overflow: 'hidden',
		backgroundColor: '#FFFFFF',
	},
	profileCard: {
		marginTop: -14,
		backgroundColor: '#FFFFFF',
		borderTopLeftRadius: 18,
		borderTopRightRadius: 18,
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
		paddingHorizontal: 14,
		paddingTop: 16,
		paddingBottom: 12,
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 18,
		shadowOffset: { width: 0, height: 8 },
		elevation: 4,
	},
	identityRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		gap: 12,
	},
	identityTextWrap: {
		flex: 1,
	},
	name: {
		fontSize: 22,
		lineHeight: 26,
		fontWeight: '800',
		color: '#1F1F1F',
	},
	subtitle: {
		marginTop: 2,
		fontSize: 12,
		color: '#A0A0A0',
		fontWeight: '500',
	},
	locationWrap: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		paddingTop: 9,
	},
	location: {
		fontSize: 11,
		color: '#8E8E8E',
		fontWeight: '500',
	},
	statsRow: {
		marginTop: 16,
		paddingTop: 14,
		borderTopWidth: 1,
		borderTopColor: '#EDEDED',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	statItem: {
		flex: 1,
		alignItems: 'flex-start',
	},
	statLabel: {
		fontSize: 11,
		color: '#7B7B7B',
		marginBottom: 4,
	},
	statValue: {
		fontSize: 17,
		fontWeight: '800',
		color: '#1D1D1D',
	},
	ratingRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	statDivider: {
		width: 1,
		height: 28,
		backgroundColor: '#E8E8E8',
	},
	sectionCard: {
		marginTop: 10,
		backgroundColor: '#FFFFFF',
		borderRadius: 16,
		paddingHorizontal: 14,
		paddingTop: 12,
		paddingBottom: 14,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 14,
		shadowOffset: { width: 0, height: 6 },
		elevation: 2,
	},
	sectionTitle: {
		fontSize: 14,
		fontWeight: '800',
		color: '#222222',
		marginBottom: 10,
	},
	descriptionText: {
		fontSize: 12,
		lineHeight: 19,
		color: '#5B5B5B',
		textAlign: 'left',
	},
	resumeRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 10,
	},
	resumeIconBox: {
		width: 40,
		height: 40,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#E3E3E3',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	resumeInfo: {
		flex: 1,
		paddingTop: 1,
	},
	resumeName: {
		fontSize: 13,
		fontWeight: '800',
		color: '#272727',
	},
	resumeMeta: {
		fontSize: 10,
		color: '#8B8B8B',
		marginTop: 3,
	},
	resumeActions: {
		alignItems: 'flex-end',
		gap: 8,
	},
	downloadButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#E0B446',
		backgroundColor: '#FFF9E7',
	},
	downloadText: {
		fontSize: 10,
		color: '#1E1E1E',
		fontWeight: '700',
	},
	previewButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	previewText: {
		fontSize: 10,
		color: '#1E1E1E',
		fontWeight: '700',
	},
	verifiedBanner: {
		marginTop: 12,
		borderRadius: 8,
		backgroundColor: '#F7BE16',
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	checkCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: '#FFF0C5',
		alignItems: 'center',
		justifyContent: 'center',
	},
	verifiedText: {
		flex: 1,
		fontSize: 10,
		fontWeight: '700',
		color: '#1F1F1F',
	},
	reviewRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		gap: 12,
		paddingVertical: 9,
	},
	reviewTextWrap: {
		flex: 1,
	},
	reviewName: {
		fontSize: 12,
		fontWeight: '800',
		color: '#292929',
	},
	reviewTitle: {
		marginTop: 2,
		fontSize: 11,
		color: '#6C6C6C',
	},
	starRow: {
		marginTop: 5,
		flexDirection: 'row',
		gap: 3,
	},
	reviewDate: {
		fontSize: 10,
		color: '#A7A7A7',
		paddingTop: 2,
	},
});
