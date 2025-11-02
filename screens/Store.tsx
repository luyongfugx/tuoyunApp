import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/commonStyles';

export default function Store() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Store')}</Text>
      <Text style={styles.centerSub}>商店占位</Text>
    </View>
  );
}
