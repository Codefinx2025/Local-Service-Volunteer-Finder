import { Ionicons } from '@expo/vector-icons';
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

const photoUrls = [
	'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
	'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
	'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
];

export default function RateReviewsScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

			<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
				<View style={styles.header}>
					<TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
						<Ionicons name="chevron-back" size={26} color="#1F1F1F" />
					</TouchableOpacity>
					<Text style={styles.headerTitle}>Rate & Review</Text>
					<View style={styles.headerRightSpace} />
				</View>

				<View style={styles.profileBlock}>
					<Image
						source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80' }}
						style={styles.avatar}
					/>
					<Text style={styles.workerName}>Kate Norma</Text>
					<Text style={styles.workerService}>House Cleaning</Text>
				</View>

				<View style={styles.ratingRow}>
					{Array.from({ length: 5 }).map((_, index) => (
						<Ionicons key={String(index)} name="star" size={31} color="#F7B400" style={styles.starIcon} />
					))}
				</View>

				<View style={styles.reviewBox}>
					<Text style={styles.reviewText}>Great service! Very professional and punctual.</Text>
					<Text style={styles.reviewCounter}>42/200</Text>
				</View>

				<Text style={styles.photosLabel}>Add Photos (Optional)</Text>

				<View style={styles.photoRow}>
					{photoUrls.map((uri) => (
						<Image key={uri} source={{ uri }} style={styles.photoThumb} />
					))}

					<TouchableOpacity style={styles.cameraBox}>
						<Ionicons name="camera-outline" size={26} color="#F7B400" />
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.submitButton}>
					<Text style={styles.submitButtonText}>Submit Review</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.skipButton}>
					<Text style={styles.skipButtonText}>Skip</Text>
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
	scrollContent: {
		paddingHorizontal: 12,
		paddingTop: 22,
		paddingBottom: 24,
	},
	header: {
		height: 44,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 12,
	},
	backButton: {
		width: 32,
		height: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 17,
		lineHeight: 21,
		fontWeight: '600',
		color: '#242424',
	},
	headerRightSpace: {
		width: 32,
		height: 32,
	},
	profileBlock: {
		alignItems: 'center',
		marginTop: 6,
	},
	avatar: {
		width: 58,
		height: 58,
		borderRadius: 29,
		marginBottom: 8,
	},
	workerName: {
		fontSize: 14,
		lineHeight: 18,
		fontWeight: '700',
		color: '#2B2B2B',
	},
	workerService: {
		marginTop: 2,
		fontSize: 11,
		lineHeight: 15,
		color: '#6D6D6D',
		fontWeight: '500',
	},
	ratingRow: {
		marginTop: 14,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	starIcon: {
		marginHorizontal: 2,
	},
	reviewBox: {
		marginTop: 14,
		minHeight: 74,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#E8E8E8',
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 14,
		justifyContent: 'space-between',
	},
	reviewText: {
		fontSize: 13,
		lineHeight: 18,
		color: '#2E2E2E',
		fontWeight: '500',
		width: '94%',
	},
	reviewCounter: {
		alignSelf: 'flex-end',
		fontSize: 11,
		lineHeight: 14,
		color: '#A0A0A0',
		fontWeight: '500',
	},
	photosLabel: {
		marginTop: 14,
		marginBottom: 10,
		fontSize: 11,
		lineHeight: 15,
		color: '#2D2D2D',
		fontWeight: '700',
	},
	photoRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	photoThumb: {
		width: 56,
		height: 56,
		borderRadius: 6,
		backgroundColor: '#F3F3F3',
	},
	cameraBox: {
		width: 56,
		height: 56,
		borderRadius: 7,
		borderWidth: 1,
		borderColor: '#E8E8E8',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFFFFF',
	},
	submitButton: {
		marginTop: 22,
		height: 42,
		borderRadius: 6,
		backgroundColor: '#F7B400',
		alignItems: 'center',
		justifyContent: 'center',
	},
	submitButtonText: {
		fontSize: 13,
		lineHeight: 18,
		color: '#FFFFFF',
		fontWeight: '700',
	},
	skipButton: {
		marginTop: 14,
		alignItems: 'center',
		justifyContent: 'center',
	},
	skipButtonText: {
		fontSize: 13,
		lineHeight: 18,
		color: '#F7B400',
		fontWeight: '700',
	},
});
