import { Container } from '../../components';
import React from 'react';
import { Text, View } from 'react-native';

const TimeListScreen = () => {
  return (
    <Container>
      <Text>You should try to wake up at one of the following times</Text>
      <View>
        <Text>
          07:30 AM
        </Text>
        <Text>
          Recommended
        </Text>
        <Text>
          7 sleep cycles
        </Text>
        <Text>
          6:30 hours of sleep time
        </Text>
      </View>
    </Container>
  );
};

export default TimeListScreen;
