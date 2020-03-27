import Card from './Card';
import React, { useContext } from 'react';
import { Time } from '../../types';
import { tw } from '../../utils';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../Button/index';
import { ThemeContext } from '../../providers/ThemeProvider';

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
  const { theme } = useContext(ThemeContext);

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
    <SafeAreaView style={[styles.safeArea, colorTheme[theme].safeArea]}>
      <ScrollView style={styles.scroll}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, colorTheme[theme].title]}>{title}</Text>
        </View>
        {reverse ? cards.reverse() : cards}
        <View style={styles.button}>
          <Button.Primary text="Got it!" onPress={onButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const colorTheme = {
  dark: {
    safeArea: { backgroundColor: tw.color.gray900 },
    title: { color: tw.color.primary100 },
  },
  light: {
    safeArea: { backgroundColor: tw.color.gray100 },
    title: { color: tw.color.gray900 },
  },
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: tw.margin.m4,
  },
  safeArea: {
    alignItems: 'center',
    flex: 1,
    paddingTop: tw.padding.none,
  },
  scroll: { paddingHorizontal: tw.padding.p8 },
  title: {
    fontSize: tw.text.lg,
    letterSpacing: tw.letterSpacing.wide,
    textAlign: 'center',
  },
  titleContainer: {
    marginVertical: tw.margin.m4,
  },
});

export default List;
