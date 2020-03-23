import Main from './screens/Main';
import React from 'react';
import { Error } from './components';
import Time from './screens/Time';

const App: React.FC<{}> = () => (
  <Error.Boundary>
    <Main></Main>
  </Error.Boundary>
);

export default App;
