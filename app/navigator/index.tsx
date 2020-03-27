import React from 'react';
import WakeUpPicker from '../screens/WakeUp/WakeUpPicker';
import WakeUpScreen from '../screens/WakeUp/WakeUpScreen';
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
      options={{ title: 'Power nap' }}
    />
    <Stack.Screen
      name="SleepNow"
      component={SleepNowScreen}
      options={{ title: 'Go to bed now' }}
    />
    <Stack.Screen
      name="FallAsleepPicker"
      component={FallAsleepPicker}
      options={{ title: 'Pick a time' }}
    />
    <Stack.Screen
      name="FallAsleepScreen"
      component={FallAsleepScreen}
      options={{ title: 'Fall asleep' }}
    />
    <Stack.Screen
      name="WakeUpPicker"
      component={WakeUpPicker}
      options={{ title: 'Pick a time' }}
    />
    <Stack.Screen
      name="WakeUpScreen"
      component={WakeUpScreen}
      options={{ title: 'Fall asleep' }}
    />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
