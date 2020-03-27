import React, { useContext } from 'react';
import { IOS, tw } from '../../utils';
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  style,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, colorTheme[theme], style]}>
      {children}
    </SafeAreaView>
  );
};

const colorTheme = {
  dark: {
    backgroundColor: tw.color.gray900,
  },
  light: {
    backgroundColor: tw.color.gray100,
  },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: tw.margin.m4,
  },
});

export default Container;
