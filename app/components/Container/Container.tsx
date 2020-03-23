import React from 'react';
import tw from '../../lib/tw';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';

const Container = ({ children, style }: React.PropsWithChildren<any>) => (
  <SafeAreaView style={[styles.container, styles.safeAndroid, style]}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: tw.color.light.backgrounColor,
    flex: 1,
    justifyContent: 'center',
  },
  safeAndroid: {
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Container;
