import React, { Component } from 'react';
import { Error } from './components';
import Navigator from './navigator';
import { ThemeContext } from './providers/ThemeProvider';

interface IState {
  theme: string;
  toggleTheme: Function;
}

class App extends Component<{}, IState> {
  public toggle: Function;
  public state: any;

  constructor(props) {
    super(props);

    this.toggle = () => {
      this.setState(state => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }));
    };

    this.state = {
      theme: 'light',
      toggleTheme: this.toggle,
    };
  }

  render() {
    return (
      <Error.Boundary>
        <ThemeContext.Provider value={this.state}>
          <Navigator />
        </ThemeContext.Provider>
      </Error.Boundary>
    );
  }
}

export default App;
