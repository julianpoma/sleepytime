import React from 'react';
import { RootStackParamList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  MainScreen,
  PowerNapScreen,
  SleepNowScreen,
  FallAsleepPicker,
  FallAsleepScreen,
} from '../screens';

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
    <Stack.Screen
      name="FallAsleepPicker"
      component={FallAsleepPicker}
      options={{ title: 'Fall asleep at...' }}
    />
    <Stack.Screen
      name="FallAsleepScreen"
      component={FallAsleepScreen}
      options={{ title: 'Fall asleep at...' }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
