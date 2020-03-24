import React from 'react';
import { Button, Container, Time } from '../../components';
import { powerNap } from '../../services/time';
import { tw, HOUR_12_FORMAT } from '../../utils';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'PowerNap'>;
}

const PowerNapScreen: React.FC<IProps> = ({ navigation }) => {
  const title = 'Wake up at the following time to feel truly rested!';

  const times = powerNap();

  const cards = times.map(t => (
    <Time.Card
      key={t.time.toMillis()}
      time={`${t.time.toFormat(HOUR_12_FORMAT)}`}
      recommended={t.recommended}
      sleepCycles={t.sleepCycles}
      sleepTime={t.sleepTime}
    />
  ));

  return (
    <Container style={styles.container}>
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

export default PowerNapScreen;
