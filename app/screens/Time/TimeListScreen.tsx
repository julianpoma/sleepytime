import { Container, Button } from '../../components';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import tw from '../../lib/tw';
import { TimeCard } from './components';

const TimeListScreen = () => {
  const cards = [...Array(15).keys()].map(() => (
    <TimeCard
      time="09:00 AM"
      recommended={false}
      sleepCycles="8"
      sleepTime="7:00"
    />
  ));

  return (
    <Container style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          You should try to wake up at one of the following times
        </Text>
      </View>
      <ScrollView style={styles.scroll} centerContent={true}>
        {cards}
      </ScrollView>
      <Button.Primary
        label="Thank you!"
        onPress={() => Alert.alert('Welcome!')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: tw.color.light.gray300 },
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    marginVertical: tw.margin.m4,
    width: '85%',
  },
  title: {
    fontSize: tw.text.lg,
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: tw.margin.m4,
    width: '85%',
  },
});

export default TimeListScreen;
