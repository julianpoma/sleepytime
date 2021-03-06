import React from 'react';
import { IOS, tw } from '../../utils';
import { StyleSheet } from 'react-native';
import BaseButton from './BaseButton';

interface IProps {
  text: string;
  icon?: JSX.Element;
  onPress: React.EventHandler<any>;
  margin?: {
    marginVertical: number;
    marginHorizontal: number;
  };
}

const Primary: React.FC<IProps> = ({ onPress, text, margin, icon }) => (
  <BaseButton
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
    backgroundColor: tw.color.primary,
    borderRadius: tw.borderRadius.full,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: tw.padding.p8,
    paddingVertical: tw.padding.p4,
  },
  text: {
    color: tw.color.gray100,
    fontSize: tw.text.base,
    fontWeight: IOS ? '600' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
  },
});

export default Primary;
