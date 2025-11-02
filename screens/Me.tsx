import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles/commonStyles';

export default function Me() {
  const { t } = useTranslation();
  return (
    <View style={styles.centerScreen}>
      <Text style={styles.centerTitle}>{t('Me')}</Text>
      <Text style={styles.centerSub}>用户资料 / 设置占位</Text>
    </View>
  );
}
