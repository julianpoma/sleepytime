import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';
import tw from '../../lib/tw';
import { Button, Container } from '../../components';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getFormattedTime } from '../../services/time';

const TimeScreen = () => {
  const title = 'I want to wake up at:';

  const [showPicker, setShowPicker] = useState(false);
  const [hour, setHour] = useState('7');
  const [minute, setMinute] = useState('30');
  const [ampm, setAmpm] = useState('AM');

  const onPickerConfirm = (date: Date) => {
    const [h, m, am] = getFormattedTime(date);

    setHour(h);
    setMinute(m);
    setAmpm(am);

    setShowPicker(false);
  };

  const onPickerCancel = () => setShowPicker(false);

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.timeBox}
        onPress={() => setShowPicker(!showPicker)}
      >
        <Text style={styles.timeText}>
          {hour}:{minute} {ampm}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        is24Hour={false}
        isVisible={showPicker}
        minuteInterval={5}
        mode="time"
        onConfirm={onPickerConfirm}
        onCancel={onPickerCancel}
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
  datePicker: {
    backgroundColor: tw.color.light.backgrounColor,
    width: '75%',
  },
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
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl,
  },
  timeText: {
    color: tw.color.light.primary900,
    fontSize: tw.text.xl3,
    fontWeight: '600',
  },
});

export default TimeScreen;
