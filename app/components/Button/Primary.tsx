import palette from '../../lib/palette';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  label: string;
  onPress: React.EventHandler<any>;
}

const Primary = ({ onPress, label }: IProps) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.light.primary,
    borderColor: palette.light.primary,
    borderRadius: 25,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  label: {
    color: palette.light.gray100,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Primary;
