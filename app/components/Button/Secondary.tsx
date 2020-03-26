import BaseButton from './BaseButton';
import React from 'react';
import { IOS, tw } from '../../utils';
import { StyleSheet } from 'react-native';

interface IProps {
  text?: string;
  icon?: JSX.Element;
  onPress: React.EventHandler<any>;
  margin?: {
    marginVertical: number;
    marginHorizontal: number;
  };
}

const Secondary: React.FC<IProps> = ({ onPress, text, margin, icon }) => (
  <BaseButton
    activeOpacity={0.5}
    buttonStyle={styles.button}
    textStyle={styles.text}
    margin={margin}
    onPress={onPress}
    text={text}
    icon={icon}
  />
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
