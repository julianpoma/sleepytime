import React from 'react';
import { View, StyleSheet } from 'react-native';
import palette from '../../lib/palette';

const Container = ({ children }: React.PropsWithChildren<any>) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: palette.light.backgrounColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
