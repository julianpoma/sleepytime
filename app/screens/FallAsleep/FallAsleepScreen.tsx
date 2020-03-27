import React from 'react';
import { fallAsleepAt } from '../../services/time';
import { HOUR_12_FORMAT } from '../../utils';
import { RootStackParamList } from '../../types';
import { Time } from '../../components';
import { DateTime } from 'luxon';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'FallAsleepScreen'>;
  route: RouteProp<RootStackParamList, 'FallAsleepScreen'>;
}

const FallAsleepScreen: React.FC<IProps> = ({ navigation, route }) => {
  const title = (
    <>
      A good night's sleep consists of 5-6 complete sleep cycles. You should try
      to <Text style={style.bold}>wake up</Text> at one of the following times:
    </>
  );

  const times = fallAsleepAt(DateTime.fromMillis(route.params.time));

  return (
    <Time.List
      title={title}
      times={times}
      timeFormat={HOUR_12_FORMAT}
      onButtonPress={() => navigation.navigate('Home')}
    />
  );
};

const style = StyleSheet.create({ bold: { fontWeight: 'bold' } });

export default FallAsleepScreen;
