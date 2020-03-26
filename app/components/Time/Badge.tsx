import React from 'react';
import { tw, IOS } from '../../utils';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';

interface IProps {
  text: string;
  style: StyleProp<ViewStyle>;
}

const Badge: React.FC<IProps> = ({ text, style }) => (
  <View style={[styles.badge, style]}>
    <Text style={styles.text}>{text.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: tw.color.light.primary100,
    borderRadius: tw.borderRadius.full,
    paddingHorizontal: tw.padding.p2,
    paddingVertical: tw.padding.p1,
  },
  text: {
    color: tw.color.light.primary600,
    fontSize: tw.text.xs,
    fontWeight: IOS ? '500' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
});

export default Badge;
