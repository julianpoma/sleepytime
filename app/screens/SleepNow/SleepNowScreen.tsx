import React from 'react';
import { Button, Container, Time } from '../../components';
import { HOUR_12_FORMAT, tw } from '../../utils';
import { RootStackParamList } from '../../types';
import { toBedRightNow } from '../../services/time';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'SleepNow'>;
}

const SleepNowScreen: React.FC<IProps> = ({ navigation }) => {
  const title =
    "If you head to bed right now, you should try to wake up at one of the following times:";

  const cards = toBedRightNow().map(t => {
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
      <Button.Primary
        label="Got it!"
        onPress={() => navigation.navigate('Home')}
      />
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

export default SleepNowScreen;
