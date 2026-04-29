import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

type CategoryItem = {
  id: string;
  title: string;
  subtitle: string;
};

const iconMap: Record<string, keyof typeof FontAwesome5.glyphMap> = {
  'home-services': 'home',
  'vehicle-services': 'car',
  construction: 'hammer',
  'pet-care': 'paw',
  'it-tech-support': 'laptop',
  'cleaning-maintenance': 'broom',
  'security-services': 'shield-alt',
  'photo-video': 'camera',
};

const categories: CategoryItem[] = [
  { id: 'home-services', title: 'Home Services', subtitle: 'Your home, our expertise' },
  { id: 'vehicle-services', title: 'Vehicle Services', subtitle: 'Drive with confidence, repair with ease' },
  { id: 'construction', title: 'Construction', subtitle: 'Building your dreams, brick by brick' },
  { id: 'pet-care', title: 'Pet Care Services', subtitle: 'Happy pets, happy life' },
  { id: 'it-tech-support', title: 'IT & Tech Support', subtitle: 'Tech solutions for every need' },
  { id: 'cleaning-maintenance', title: 'Cleaning & Maintenance', subtitle: 'We keep your space spotless' },
  { id: 'security-services', title: 'Security Services', subtitle: 'Safety first, always' },
  { id: 'photo-video', title: 'Photography & Videography', subtitle: 'Capturing moments, creating memories' },
];

export default function ServiceCategoriesPage() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEF1F7" />

      {/* HEADER */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn}>
          <BlurView intensity={60} tint="light" style={styles.backBlur}>
            <Ionicons name="chevron-back" size={20} color="#222" />
          </BlurView>
        </TouchableOpacity>

        {/* Title Section */}
        <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>Service Category</Text>

        {/* Accent (line + dot) */}
        <View style={styles.accentWrapper}>
            <View style={styles.accentLine} />
            <View style={styles.accentDot} />
        </View>

        <Text style={styles.headerSubtitle}>
            Explore our wide range of services{'\n'}tailored to your needs
        </Text>
        </View>

        <View style={{ width: 40 }} />
      </View>

      {/* LIST */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {categories.map((item) => {
          const iconName = iconMap[item.id] || 'question-circle';

          return (
            <TouchableOpacity key={item.id} activeOpacity={0.9} style={styles.card}>
              
              {/* ICON */}
              <BlurView intensity={90} tint="light" style={styles.glassCard}>
                <View style={styles.innerGlow}>
                  <View style={styles.iconWrapper}>
                    
                    <FontAwesome5
                      name={iconName}
                      size={24}
                      color="#000"
                      style={styles.outlineIcon}
                    />

                    <FontAwesome5
                      name={iconName}
                      size={18}
                      color="#FFB700"
                    />

                  </View>
                </View>
              </BlurView>

              {/* TEXT */}
              <View style={styles.textBlock}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>

              {/* ARROW */}
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF1F7',
  },

  /* HEADER */
  header: {
  paddingHorizontal: 20,
  paddingBottom: 20,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: -20,
},

headerCenter: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},

headerTitle: {
  fontSize: 24,
  fontWeight: '700',
  color: '#111827',
  letterSpacing: 0.3,
},

/* NEW ACCENT STYLE */
accentWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 8,
},

accentLine: {
  width: 40,
  height: 3,
  borderRadius: 2,
  backgroundColor: '#FFB700',
},

accentDot: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#FFB700',
  marginLeft: 6,
},

headerSubtitle: {
  fontSize: 14,
  color: '#6B7280',
  textAlign: 'center',
  lineHeight: 20,
},

backBtn: {
  position: 'absolute',
  left: 20,
  top: 38,
  zIndex: 10,
},

backBlur: {
  width: 40,
  height: 40,
  borderRadius: 8, // 👈 makes it a perfect circle
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.6)',
  overflow: 'hidden', // 👈 important for BlurView
},



  headerLine: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFB700',
    marginVertical: 6,
  },



  /* LIST */
  scroll: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,

    backgroundColor: 'rgba(255,255,255,0.7)',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },

  /* ICON */
  glassCard: {
    width: 58,
    height: 58,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',

    marginRight: 14,
  },

  innerGlow: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  outlineIcon: {
    position: 'absolute',
  },

  /* TEXT */
  textBlock: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 3,
  },
});