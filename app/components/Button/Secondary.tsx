import BaseButton from './BaseButton';
import React, { useContext } from 'react';
import { IOS, tw } from '../../utils';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  text?: string;
  icon?: JSX.Element;
  onPress: React.EventHandler<any>;
  margin?: {
    marginVertical: number;
    marginHorizontal: number;
  };
}

const Secondary: React.FC<IProps> = ({ onPress, text, margin, icon }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BaseButton
      activeOpacity={0.5}
      buttonStyle={[styles.button, colorTheme[theme]]}
      textStyle={styles.text}
      margin={margin}
      onPress={onPress}
      text={text}
      icon={icon}
    />
  );
};

const colorTheme = {
  dark: {
    backgroundColor: tw.color.gray800,
  },
  light: {
    backgroundColor: tw.color.gray200,
  },
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: tw.borderRadius.full,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: tw.padding.p8,
    paddingVertical: tw.padding.p4,
  },
  text: {
    color: tw.color.primary,
    fontSize: tw.text.base,
    fontWeight: IOS ? '600' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
});

export default Secondary;
