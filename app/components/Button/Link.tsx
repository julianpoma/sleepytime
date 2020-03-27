import React from 'react';
import { tw } from '../../utils';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
  onPress: React.EventHandler<any>;
  text: string;
  style?: StyleProp<TextStyle>;
}

const Link: React.FC<IProps> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: tw.color.light.primary,
    fontSize: tw.text.base,
  },
});

export default Link;
