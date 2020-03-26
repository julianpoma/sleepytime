import React from 'react';
import { IOS, tw } from '../../utils';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  label: string;
  icon?: JSX.Element;
  onPress: React.EventHandler<any>;
  margin?: {
    marginVertical: number;
    marginHorizontal: number;
  };
}

const Secondary: React.FC<IProps> = ({ onPress, label, margin, icon }) => (
  <View style={margin}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label.toUpperCase()}</Text>
      {icon ? icon : null}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray200,
    borderRadius: tw.borderRadius.full,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: tw.padding.p8,
    paddingVertical: tw.padding.p4,
  },
  text: {
    color: tw.color.light.primary,
    fontSize: tw.text.base,
    fontWeight: IOS ? '600' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
});

export default Secondary;
