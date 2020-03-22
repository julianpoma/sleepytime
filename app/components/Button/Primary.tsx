import palette from '../../lib/palette';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
} from 'react-native';

interface IProps {
  label: string;
  onPress: React.EventHandler<any>;
  wrapperStyle?: StyleProp<any>;
}

const Primary = ({ onPress, label, wrapperStyle }: IProps) => (
  <View style={wrapperStyle}>
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
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  label: {
    color: palette.light.gray100,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Primary;
