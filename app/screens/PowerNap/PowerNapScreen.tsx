import React from 'react';
import { Button, Container, Time } from '../../components';
import { HOUR_12_FORMAT, tw } from '../../utils';
import { powerNap } from '../../services/time';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'PowerNap'>;
}

const PowerNapScreen: React.FC<IProps> = ({ navigation }) => {
  const title =
    "You only need 20 minutes to feel truly rested... and don't forget a bit of sun exposure!";

  const times = powerNap();

  return (
    <Time.List
      title={title}
      times={times}
      timeFormat={HOUR_12_FORMAT}
      onButtonPress={() => navigation.goBack()}
    />
  );
};

export default PowerNapScreen;
