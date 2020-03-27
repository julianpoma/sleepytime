import React from 'react';
import { HOUR_12_FORMAT } from '../../utils';
import { RootStackParamList } from '../../types';
import { Time } from '../../components';
import { WakeUpAt } from '../../services/time';
import { DateTime } from 'luxon';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'WakeUpScreen'>;
  route: RouteProp<RootStackParamList, 'WakeUpScreen'>;
}

const WakeUpScreen: React.FC<IProps> = ({ navigation, route }) => {
  const title = (
    <>
      You should try <Text style={styles.bold}>fall asleep</Text> at one of the
      following times:
    </>
  );

  const times = WakeUpAt(DateTime.fromMillis(route.params.time));

  return (
    <Time.List
      title={title}
      times={times}
      timeFormat={HOUR_12_FORMAT}
      reverse={true}
      onButtonPress={() => navigation.navigate('Home')}
    />
  );
};

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold' },
});

export default WakeUpScreen;
