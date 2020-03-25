import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MainScreen, PowerNapScreen, SleepNowScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={MainScreen}
      options={{ title: 'Sleepyti.me' }}
    />
    <Stack.Screen
      name="PowerNap"
      component={PowerNapScreen}
      options={{ title: 'Power Nap' }}
    />
    <Stack.Screen
      name="SleepNow"
      component={SleepNowScreen}
      options={{ title: 'Go to bed now' }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
