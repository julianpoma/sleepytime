import React, { useState } from 'react';
import { Container, Time, Button } from '../../components';
import { tw } from '../../utils';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';
import { formatTime } from '../../services/time';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'FallAsleepPicker'>;
}

const FallAsleepPicker: React.FC<IProps> = () => {
  const [time, setTime] = useState('07:30 AM');

  const onChange = (date: Date) => setTime(formatTime(date));

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>I would like to fall asleep at:</Text>
      </View>

      <Time.Picker time={time} onTimeSelected={onChange} />

      <Button.Primary
        margin={styles.button}
        onPress={() => {}}
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
