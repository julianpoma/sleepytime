import { Container, Button } from '../../components';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import tw from '../../lib/tw';
import { TimeCard } from './components';

const TimeListScreen = () => {
  const title =
    'If you go to bed now, you should try to wake up at one of the following hours:';

  const cards = [...Array(8).keys()].map(() => (
    <TimeCard
      time="09:00 AM"
      recommended={Math.random() > 0.5}
      sleepCycles="8"
      sleepTime="7:00"
    />
  ));

  return (
    <Container style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView style={styles.scroll}>{cards}</ScrollView>
      <Button.Primary label="Got it!" onPress={() => Alert.alert('Welcome!')} />
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
