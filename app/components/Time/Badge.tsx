import React, { useContext } from 'react';
import { tw, IOS } from '../../utils';
import { StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  text: string;
  style: StyleProp<ViewStyle>;
}

const Badge: React.FC<IProps> = ({ text, style }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.badge, colorTheme[theme].badge, style]}>
      <Text style={[styles.text, colorTheme[theme].text]}>
        {text.toUpperCase()}
      </Text>
    </View>
  );
};

const colorTheme = {
  dark: {
    badge: {
      backgroundColor: tw.color.gray800,
    },
    text: {
      color: tw.color.primary300,
    },
  },
  light: {
    badge: {
      backgroundColor: tw.color.primary100,
    },
    text: {
      color: tw.color.primary600,
    },
  },
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: tw.color.primary100,
    borderRadius: tw.borderRadius.full,
    paddingHorizontal: tw.padding.p2,
    paddingVertical: tw.padding.p1,
  },
  text: {
    color: tw.color.primary600,
    fontSize: tw.text.xs,
    fontWeight: IOS ? '500' : 'bold',
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
});

export default Badge;
