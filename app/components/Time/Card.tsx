import React, { useContext } from 'react';
import { tw } from '../../utils';
import { StyleSheet, Text, View } from 'react-native';
import Badge from './Badge';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  isLast: boolean;
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
  isLast,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.card,
        colorTheme[theme].card,
        isLast ? colorTheme[theme].last : null,
      ]}
    >
      <View style={styles.cardLeft}>
        <Text style={[styles.time, colorTheme[theme].time]}>
          {time.toUpperCase()}
        </Text>
        {recommended ? <Badge text="best" style={styles.badge} /> : null}
      </View>
      <View style={styles.cardRight}>
        <Text style={[styles.sleepTime, colorTheme[theme].sleepTime]}>
          {sleepTime} hours
        </Text>
        <Text style={[styles.sleepCycles, colorTheme[theme].sleepCycles]}>
          {sleepCycles} sleep cycles
        </Text>
      </View>
    </View>
  );
};

const colorTheme = {
  dark: {
    card: {
      backgroundColor: tw.color.light.gray900,
      borderTopColor: tw.color.light.gray700,
    },
    last: {
      borderBottomColor: tw.color.light.gray700,
      borderBottomWidth: tw.borderWidth.border2,
    },
    sleepCycles: {
      color: tw.color.light.gray500,
    },
    sleepTime: {
      color: tw.color.light.gray500,
    },
    time: {
      color: tw.color.light.primary300,
    },
  },
  light: {
    card: {
      backgroundColor: tw.color.light.gray100,
      borderTopColor: tw.color.light.gray300,
    },
    last: {
      borderBottomColor: tw.color.light.gray300,
      borderBottomWidth: tw.borderWidth.border2,
    },
    sleepCycles: {
      color: tw.color.light.gray600,
    },
    sleepTime: {
      color: tw.color.light.gray600,
    },
    time: {
      color: tw.color.light.primary700,
    },
  },
};

const styles = StyleSheet.create({
  badge: {
    marginTop: tw.margin.m1,
  },
  card: {
    alignItems: 'center',
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
  sleepCycles: {
    fontSize: tw.text.sm,
  },
  sleepTime: {
    fontSize: tw.text.sm,
    marginBottom: tw.margin.m1,
  },
  time: {
    fontSize: tw.text.xl4,
    marginBottom: tw.margin.none,
  },
});

export default TimeCard;
