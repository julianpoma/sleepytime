import Card from './Card';
import React from 'react';
import { Time } from '../../types';
import { tw } from '../../utils';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../Button/index';

interface IProps {
  title: string | JSX.Element;
  timeFormat: string;
  times: Time[];
  reverse?: boolean;
  onButtonPress: React.EventHandler<any>;
}

const List: React.FC<IProps> = ({
  title,
  times,
  timeFormat,
  reverse,
  onButtonPress,
}) => {
  const cards = times.map((t, i) => {
    return (
      <Card
        key={t.time.toMillis()}
        time={`${t.time.toFormat(timeFormat)}`}
        recommended={t.recommended}
        sleepCycles={t.sleepCycles}
        sleepTime={t.sleepTime}
        isLast={reverse ? i + 1 === 1 : times.length === i + 1}
      />
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {reverse ? cards.reverse() : cards}
        <View style={styles.button}>
          <Button.Primary text="Got it!" onPress={onButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: tw.margin.m4,
  },
  safeArea: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray100,
    flex: 1,
    paddingTop: tw.padding.none,
  },
  scroll: { paddingHorizontal: tw.padding.p8 },
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.lg,
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
  titleContainer: {
    marginVertical: tw.margin.m4,
  },
});

export default List;
