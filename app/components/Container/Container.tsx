import React from 'react';
import tw from '../../lib/tw';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }: React.PropsWithChildren<any>) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: tw.color.light.backgrounColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
