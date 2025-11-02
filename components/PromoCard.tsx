import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/commonStyles';

export default function PromoCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
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
