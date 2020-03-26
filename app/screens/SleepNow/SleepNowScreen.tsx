import React from 'react';
import { HOUR_12_FORMAT } from '../../utils';
import { RootStackParamList } from '../../types';
import { Time } from '../../components';
import { toBedRightNow } from '../../services/time';
import { StackNavigationProp } from '@react-navigation/stack';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'SleepNow'>;
}

const SleepNowScreen: React.FC<IProps> = ({}) => {
  const title =
    'If you head to bed right now, you should try to wake up at one of the following times:';

  const times = toBedRightNow();

  return <Time.List title={title} times={times} timeFormat={HOUR_12_FORMAT} />;
};

export default SleepNowScreen;
