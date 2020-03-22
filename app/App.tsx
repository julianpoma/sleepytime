import Main from './screens/Main';
import React from 'react';
import { Error } from './components';

const App: React.FC<{}> = () => (
  <Error.Boundary>
    <Main />
  </Error.Boundary>
);

export default App;
