import ConfigurationScreen from '../screens/Configuration/ConfigurationScreen';
import InfoScreen from '../screens/Configuration/InfoScreen';
import React, { useContext } from 'react';
import WakeUpPicker from '../screens/WakeUp/WakeUpPicker';
import WakeUpScreen from '../screens/WakeUp/WakeUpScreen';
import { IOS, THEME } from '../utils';
import { RootStackParamList } from '../types';
import { ThemeContext } from '../providers/ThemeProvider';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
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
    <Stack.Screen
      name="Configurations"
      component={ConfigurationScreen}
      options={{ title: 'Configuration' }}
    />
    <Stack.Screen
      name="Info"
      component={InfoScreen}
      options={{ title: 'Info' }}
    />
  </Stack.Navigator>
);

export default () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <StatusBar
        barStyle={
          theme === THEME.LIGHT
            ? IOS
              ? 'dark-content'
              : 'default'
            : 'light-content'
        }
      />
      <NavigationContainer
        theme={theme === THEME.LIGHT ? DefaultTheme : DarkTheme}
      >
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};
