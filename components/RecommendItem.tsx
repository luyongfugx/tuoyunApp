import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/commonStyles';

export default function RecommendItem({
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
