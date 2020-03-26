import React from 'react';
import { tw, IOS } from '../../utils';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';

interface IProps {
  label: string;
  style: StyleProp<ViewStyle>;
}

const Badge: React.FC<IProps> = ({ label, style }) => (
  <View style={[styles.badge, style]}>
    <Text style={styles.label}>{label.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: tw.color.light.gray200,
    borderRadius: tw.borderRadius.full,
    paddingHorizontal: tw.padding.p2,
    paddingVertical: tw.padding.p1,
  },
  label: {
    color: tw.color.light.primary600,
    fontSize: tw.text.xs,
    fontWeight: IOS ? '500' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
});

export default Badge;
