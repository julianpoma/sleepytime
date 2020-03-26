import React from 'react';
import { Button, Container, Time } from '../../components';
import { fallAsleepAt } from '../../services/time';
import { HOUR_12_FORMAT, tw } from '../../utils';
import { RootStackParamList } from '../../types';
import { RouteProp } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DateTime } from 'luxon';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'FallAsleepScreen'>;
  route: RouteProp<RootStackParamList, 'FallAsleepScreen'>;
}

const FallAsleepScreen: React.FC<IProps> = ({ navigation, route }) => {
  const time = DateTime.fromMillis(route.params.time);

  const title =
    "A good night's sleep consists of 5-6 complete sleep cycles. You should try to wake up at one of the following times:";

  const cards = fallAsleepAt(time).map(t => {
    return (
      <Time.Card
        key={t.time.toMillis()}
        time={`${t.time.toFormat(HOUR_12_FORMAT)}`}
        recommended={t.recommended}
        sleepCycles={t.sleepCycles}
        sleepTime={t.sleepTime}
      />
    );
  });

  return (
    <Container>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <ScrollView style={styles.scroll}>{cards}</ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    marginVertical: tw.margin.m4,
    width: '85%',
  },
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.lg,
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: tw.margin.m3,
    width: '85%',
  },
});

export default FallAsleepScreen;
