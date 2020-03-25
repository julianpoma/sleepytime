import React from 'react';
import { IOS, tw } from '../../utils';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  style,
}) => <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray300,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
