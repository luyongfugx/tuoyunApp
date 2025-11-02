import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/commonStyles';
import Card from '../components/Card';
import PromoCard from '../components/PromoCard';
import RecommendItem from '../components/RecommendItem';
import RecentItem from '../components/RecentItem';

export default function Home() {
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
