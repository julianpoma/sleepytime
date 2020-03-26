import React from 'react';
import { tw } from '../../utils';
import { StyleSheet, Text, View } from 'react-native';
import Badge from './Badge';

interface IProps {
  time: string;
  recommended: boolean;
  sleepCycles: number;
  sleepTime: string;
}

const TimeCard: React.FC<IProps> = ({
  time,
  recommended,
  sleepCycles,
  sleepTime,
}) => {
  return (
    <View style={[styles.card]}>
      <View style={styles.cardLeft}>
        <Text style={styles.time}>{time.toUpperCase()}</Text>
        {recommended ? <Badge label="best" style={styles.badge} /> : null}
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.sleepTime}>{sleepTime} hours</Text>
        <Text style={styles.sleepCycles}>{sleepCycles} sleep cycles</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    marginTop: tw.margin.m1,
  },
  card: {
    alignItems: 'center',
    backgroundColor: tw.color.light.gray100,
    borderTopColor: tw.color.light.gray300,
    borderTopWidth: tw.borderWidth.border2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: tw.padding.p4,
    shadowColor: tw.color.light.gray900,
  },
  cardLeft: {
    alignItems: 'flex-start',
  },
  cardRight: {
    alignItems: 'flex-end',
  },
  highlight: {
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
    color: tw.color.light.primary700,
    fontSize: tw.text.xl4,
    marginBottom: tw.margin.none,
  },
});

export default TimeCard;
