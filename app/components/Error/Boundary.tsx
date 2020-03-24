/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { Text } from 'react-native';

interface IState {
  hasError?: boolean;
  message?: null;
}

interface IProps {
  hasError?: boolean;
}

class Boundary extends Component {
  state: Readonly<IState>;

  constructor(props: React.PropsWithChildren<IProps>) {
    super(props);
    this.state = { hasError: false, message: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <Text>Something went wrong. {this.state.message}</Text>;
    }

    return this.props.children;
  }
}

export default Boundary;
