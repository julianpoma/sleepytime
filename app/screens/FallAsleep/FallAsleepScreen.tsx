import React from 'react';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'PowerNap'>;
}

const FallAsleepScreen: React.FC<IProps> = () => {
  return <Text>Holi</Text>;
};

export default FallAsleepScreen;
