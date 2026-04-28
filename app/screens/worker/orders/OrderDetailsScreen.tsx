import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const timelineSteps = [
	{ key: 'placed', title: 'Order Placed', detail: 'Apr 28, 2024\n10:30 AM', icon: 'check-circle', active: true },
	{ key: 'pending', title: 'Pending', detail: 'Waiting for your\nacceptance', icon: 'schedule', active: true },
	{ key: 'progress', title: 'In Progress', detail: 'Not started yet', icon: 'work', active: false },
	{ key: 'complete', title: 'Completed', detail: 'Not completed', icon: 'verified', active: false },
];

function SectionCard({ children, style }: { children: React.ReactNode; style?: object }) {
	return <View style={[styles.card, style]}>{children}</View>;
}

function InfoPill({ icon, title, subtitle }: { icon: React.ComponentProps<typeof Ionicons>['name']; title: string; subtitle: string }) {
	return (
		<View style={styles.infoPill}>
			<View style={styles.infoIconCircle}>
				<Ionicons name={icon} size={16} color="#7360F2" />
			</View>
			<View style={{ flex: 1 }}>
				<Text style={styles.infoTitle}>{title}</Text>
				<Text style={styles.infoSubtitle}>{subtitle}</Text>
			</View>
		</View>
	);
}

function TimelineStep({ item, index }: { item: (typeof timelineSteps)[number]; index: number }) {
	const tone = index === 0 ? '#735CF7' : index === 1 ? '#A78BFA' : '#C7CCD8';

	return (
		<View style={styles.timelineStep}>
			<View style={styles.timelineConnectorColumn}>
				{index > 0 ? <View style={[styles.timelineLine, { backgroundColor: index <= 1 ? '#D8D0FF' : '#E7EAF1' }]} /> : <View style={styles.timelineLineSpacer} />}
				<View style={[styles.timelineDot, { borderColor: tone, backgroundColor: item.active ? '#F5F1FF' : '#F1F3F8' }]}>
					<MaterialIcons name={item.icon as never} size={13} color={tone} />
				</View>
				{index < timelineSteps.length - 1 ? <View style={[styles.timelineLine, { backgroundColor: index < 1 ? '#D8D0FF' : '#E7EAF1' }]} /> : <View style={styles.timelineLineSpacer} />}
			</View>
			<View style={styles.timelineTextBlock}>
				<Text style={[styles.timelineTitle, item.active && styles.timelineTitleActive]}>{item.title}</Text>
				<Text style={styles.timelineDetail}>{item.detail}</Text>
			</View>
		</View>
	);
}

function MapPreview() {
	return (
		<View style={styles.mapPreview}>
			<View style={styles.mapRoadThin} />
			<View style={styles.mapRoadBold} />
			<View style={[styles.mapBlock, styles.mapBlockOne]} />
			<View style={[styles.mapBlock, styles.mapBlockTwo]} />
			<View style={[styles.mapBlock, styles.mapBlockThree]} />
			<View style={styles.mapPinShadow} />
			<View style={styles.mapPin}>
				<Ionicons name="location" size={18} color="#7A5DF8" />
			</View>
			<View style={styles.mapMiniCard} />
			<View style={styles.mapMiniCardAlt} />
		</View>
	);
}

export default function OrderDetailsScreen() {
	return (
		<SafeAreaView style={styles.safeArea} edges={['top']}>
			<StatusBar barStyle="dark-content" backgroundColor="#F6F8FD" />
			<View style={[styles.screen, styles.screenTopSpacing]}>
				<ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
					<View style={styles.headerRow}>
						<TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
							<Ionicons name="chevron-back" size={22} color="#1F2430" />
						</TouchableOpacity>
						<Text style={styles.headerTitle}>Order Details</Text>
						<TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
							<Ionicons name="ellipsis-horizontal" size={20} color="#1F2430" />
						</TouchableOpacity>
					</View>

					<SectionCard style={styles.profileCard}>
						<View style={styles.profileRow}>
							<View style={styles.avatarWrap}>
								<View style={styles.avatarBackground}>
									<View style={styles.avatarHair} />
									<View style={styles.avatarFace} />
									<View style={styles.avatarBody} />
									<View style={styles.avatarArms} />
								</View>
								<View style={styles.onlineBadge}>
									<MaterialCommunityIcons name="plus" size={10} color="#fff" />
								</View>
							</View>
							<View style={styles.profileTextBlock}>
								<Text style={styles.profileName}>Jerome Bell</Text>
								<Text style={styles.profileHandle}>@whitefish664</Text>
							</View>
							<TouchableOpacity style={styles.viewProfileButton} activeOpacity={0.85}>
								<Ionicons name="person-circle-outline" size={15} color="#7A5DF8" />
								<Text style={styles.viewProfileText}>View Profile</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.profileMetaRow}>
							<InfoPill icon="location-outline" title="Colombo, Sri Lanka" subtitle="2.5 km away" />
							<View style={styles.metaDivider} />
							<InfoPill icon="chatbubble-outline" title="Message Client" subtitle="Typically replies in 1 hr" />
						</View>
					</SectionCard>

					<SectionCard style={styles.historyCard}>
						<View style={styles.historyLeft}>
							<View style={styles.starBubble}>
								<Ionicons name="star" size={18} color="#7D63F6" />
							</View>
							<View>
								<Text style={styles.cardLabel}>CLIENT HISTORY</Text>
								<Text style={styles.historyValue}>12 Services C</Text>
								<Text style={styles.historyHint}>with you in the past</Text>
							</View>
						</View>
						<View style={styles.ratingBlock}>
							<View style={styles.ratingTopRow}>
								<Text style={styles.ratingValue}>4.8</Text>
								<Ionicons name="star" size={15} color="#F3B21D" />
							</View>
							<Text style={styles.ratingLabel}>Client Rating</Text>
						</View>
					</SectionCard>

					<SectionCard style={styles.serviceCard}>
						<View style={styles.serviceHeader}>
							<View style={styles.serviceIconBox}>
								<Ionicons name="car-sport" size={20} color="#7D63F6" />
							</View>
							<View style={{ flex: 1 }}>
								<Text style={styles.cardLabel}>SERVICE</Text>
								<Text style={styles.serviceTitle}>Vehicle Services</Text>
							</View>
							<View style={styles.pendingBadge}>
								<Text style={styles.pendingText}>Pending</Text>
							</View>
						</View>

						<View style={styles.detailsRow}>
							<View style={styles.detailItem}>
								<View style={styles.detailIconCircle}>
									<Ionicons name="calendar-outline" size={15} color="#9AA3B2" />
								</View>
								<View>
									<Text style={styles.detailLabel}>Date</Text>
									<Text style={styles.detailValue}>Apr 30, 2024</Text>
								</View>
							</View>
							<View style={styles.detailsDivider} />
							<View style={styles.detailItem}>
								<View style={styles.detailIconCircle}>
									<Ionicons name="time-outline" size={15} color="#9AA3B2" />
								</View>
								<View>
									<Text style={styles.detailLabel}>Time</Text>
									<Text style={styles.detailValue}>9:00 AM</Text>
								</View>
							</View>
							<View style={styles.detailsDivider} />
							<View style={styles.detailItem}>
								<View style={styles.detailIconCircle}>
									<Ionicons name="pricetag-outline" size={15} color="#9AA3B2" />
								</View>
								<View>
									<Text style={styles.detailLabel}>Order ID</Text>
									<Text style={styles.detailValue}>#VS-240430</Text>
								</View>
							</View>
						</View>

						<View style={styles.sectionGap}>
							<Text style={styles.sectionTitle}>Job Description</Text>
							<Text style={styles.jobDescription}>
								Complete interior and exterior cleaning of the vehicle. Includes vacuum cleaning, dashboard wiping,
								window cleaning, tire shine and exterior wash. Please bring your own cleaning materials.
							</Text>
							<View style={styles.attachmentsRow}>
								<View style={styles.attachmentsTag}>
									<Ionicons name="paperclip" size={12} color="#7A5DF8" />
									<Text style={styles.attachmentsText}>2 Attachments</Text>
								</View>
								<View style={styles.attachmentsThumbs}>
									<View style={styles.attachThumb}>
										<View style={styles.carThumbBody} />
										<View style={styles.carWheelLeft} />
										<View style={styles.carWheelRight} />
									</View>
									<View style={styles.attachThumbAlt}>
										<View style={styles.carThumbBodyDark} />
										<View style={styles.carWheelLeft} />
										<View style={styles.carWheelRight} />
									</View>
								</View>
							</View>
						</View>
					</SectionCard>

					<SectionCard style={styles.locationCard}>
						<View style={styles.sectionHeaderRow}>
							<View style={styles.sectionHeaderIcon}>
								<Ionicons name="location-outline" size={14} color="#7A5DF8" />
							</View>
							<Text style={styles.sectionTitle}>Location</Text>
						</View>
						<View style={styles.locationRow}>
							<View style={styles.locationTextBlock}>
								<Text style={styles.locationAddress}>No. 45, Park Road,</Text>
								<Text style={styles.locationAddress}>Colombo 05, Sri Lanka</Text>
							</View>
							<MapPreview />
						</View>
					</SectionCard>

					<SectionCard style={styles.paymentCard}>
						<Text style={styles.sectionTitle}>Payment Details</Text>
						<View style={styles.paymentRow}>
							<View style={styles.paymentColumnLeft}>
								<Text style={styles.paymentMiniLabel}>Total Amount</Text>
								<Text style={styles.paymentTotal}>Rs. 3,500.00</Text>
								<View style={styles.paidBadge}>
									<Text style={styles.paidText}>Paid by client</Text>
								</View>
							</View>
							<View style={styles.paymentColumnRight}>
								<View style={styles.amountLine}>
									<Text style={styles.paymentLineLabel}>Service Fee</Text>
									<Text style={styles.paymentLineValue}>Rs. 300.00</Text>
								</View>
								<View style={styles.amountLine}>
									<Text style={styles.paymentLineLabel}>Platform Fee</Text>
									<Text style={styles.paymentLineValue}>Rs. 50.00</Text>
								</View>
								<View style={[styles.amountLine, styles.earnLine]}>
									<Text style={[styles.paymentLineLabel, styles.earnLabel]}>You Will Receive</Text>
									<Text style={styles.earnValue}>Rs. 3,150.00</Text>
								</View>
							</View>
						</View>
					</SectionCard>

					<SectionCard style={styles.timelineCard}>
						<Text style={styles.sectionTitle}>Order Timeline</Text>
						<View style={styles.timelineRow}>
							{timelineSteps.map((item, index) => (
								<TimelineStep key={item.key} item={item} index={index} />
							))}
						</View>
					</SectionCard>
				</ScrollView>

				<View style={styles.bottomActions}>
					<TouchableOpacity style={[styles.actionButton, styles.rejectButton]} activeOpacity={0.85}>
						<Ionicons name="close-circle" size={16} color="#FF6E75" />
						<Text style={[styles.actionText, styles.rejectText]}>Reject</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.actionButton, styles.acceptButton]} activeOpacity={0.9}>
						<Ionicons name="checkmark-circle" size={16} color="#fff" />
						<Text style={[styles.actionText, styles.acceptText]}>Accept Order</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.actionButton, styles.messageButton]} activeOpacity={0.85}>
						<Ionicons name="chatbubble-ellipses" size={16} color="#7A5DF8" />
						<Text style={[styles.actionText, styles.messageText]}>Message</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: '#F6F8FD' },
	screen: { flex: 1, backgroundColor: '#F6F8FD' },
	screenTopSpacing: { paddingTop: 6 },
	content: { paddingHorizontal: 14, paddingTop: 4, paddingBottom: 110 },
	headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
	iconButton: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
	headerTitle: { color: '#1C2430', fontSize: 18, fontWeight: '700', letterSpacing: -0.2 },
	card: {
		backgroundColor: '#FFFFFF', borderRadius: 18, borderWidth: 1, borderColor: '#EAE8FF', padding: 14, marginBottom: 12,
		shadowColor: '#8B93AE', shadowOpacity: Platform.OS === 'ios' ? 0.08 : 0.12, shadowRadius: 12, shadowOffset: { width: 0, height: 6 }, elevation: 2,
	},
	profileCard: { paddingTop: 14 },
	profileRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
	avatarWrap: { width: 54, height: 54, marginRight: 12 },
	avatarBackground: { width: 54, height: 54, borderRadius: 27, backgroundColor: '#F2D5BC', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
	avatarFace: { position: 'absolute', top: 10, width: 20, height: 20, borderRadius: 10, backgroundColor: '#F1B48A' },
	avatarHair: { position: 'absolute', top: 3, width: 28, height: 18, borderTopLeftRadius: 14, borderTopRightRadius: 14, borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: '#7A4D2E' },
	avatarBody: { position: 'absolute', bottom: -4, width: 38, height: 26, borderRadius: 14, backgroundColor: '#F1B48A' },
	avatarArms: { position: 'absolute', bottom: 11, width: 32, height: 12, borderRadius: 10, backgroundColor: '#C5855C', transform: [{ rotate: '-6deg' }] },
	onlineBadge: { position: 'absolute', right: -2, bottom: -2, width: 18, height: 18, borderRadius: 9, backgroundColor: '#7B61FF', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff' },
	profileTextBlock: { flex: 1, marginRight: 10 },
	profileName: { color: '#1D2430', fontSize: 17, fontWeight: '700', marginBottom: 2 },
	profileHandle: { color: '#7E8798', fontSize: 13, fontWeight: '500' },
	viewProfileButton: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, height: 30, borderRadius: 15, backgroundColor: '#F5F1FF' },
	viewProfileText: { color: '#7A5DF8', fontSize: 12, fontWeight: '700' },
	profileMetaRow: { flexDirection: 'row', alignItems: 'stretch', paddingTop: 10, borderTopWidth: 1, borderTopColor: '#F0EDF8' },
	infoPill: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 2 },
	infoIconCircle: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#F6F2FF', alignItems: 'center', justifyContent: 'center' },
	infoTitle: { color: '#1F2732', fontSize: 12, fontWeight: '700', marginBottom: 2 },
	infoSubtitle: { color: '#8A94A5', fontSize: 11, fontWeight: '500' },
	metaDivider: { width: 1, backgroundColor: '#ECE7FB', marginHorizontal: 10 },
	historyCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderColor: '#D8D0FF', backgroundColor: '#FFFFFF', paddingVertical: 12 },
	historyLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, gap: 12 },
	starBubble: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#F3EEFF', alignItems: 'center', justifyContent: 'center' },
	cardLabel: { color: '#9AA2B0', fontSize: 10, fontWeight: '800', letterSpacing: 0.8, marginBottom: 2 },
	historyValue: { color: '#242A35', fontSize: 17, fontWeight: '800', marginBottom: 1 },
	historyHint: { color: '#8B93A4', fontSize: 12, fontWeight: '500' },
	ratingBlock: { alignItems: 'center', justifyContent: 'center', paddingLeft: 14, borderLeftWidth: 1, borderLeftColor: '#EEE8FD', minWidth: 74 },
	ratingTopRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
	ratingValue: { color: '#1F2732', fontSize: 21, fontWeight: '800' },
	ratingLabel: { marginTop: 2, color: '#8A93A3', fontSize: 11, fontWeight: '500' },
	serviceCard: { paddingTop: 12 },
	serviceHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
	serviceIconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F5F1FF', alignItems: 'center', justifyContent: 'center' },
	serviceTitle: { color: '#1D2430', fontSize: 17, fontWeight: '800', marginTop: 2 },
	pendingBadge: { backgroundColor: '#F6E4BC', paddingHorizontal: 11, height: 24, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
	pendingText: { color: '#C2892A', fontSize: 11, fontWeight: '800' },
	detailsRow: { flexDirection: 'row', alignItems: 'stretch', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F1EDF9' },
	detailItem: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 },
	detailIconCircle: { width: 26, height: 26, borderRadius: 13, backgroundColor: '#F5F7FC', alignItems: 'center', justifyContent: 'center' },
	detailLabel: { color: '#9AA2B0', fontSize: 10, fontWeight: '700', marginBottom: 2 },
	detailValue: { color: '#202634', fontSize: 12, fontWeight: '700' },
	detailsDivider: { width: 1, backgroundColor: '#EEEAF8', marginHorizontal: 10 },
	sectionGap: { marginTop: 14 },
	sectionTitle: { color: '#1D2430', fontSize: 14, fontWeight: '800', marginBottom: 8 },
	jobDescription: { color: '#667081', fontSize: 12.5, lineHeight: 19, fontWeight: '500' },
	attachmentsRow: { marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
	attachmentsTag: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#F5F1FF', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 7 },
	attachmentsText: { color: '#7A5DF8', fontSize: 11, fontWeight: '700' },
	attachmentsThumbs: { flexDirection: 'row', gap: 8 },
	attachThumb: { width: 62, height: 46, borderRadius: 11, backgroundColor: '#E4E7EF', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
	attachThumbAlt: { width: 62, height: 46, borderRadius: 11, backgroundColor: '#DADDE5', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
	carThumbBody: { width: 44, height: 16, borderRadius: 9, backgroundColor: '#767D89', marginTop: 6 },
	carThumbBodyDark: { width: 42, height: 15, borderRadius: 9, backgroundColor: '#59626F', marginTop: 6 },
	carWheelLeft: { position: 'absolute', left: 13, bottom: 6, width: 10, height: 10, borderRadius: 5, backgroundColor: '#F8FBFF', borderWidth: 2, borderColor: '#59626F' },
	carWheelRight: { position: 'absolute', right: 13, bottom: 6, width: 10, height: 10, borderRadius: 5, backgroundColor: '#F8FBFF', borderWidth: 2, borderColor: '#59626F' },
	locationCard: { paddingBottom: 12 },
	sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
	sectionHeaderIcon: { width: 18, height: 18, borderRadius: 9, backgroundColor: '#F5F1FF', alignItems: 'center', justifyContent: 'center' },
	locationRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
	locationTextBlock: { flex: 1 },
	locationAddress: { color: '#61707F', fontSize: 12, lineHeight: 18, fontWeight: '500' },
	mapPreview: { width: 126, height: 78, borderRadius: 16, backgroundColor: '#F0F1F4', overflow: 'hidden', position: 'relative' },
	mapRoadThin: { position: 'absolute', left: -6, top: 18, width: 170, height: 3, backgroundColor: '#E1E4EB', transform: [{ rotate: '-11deg' }] },
	mapRoadBold: { position: 'absolute', left: -8, top: 34, width: 165, height: 5, backgroundColor: '#D4DAE6', transform: [{ rotate: '10deg' }] },
	mapBlock: { position: 'absolute', backgroundColor: '#E8EBF2', borderRadius: 8 },
	mapBlockOne: { width: 38, height: 18, left: 11, top: 11 },
	mapBlockTwo: { width: 44, height: 20, right: 12, top: 14 },
	mapBlockThree: { width: 29, height: 14, left: 53, bottom: 12 },
	mapPinShadow: { position: 'absolute', left: 68, top: 31, width: 12, height: 12, borderRadius: 6, backgroundColor: 'rgba(122,93,248,0.15)' },
	mapPin: { position: 'absolute', left: 61, top: 27, width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#7A5DF8', shadowOpacity: 0.18, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 3 },
	mapMiniCard: { position: 'absolute', left: 32, bottom: 16, width: 46, height: 13, borderRadius: 6, backgroundColor: '#E1E4EC' },
	mapMiniCardAlt: { position: 'absolute', right: 18, bottom: 18, width: 20, height: 20, borderRadius: 10, backgroundColor: '#E1E4EC' },
	paymentCard: { paddingBottom: 14 },
	paymentRow: { flexDirection: 'row', marginTop: 4 },
	paymentColumnLeft: { flex: 1, paddingRight: 12 },
	paymentColumnRight: { flex: 1, paddingLeft: 12, borderLeftWidth: 1, borderLeftColor: '#ECE7FB', justifyContent: 'center' },
	paymentMiniLabel: { color: '#9AA2B0', fontSize: 11, fontWeight: '700', marginBottom: 4 },
	paymentTotal: { color: '#1B2130', fontSize: 25, fontWeight: '800', letterSpacing: -0.3, marginBottom: 6 },
	paidBadge: { alignSelf: 'flex-start', backgroundColor: '#EAF8EF', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6 },
	paidText: { color: '#37A054', fontSize: 11, fontWeight: '800' },
	amountLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
	paymentLineLabel: { color: '#6B7482', fontSize: 11, fontWeight: '600' },
	paymentLineValue: { color: '#2B3240', fontSize: 11, fontWeight: '700' },
	earnLine: { marginBottom: 0 },
	earnLabel: { color: '#1C2430', fontWeight: '700' },
	earnValue: { color: '#33A35A', fontSize: 11, fontWeight: '800' },
	timelineCard: { paddingBottom: 14 },
	timelineRow: { flexDirection: 'row', marginTop: 6 },
	timelineStep: { flex: 1, alignItems: 'center' },
	timelineConnectorColumn: { width: '100%', alignItems: 'center' },
	timelineLine: { width: 2, height: 12, borderRadius: 1 },
	timelineLineSpacer: { height: 12 },
	timelineDot: { width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center', marginVertical: 2 },
	timelineTextBlock: { marginTop: 8, alignItems: 'center', paddingHorizontal: 4 },
	timelineTitle: { color: '#9AA2B0', fontSize: 10, fontWeight: '800', textAlign: 'center', marginBottom: 3 },
	timelineTitleActive: { color: '#7A5DF8' },
	timelineDetail: { color: '#7E8798', fontSize: 9, fontWeight: '500', lineHeight: 12, textAlign: 'center' },
	bottomActions: { position: 'absolute', left: 14, right: 14, bottom: 12, flexDirection: 'row', gap: 8 },
	actionButton: { minHeight: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 6, paddingHorizontal: 14 },
	rejectButton: { flex: 0.95, backgroundColor: '#FFF1F2' },
	acceptButton: { flex: 1.2, backgroundColor: '#6F57F5', shadowColor: '#6F57F5', shadowOpacity: 0.18, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 2 },
	messageButton: { flex: 1, backgroundColor: '#F6F1FF' },
	actionText: { fontSize: 12, fontWeight: '800' },
	rejectText: { color: '#FF6E75' },
	acceptText: { color: '#FFFFFF' },
	messageText: { color: '#7A5DF8' },
});
