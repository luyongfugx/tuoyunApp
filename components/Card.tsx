import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/commonStyles';

export default function Card({
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
