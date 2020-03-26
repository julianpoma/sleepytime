import React, { useState } from 'react';
import { Button, Container, Time } from '../../components';
import { HOUR_12_FORMAT, tw } from '../../utils';
import { RootStackParamList } from '../../types';
import { DateTime } from 'luxon';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'FallAsleepPicker'>;
}

const FallAsleepPicker: React.FC<IProps> = ({ navigation }) => {
  const [time, setTime] = useState(
    DateTime.local().set({ hour: 7, minute: 30 }),
  );

  const onChange = (date: Date) => {
    setTime(DateTime.fromJSDate(date));
  };

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>I would like to fall asleep at:</Text>
      </View>

      <Time.Picker
        time={time.toFormat(HOUR_12_FORMAT)}
        onTimeSelected={onChange}
      />

      <Button.Primary
        margin={styles.button}
        onPress={() =>
          navigation.navigate('FallAsleepScreen', { time: time.toMillis() })
        }
        label="Calculate"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: 0, marginVertical: tw.margin.m4 },
  header: {
    marginBottom: tw.margin.m4,
  },
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl,
  },
});

export default FallAsleepPicker;
