import React from 'react';
import { HOUR_12_FORMAT } from '../../utils';
import { RootStackParamList } from '../../types';
import { Time } from '../../components';
import { toBedRightNow } from '../../services/time';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'SleepNow'>;
}

const SleepNowScreen: React.FC<IProps> = ({ navigation }) => {
  const title = (
    <>
      A good night's sleep consists of 5-6 complete sleep cycles. You should try
      to <Text style={style.bold}>wake up</Text> at one of the following times:
    </>
  );

  const times = toBedRightNow();

  return (
    <Time.List
      title={title}
      times={times}
      timeFormat={HOUR_12_FORMAT}
      onButtonPress={() => navigation.goBack()}
    />
  );
};

const style = StyleSheet.create({ bold: { fontWeight: 'bold' } });

export default SleepNowScreen;
