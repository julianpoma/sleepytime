import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState, useContext } from 'react';
import { tw } from '../../utils';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  onTimeSelected: Function;
  time: string;
  initialDate?: Date;
}

const TimeScreen: React.FC<IProps> = ({
  initialDate,
  onTimeSelected,
  time,
}) => {
  const { theme } = useContext(ThemeContext);

  const [showPicker, setShowPicker] = useState(false);

  const onPickerConfirm = date => {
    setShowPicker(false);
    onTimeSelected(date);
  };

  const onPickerCancel = () => setShowPicker(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.timeBox, colorTheme[theme].timeBox]}
        onPress={() => setShowPicker(true)}
      >
        <Text style={[styles.timeText, colorTheme[theme].timeText]}>
          {time}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        date={initialDate || new Date()}
        headerTextIOS="Pick a time"
        is24Hour={false}
        isVisible={showPicker}
        minuteInterval={5}
        mode="time"
        onCancel={onPickerCancel}
        onConfirm={onPickerConfirm}
      />
    </>
  );
};

const colorTheme = {
  dark: {
    timeBox: { borderBottomColor: tw.color.light.gray700 },
    timeText: { color: tw.color.light.primary300 },
  },
  light: {
    timeBox: { borderBottomColor: tw.color.light.gray300 },
    timeText: { color: tw.color.light.primary700 },
  },
};

const styles = StyleSheet.create({
  timeBox: {
    borderBottomWidth: tw.borderWidth.border2,
    paddingVertical: tw.padding.p1,
    shadowRadius: 10,
  },
  timeText: {
    fontSize: tw.text.xl5,
  },
});

export default TimeScreen;
