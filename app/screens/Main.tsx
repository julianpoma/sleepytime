import React from 'react';
import { Button, Container } from '../components';
import { View, Text, StyleSheet } from 'react-native';
import palette from '../lib/palette';

const Main = () => {
  return (
    <Container>
      <Text style={styles.h1}>I would like to...</Text>
      <View style={styles.options}>
        <Button.Primary
          wrapperStyle={styles.button}
          label="Wake up at..."
          onPress={() => {}}
        />
        <Button.Primary
          wrapperStyle={styles.button}
          label="Fall sleep at..."
          onPress={() => {}}
        />
        <Button.Primary
          wrapperStyle={styles.button}
          label="Go to bed now"
          onPress={() => {}}
        />
        <Button.Primary
          wrapperStyle={styles.button}
          label="Take a power nap"
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 7,
  },
  h1: {
    color: palette.light.gray900,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 7,
  },
  options: {
    width: '50%',
  },
});

export default Main;
