import React from 'react';
import tw from '../../../lib/tw';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  time: string;
  recommended: boolean;
  sleepCycles: string;
  sleepTime: string;
}

const TimeCard = ({ time, recommended, sleepCycles, sleepTime }: IProps) => {
  const cardStyle = [styles.card];

  if (recommended) {
    cardStyle.push(styles.highlighted as any);
  }

  return (
    <View style={cardStyle}>
      <View style={styles.cardLeft}>
        <Text style={styles.time}>{time.toUpperCase()}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.sleepTime}>{sleepTime} hours</Text>
        <Text style={styles.sleepCycles}>{sleepCycles} sleep cycles</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray100,
    borderColor: tw.color.light.gray100,
    borderRadius: tw.borderRadius.rounded,
    borderWidth: tw.borderWidth.border2,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: tw.margin.m2,
    paddingHorizontal: tw.padding.p4,
    paddingVertical: tw.padding.p3,
    shadowColor: tw.color.light.gray900,
    shadowOffset: {
      height: 3,
      width: 1,
    },
    shadowOpacity: 0.1,
  },
  cardLeft: {
    alignItems: 'flex-start',
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  highlighted: {
    borderColor: tw.color.light.primary400,
  },
  sleepCycles: {
    color: tw.color.light.gray600,
    fontSize: tw.text.sm,
  },
  sleepTime: {
    color: tw.color.light.gray600,
    fontSize: tw.text.sm,
    marginBottom: tw.margin.m1,
  },
  time: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl3,
    marginBottom: tw.margin.m1,
  },
});

export default TimeCard;
