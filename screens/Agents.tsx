import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/commonStyles';

export default function Agents() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Agents')}</Text>
      <Text style={styles.centerSub}>列表 / 详情（占位）</Text>
    </View>
  );
}
