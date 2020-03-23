import React from 'react';
import tw from '../lib/tw';
import { Button, Container } from '../components';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const chevron = (
  <AntDesign name="right" size={tw.text.xl} color={tw.color.light.gray100} />
);

const Main = () => {
  return (
    <Container>
      <Text style={styles.h1}>I would like to...</Text>
      <View style={styles.options}>
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Wake up at..."
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Fall sleep at..."
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Go to bed now"
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
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
    width: '70%',
  },
});

export default Main;
