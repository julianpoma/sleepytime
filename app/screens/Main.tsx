import React from 'react';
import { Button, Container } from '../components';
import { View, Text, StyleSheet } from 'react-native';
import tw from '../lib/tw';

const Main = () => {
  return (
    <Container>
      <Text style={styles.h1}>I would like to...</Text>
      <View style={styles.options}>
        <Button.Primary
          margin={styles.button}
          label="Wake up at..."
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          label="Fall sleep at..."
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          label="Go to bed now"
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          label="Take a power nap"
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: tw.margin.none,
    marginVertical: tw.margin.m2,
  },
  h1: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl2,
    fontWeight: '600',
    marginBottom: tw.margin.m4,
  },
  options: {
    width: '50%',
  },
});

export default Main;
