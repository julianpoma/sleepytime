import React from 'react';
import { Error } from './components';
import Navigator from './navigator';

const App: React.FC<{}> = () => (
  <Error.Boundary>
    <Navigator />
  </Error.Boundary>
);

export default App;
