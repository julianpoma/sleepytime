import React from 'react';
import tw from '../../lib/tw';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { isIOS } from '../../lib/utils';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  style,
}) => (
  <SafeAreaView style={StyleSheet.compose(styles.container, style)}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray300,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: isIOS ? 0 : StatusBar.currentHeight,
  },
});

export default Container;
