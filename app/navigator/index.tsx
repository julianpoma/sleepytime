import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MainScreen, PowerNapScreen } from '../screens';
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
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
