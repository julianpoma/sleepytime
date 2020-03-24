import React from 'react';
import { Error } from './components';
import { MainScreen, PowerNapScreen } from './screens';
import { Stack } from './navigator';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC<{}> = () => (
  <Error.Boundary>
    <NavigationContainer>
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
    </NavigationContainer>
  </Error.Boundary>
);

export default App;
