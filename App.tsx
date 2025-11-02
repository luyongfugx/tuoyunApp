/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import './i18n';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// i18n is initialized in ./i18n (imports locales)
const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: t('Home') }}
        />
        <Tab.Screen
          name="Agents"
          component={Agents}
          options={{ tabBarLabel: t('Agents') }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{ tabBarLabel: t('Store') }}
        />
        <Tab.Screen
          name="Me"
          component={Me}
          options={{ tabBarLabel: t('Me') }}
        />
      </Tab.Navigator>
    </View>
  );
}

// --- Screens
function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.rowCenter}>
            <Text style={styles.headerIcon}>📟</Text>
            <Text style={styles.headerTitle}>{t('MyDevices')}</Text>
            <Text style={styles.headerChevron}>›</Text>
          </View>
          <TouchableOpacity
            onPress={() => i18n.changeLanguage(lang === 'zh' ? 'en' : 'zh')}
          >
            <Text style={styles.langToggle}>{lang === 'zh' ? 'EN' : '中'}</Text>
          </TouchableOpacity>
        </View>

        {/* Device Card */}
        <View style={styles.sectionPadding}>
          <View style={styles.deviceCard}>
            <View style={styles.rowCenter}>
              <View style={styles.deviceAvatar} />
              <View>
                <Text style={styles.deviceTitle}>AI Pin Pro</Text>
                <Text style={styles.deviceSubtitle}>智能助理</Text>
                <View style={[styles.rowCenter, styles.mt6]}>
                  <View style={styles.onlineDot} />
                  <Text style={styles.onlineText}>{t('Online')}</Text>
                </View>
              </View>
            </View>
            <View style={styles.alignCenter}>
              <Text style={styles.addIcon}>＋</Text>
              <Text style={styles.addLabel}>{t('AddDevice')}</Text>
            </View>
          </View>
        </View>

        {/* Today footprint */}
        <View style={styles.sectionPadding}>
          <View style={styles.infoCard}>
            <View style={styles.infoTop}>
              <Text style={styles.infoSmall}>{t('ThisWeekConvos')}</Text>
              <View style={styles.rowCenter}>
                <Text style={styles.infoSmall}>{t('ParentalSettings')}</Text>
                <Text style={styles.headerChevron}>›</Text>
              </View>
            </View>

            <View style={styles.rowBetweenCenter}>
              <Text style={styles.infoTitle}>{t('TodayFootprints')}</Text>
              <Text style={styles.refreshIcon}>⟳</Text>
            </View>

            <View style={styles.mt12}>
              {/* sample conversation list */}
              <View style={styles.convRow}>
                <Text style={styles.convWho}>我：</Text>
                <Text style={styles.convText}>你好，今天天气怎么样？</Text>
              </View>
              <View style={styles.convRowAlt}>
                <Text style={styles.convWho}>AI Pin Pro设备：</Text>
                <Text style={styles.convTextAlt}>
                  今天天气晴朗，适合出门活动。
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.viewReport}>
              <Text style={styles.viewReportText}>{t('ViewFullReport')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Grid 2x2 */}
        <View style={[styles.grid, styles.sectionPadding]}>
          <Card icon="📟" title={t('Devices')} subtitle="Manage hardware" />
          <Card icon="🤖" title={t('Agents')} subtitle="Explore agents" />
          <Card icon="🕘" title={t('ViewHistory')} subtitle="View history" />
          <Card
            icon="⭐"
            title={t('UnlockFeatures')}
            subtitle="Unlock features"
          />
        </View>

        {/* Carousel area (horizontal scroll) */}
        <View style={styles.sectionPadding}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PromoCard
              title={t('UpgradeVIP')}
              subtitle="Advanced features await."
            />
            <PromoCard
              title={t('NewHolidayAgent')}
              subtitle="Get in the festive spirit."
            />
          </ScrollView>
        </View>

        {/* Recommendations */}
        <Text style={[styles.sectionTitle, styles.mt20]}>
          {t('RecommendedForYou')}
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.pv8}
        >
          <RecommendItem
            title="Travel Assistant"
            subtitle="Your expert for trip planning."
          />
          <RecommendItem
            title="Chef Bot"
            subtitle="Recipes and cooking tips."
          />
          <RecommendItem
            title="Fitness Coach"
            subtitle="Personalized workout plans."
          />
        </ScrollView>

        {/* Recent conversations */}
        <Text style={[styles.sectionTitle, styles.mt20]}>
          {t('RecentConversations')}
        </Text>
        <View style={styles.recentContainer}>
          <RecentItem
            title="Travel Assistant"
            subtitle="Sure, I can help with that. What are the best dates for your trip to Tokyo?"
          />
          <RecentItem
            title="Fitness Coach"
            subtitle="Great workout yesterday! Remember to stretch and hydrate today."
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Agents() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Agents')}</Text>
      <Text style={styles.centerSub}>列表 / 详情（占位）</Text>
    </View>
  );
}

function Store() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Store')}</Text>
      <Text style={styles.centerSub}>商店占位</Text>
    </View>
  );
}

function Me() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Me')}</Text>
      <Text style={styles.centerSub}>用户资料 / 设置占位</Text>
    </View>
  );
}

// --- small UI pieces
function Card({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.smallCard}>
      <Text style={styles.smallCardIcon}>{icon}</Text>
      <View>
        <Text style={styles.smallCardTitle}>{title}</Text>
        <Text style={styles.smallCardSub}>{subtitle}</Text>
      </View>
    </View>
  );
}

function PromoCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View style={styles.promoCard}>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x160.png?text=Promo' }}
        style={styles.promoImage}
      />
      <View style={styles.smallPadding}>
        <Text style={styles.promoTitle}>{title}</Text>
        <Text style={styles.promoSub}>{subtitle}</Text>
      </View>
    </View>
  );
}

function RecommendItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.recommendItem}>
      <View style={styles.recommendAvatar} />
      <Text style={styles.recommendTitle}>{title}</Text>
      <Text style={styles.recommendSub}>{subtitle}</Text>
    </View>
  );
}

function RecentItem({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View style={styles.recentItem}>
      <View style={styles.recentAvatar} />
      <View style={styles.flex1}>
        <Text style={styles.recentTitle}>{title}</Text>
        <Text numberOfLines={1} style={styles.recentSub}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

// --- styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  screen: { flex: 1 },
  header: {
    padding: 16,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerIcon: { fontSize: 22 },
  headerTitle: { fontSize: 16, fontWeight: '700', marginLeft: 8 },
  headerChevron: { color: '#888', marginLeft: 6 },
  langToggle: { color: '#007aff', fontWeight: '600' },

  sectionPadding: { paddingHorizontal: 16, paddingTop: 12 },
  deviceCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deviceAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f2df0d',
    marginRight: 12,
  },
  deviceTitle: { fontWeight: '700', fontSize: 16 },
  deviceSubtitle: { color: '#666', marginTop: 2 },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16a34a',
  },
  onlineText: { color: '#16a34a', marginLeft: 4 },
  addIcon: { fontSize: 24, color: '#666' },
  addLabel: { fontSize: 12, color: '#666' },

  infoCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoSmall: { color: '#666', fontSize: 13 },
  infoTitle: { fontSize: 16, fontWeight: '700' },
  refreshIcon: { fontSize: 18, color: '#777' },
  convRow: { marginTop: 8 },
  convWho: { fontWeight: '700' },
  convText: { color: '#111' },
  convRowAlt: { marginTop: 8 },
  convTextAlt: { color: '#666' },
  viewReport: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    paddingTop: 10,
    alignItems: 'center',
  },
  viewReportText: { color: '#666' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  smallCard: {
    width: '48%',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallCardIcon: { fontSize: 22 },
  smallCardTitle: { fontWeight: '700' },
  smallCardSub: { color: '#666', fontSize: 12 },

  promoCard: {
    width: 260,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
    marginRight: 12,
    overflow: 'hidden',
  },
  promoImage: { width: '100%', height: 140, backgroundColor: '#ccc' },
  promoTitle: { fontWeight: '700' },
  promoSub: { color: '#666', fontSize: 13 },

  sectionTitle: { fontSize: 20, fontWeight: '700', paddingHorizontal: 16 },

  recommendItem: {
    width: 120,
    backgroundColor: '#f7f7f7',
    marginRight: 12,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  recommendAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ddd',
    marginBottom: 8,
  },
  recommendTitle: { fontWeight: '700' },
  recommendSub: { color: '#666', fontSize: 12, textAlign: 'center' },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    marginBottom: 8,
  },
  recentAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ddd',
  },
  recentTitle: { fontWeight: '700' },
  recentSub: { color: '#666' },

  // utility styles
  scrollContent: { paddingBottom: 100 },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  rowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mt6: { marginTop: 6 },
  mt12: { marginTop: 12 },
  mt20: { marginTop: 20 },
  pv8: { paddingVertical: 8 },
  recentContainer: { paddingHorizontal: 16, marginTop: 8, paddingBottom: 40 },
  smallPadding: { padding: 8 },
  alignCenter: { alignItems: 'center' },
  flex1: { flex: 1 },

  tabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
  },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabIcon: { fontSize: 20, color: '#777' },
  tabIconActive: { color: '#f2df0d' },
  tabLabel: { fontSize: 11, color: '#777', marginTop: 4 },
  tabLabelActive: { color: '#333', fontWeight: '700' },

  centerScreen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  centerTitle: { fontSize: 20, fontWeight: '700' },
  centerSub: { color: '#666', marginTop: 8 },
});

export default App;
