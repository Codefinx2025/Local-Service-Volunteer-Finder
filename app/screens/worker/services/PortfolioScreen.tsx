import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PortfolioScreen() {
	const insets = useSafeAreaInsets();

	return (
		<SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
			<StatusBar barStyle="dark-content" backgroundColor="#FBF8F2" />

			<View style={[styles.topBar, { paddingTop: insets.top + 6 }]}>
				<TouchableOpacity accessibilityRole="button" style={styles.backButton}>
					<Ionicons name="chevron-back" size={22} color="#1D1D21" />
				</TouchableOpacity>
				<View style={styles.topBarSpacer} />
			</View>

			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
				bounces={false}>
				<View style={styles.heroRow}>
					<View style={styles.heroTextBlock}>
						<Text style={styles.heroTitle}>Show clients{`\n`}what you’re{`\n`}<Text style={styles.heroAccent}>great at!</Text></Text>
						<Text style={styles.heroSubtitle}>
							Add a short description of your{`\n`}services, your availability, and{`\n`}any documents.
						</Text>
					</View>

					<View style={styles.heroIllustration}>
						<Image
							source={require('../../../../assets/images/portfolio.png')}
							style={styles.heroImage}
							resizeMode="contain"
						/>
					</View>
				</View>

				<View style={styles.sectionCard}>
					<View style={styles.sectionHeader}>
						<View style={styles.sectionIconCircle}>
							<Ionicons name="person-outline" size={20} color="#FFFFFF" />
						</View>
						<View style={styles.sectionHeaderText}>
							<Text style={styles.sectionTitle}>Tell About You</Text>
							<Text style={styles.sectionSubtitle}>Introduce yourself, your experience,{`\n`}and the services you provide.</Text>
						</View>
					</View>

					<View style={styles.bioInputWrap}>
						<TextInput
							style={styles.bioInput}
							placeholder="Type here..."
							placeholderTextColor="#A5A8B2"
							multiline
							editable={false}
						/>
						<Text style={styles.counter}>0/500</Text>
					</View>
				</View>

				<View style={styles.sectionCard}>
					<View style={styles.sectionHeader}>
						<View style={styles.sectionIconCircle}>
							<Ionicons name="calendar-outline" size={20} color="#FFFFFF" />
						</View>
						<View style={styles.sectionHeaderText}>
							<Text style={styles.sectionTitle}>Your Availability</Text>
							<Text style={styles.sectionSubtitle}>Add the date and time you are available to work.</Text>
						</View>
					</View>

					<View style={styles.formRow}>
						<Text style={styles.formLabel}>Available Date</Text>
						<TouchableOpacity activeOpacity={0.9} style={[styles.fieldBox, styles.dateField]}>
							<Text style={styles.fieldPlaceholder}>Select Date</Text>
							<Ionicons name="calendar-outline" size={18} color="#F5A800" />
						</TouchableOpacity>
					</View>

					<View style={styles.timeRow}>
						<View style={styles.timeColumn}>
							<Text style={styles.formLabel}>Start Time</Text>
							<TouchableOpacity activeOpacity={0.9} style={styles.timeField}>
								<Ionicons name="time-outline" size={16} color="#7D828E" />
								<Text style={styles.timeText}>08:00 AM</Text>
								<Ionicons name="chevron-down" size={16} color="#7D828E" />
							</TouchableOpacity>
						</View>

						<View style={styles.timeSeparator} />

						<View style={styles.timeColumn}>
							<Text style={styles.formLabel}>End Time</Text>
							<TouchableOpacity activeOpacity={0.9} style={styles.timeField}>
								<Ionicons name="time-outline" size={16} color="#7D828E" />
								<Text style={styles.timeText}>05:00 PM</Text>
								<Ionicons name="chevron-down" size={16} color="#7D828E" />
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.infoBanner}>
						<Ionicons name="information-circle-outline" size={16} color="#F7B500" />
						<Text style={styles.infoText}>All times are shown in your local time</Text>
					</View>
				</View>

				<View style={styles.sectionCard}>
					<View style={styles.sectionHeader}>
						<View style={styles.sectionIconCircle}>
							<Ionicons name="cloud-upload-outline" size={20} color="#FFFFFF" />
						</View>
						<View style={styles.sectionHeaderText}>
							<Text style={styles.sectionTitle}>Upload a File</Text>
							<Text style={styles.sectionSubtitle}>Upload documents, certificates, or any file{`\n`}that helps build your profile.</Text>
						</View>
					</View>

					<View style={styles.uploadBox}>
						<Ionicons name="cloud-upload-outline" size={28} color="#8E929D" />
						<Text style={styles.uploadPrompt}>Drag & drop your file here</Text>
						<Text style={styles.uploadOr}>or</Text>
						<TouchableOpacity activeOpacity={0.9} style={styles.chooseButton}>
							<Text style={styles.chooseButtonText}>Choose File</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.fileRow}>
						<View style={styles.fileIconWrap}>
							<View style={styles.fileIconFold} />
							<Text style={styles.fileIconText}>PDF</Text>
						</View>
						<View style={styles.fileTextWrap}>
							<Text style={styles.fileName}>experience_certificate.pdf</Text>
							<Text style={styles.fileMeta}>PDF · 2.4 MB</Text>
						</View>
						<Ionicons name="checkmark-circle" size={22} color="#7BC96F" />
					</View>
				</View>

				<TouchableOpacity activeOpacity={0.9} style={[styles.nextButton, { marginBottom: Math.max(insets.bottom, 10) + 2 }]}>
					<Text style={styles.nextButtonText}>NEXT</Text>
					<Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#FBF8F2',
	},
	topBar: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 16,
		paddingBottom: 10,
	},
	backButton: {
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 20,
		elevation: 2,
		height: 36,
		justifyContent: 'center',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.08,
		shadowRadius: 2,
		width: 36,
	},
	topBarSpacer: {
		flex: 1,
	},
	scrollContent: {
		paddingHorizontal: 14,
		paddingBottom: 18,
	},
	heroRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 12,
	},
	heroTextBlock: {
		flex: 1,
		paddingRight: 8,
	},
	heroTitle: {
		color: '#1B1B1F',
		fontSize: 31,
		lineHeight: 36,
		fontWeight: '800',
		letterSpacing: -0.4,
	},
	heroAccent: {
		color: '#F5A800',
	},
	heroSubtitle: {
		color: '#7C7F88',
		fontSize: 15,
		lineHeight: 20,
		marginTop: 10,
		fontWeight: '400',
	},
	heroIllustration: {
		width: 152,
		height: 164,
		alignItems: 'center',
		justifyContent: 'flex-end',
		overflow: 'visible',
	},
	heroImage: {
		width: 168,
		height: 168,
		marginRight: -2,
	},
	sectionCard: {
		backgroundColor: '#FFFFFF',
		borderColor: '#ECE7DE',
		borderWidth: 1,
		borderRadius: 18,
		padding: 14,
		marginBottom: 11,
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.04,
		shadowRadius: 10,
		elevation: 1,
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 12,
	},
	sectionIconCircle: {
		width: 32,
		height: 32,
		borderRadius: 16,
		backgroundColor: '#F7B500',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
		marginTop: 1,
	},
	sectionHeaderText: {
		flex: 1,
	},
	sectionTitle: {
		color: '#191A1F',
		fontSize: 17,
		lineHeight: 22,
		fontWeight: '800',
	},
	sectionSubtitle: {
		color: '#8C909A',
		fontSize: 12,
		lineHeight: 16,
		marginTop: 2,
	},
	bioInputWrap: {
		borderColor: '#E7E8EE',
		borderWidth: 1,
		borderRadius: 14,
		minHeight: 90,
		paddingHorizontal: 12,
		paddingTop: 12,
		paddingBottom: 8,
		justifyContent: 'space-between',
	},
	bioInput: {
		color: '#1C1D22',
		fontSize: 13,
		lineHeight: 18,
		minHeight: 56,
		padding: 0,
		textAlignVertical: 'top',
	},
	counter: {
		alignSelf: 'flex-end',
		color: '#8D91A0',
		fontSize: 12,
		marginTop: 4,
	},
	formRow: {
		marginTop: 2,
		marginBottom: 12,
	},
	formLabel: {
		color: '#202127',
		fontSize: 13,
		lineHeight: 18,
		fontWeight: '700',
		marginBottom: 8,
	},
	fieldBox: {
		borderColor: '#E3E5EC',
		borderWidth: 1,
		borderRadius: 12,
		minHeight: 44,
		paddingHorizontal: 14,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
	},
	dateField: {
		paddingRight: 12,
	},
	fieldPlaceholder: {
		color: '#A3A7B2',
		fontSize: 13,
	},
	timeRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		marginBottom: 10,
	},
	timeColumn: {
		flex: 1,
	},
	timeSeparator: {
		width: 12,
	},
	timeField: {
		borderColor: '#E3E5EC',
		borderWidth: 1,
		borderRadius: 12,
		minHeight: 44,
		paddingHorizontal: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#FFFFFF',
	},
	timeText: {
		color: '#4F5561',
		fontSize: 13,
		fontWeight: '600',
		flex: 1,
		marginLeft: 8,
	},
	infoBanner: {
		backgroundColor: '#FFF5DE',
		borderRadius: 10,
		minHeight: 36,
		paddingHorizontal: 11,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	infoText: {
		color: '#6D6245',
		fontSize: 12,
		flex: 1,
	},
	uploadBox: {
		borderColor: '#E7E8EE',
		borderStyle: 'dashed',
		borderWidth: 1.5,
		borderRadius: 14,
		minHeight: 94,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 14,
		marginTop: 2,
	},
	uploadPrompt: {
		color: '#727784',
		fontSize: 13,
		marginTop: 6,
		fontWeight: '600',
	},
	uploadOr: {
		color: '#9A9DA7',
		fontSize: 12,
		marginTop: 3,
		marginBottom: 7,
	},
	chooseButton: {
		minWidth: 110,
		minHeight: 30,
		paddingHorizontal: 14,
		borderRadius: 10,
		borderColor: '#F7B500',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF9EA',
	},
	chooseButtonText: {
		color: '#E39F05',
		fontSize: 12,
		fontWeight: '700',
	},
	fileRow: {
		marginTop: 10,
		borderTopColor: '#EEF0F4',
		borderTopWidth: 1,
		paddingTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	fileIconWrap: {
		width: 34,
		height: 38,
		borderRadius: 6,
		backgroundColor: '#FFF3F1',
		borderColor: '#FF4E42',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
		position: 'relative',
	},
	fileIconFold: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 10,
		height: 10,
		borderTopRightRadius: 5,
		backgroundColor: '#FFD0CB',
	},
	fileIconText: {
		color: '#FF3A30',
		fontSize: 8,
		fontWeight: '800',
		marginTop: 16,
	},
	fileTextWrap: {
		flex: 1,
	},
	fileName: {
		color: '#202127',
		fontSize: 12,
		fontWeight: '700',
	},
	fileMeta: {
		color: '#8E929D',
		fontSize: 11,
		marginTop: 2,
	},
	nextButton: {
		minHeight: 50,
		borderRadius: 16,
		backgroundColor: '#F7B500',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 8,
		marginTop: 2,
	},
	nextButtonText: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: '800',
		letterSpacing: 0.7,
	},
});
