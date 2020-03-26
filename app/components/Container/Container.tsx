import React from 'react';
import { IOS, tw } from '../../utils';
import { SafeAreaView, StyleProp, StyleSheet, ViewStyle } from 'react-native';

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
    backgroundColor: tw.color.light.gray100,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: tw.margin.m4,
  },
});

export default Container;
