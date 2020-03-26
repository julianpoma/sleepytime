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
  const title =
    "You only need 20 minutes to feel truly rested! And don't forget a bit of sun exposure.\n\nWake up at:";

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

export default PowerNapScreen;
