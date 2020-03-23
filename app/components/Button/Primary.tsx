import React from 'react';
import tw from '../../lib/tw';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  label: string;
  onPress: React.EventHandler<any>;
  margin?: {
    marginVertical: number;
    marginHorizontal: number;
  };
}

const Primary = ({ onPress, label, margin }: IProps) => (
  <View style={margin}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    ...tw.defaultButtonShadow,
    backgroundColor: tw.color.light.primary,
    borderRadius: tw.borderRadius.full,
    paddingHorizontal: tw.padding.p8,
    paddingVertical: tw.padding.p4,
  },
  label: {
    color: tw.color.light.gray100,
    fontSize: tw.text.base,
    fontWeight: '600',
  },
});

export default Primary;
