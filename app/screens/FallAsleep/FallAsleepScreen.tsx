import React from 'react';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'FallAsleepScreen'>;
  route: RouteProp<RootStackParamList, 'FallAsleepScreen'>;
}

const FallAsleepScreen: React.FC<IProps> = ({ navigation, route }) => {
  return <Text>Holi</Text>;
};

export default FallAsleepScreen;
