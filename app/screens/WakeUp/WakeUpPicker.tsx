import React, { useState, useContext } from 'react';
import { Button, Container, Time } from '../../components';
import { HOUR_12_FORMAT, tw } from '../../utils';
import { RootStackParamList } from '../../types';
import { DateTime } from 'luxon';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'WakeUpPicker'>;
}

const WakeUpPicker: React.FC<IProps> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const [time, setTime] = useState(
    DateTime.local().set({ hour: 7, minute: 30 }),
  );

  const onChange = (date: Date) => {
    setTime(DateTime.fromJSDate(date));
  };

  return (
    <Container>
      <View style={styles.header}>
        <Text style={[styles.title, colorTheme[theme].title]}>
          I would like to fall asleep at:
        </Text>
      </View>

      <Time.Picker
        initialDate={time.toJSDate()}
        time={time.toFormat(HOUR_12_FORMAT)}
        onTimeSelected={onChange}
      />

      <Button.Primary
        margin={styles.button}
        onPress={() =>
          navigation.navigate('WakeUpScreen', { time: time.toMillis() })
        }
        text="Calculate"
      />
    </Container>
  );
};

const colorTheme = {
  dark: {
    title: {
      color: tw.color.primary100,
    },
  },
  light: {
    title: {
      color: tw.color.gray900,
    },
  },
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 0, marginVertical: tw.margin.m6 },
  header: {
    marginBottom: tw.margin.m4,
  },
  title: {
    color: tw.color.gray900,
    fontSize: tw.text.xl,
    letterSpacing: tw.letterSpacing.wide,
  },
});

export default WakeUpPicker;
