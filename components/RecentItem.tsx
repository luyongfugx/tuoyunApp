import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/commonStyles';

export default function RecentItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
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
