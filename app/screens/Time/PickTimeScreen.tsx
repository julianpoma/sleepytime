import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';
import { Button, Container } from '../../components';
import { getFormattedTime } from '../../services/time';
import { IOS, tw } from '../../utils';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TimeScreen = () => {
  const title = 'I want to wake up at:';

  const [showPicker, setShowPicker] = useState(false);
  const [hour, setHour] = useState('07');
  const [minute, setMinute] = useState('30');
  const [ampm, setAmpm] = useState('AM');

  const onPickerConfirm = (date: Date) => {
    setShowPicker(false);

    const [h, m, am] = getFormattedTime(date);

    setHour(h);
    setMinute(m);
    setAmpm(am);
  };

  const onPickerCancel = () => setShowPicker(false);

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.timeBox}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.timeText}>
          {hour}:{minute} {ampm}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        headerTextIOS="Pick a time"
        is24Hour={false}
        isVisible={showPicker}
        minuteInterval={5}
        mode="time"
        onCancel={onPickerCancel}
        onConfirm={onPickerConfirm}
      />

      <Button.Primary
        margin={{ marginHorizontal: 0, marginVertical: tw.margin.m4 }}
        onPress={() => {}}
        label="Calculate"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: tw.margin.m4,
  },
  timeBox: {
    borderColor: tw.color.light.primary,
    borderRadius: tw.borderRadius.rounded,
    borderWidth: tw.borderWidth.border2,
    paddingHorizontal: tw.padding.p8,
    paddingVertical: tw.padding.p4,
  },
  timeText: {
    color: tw.color.light.primary900,
    fontSize: tw.text.xl4,
    fontWeight: IOS ? '600' : 'bold',
  },
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl,
  },
});

export default TimeScreen;
