import React, { Component } from 'react';
import Logo from './Logo';
import Scroll from './Scroll';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View>
      <Logo />
      <Scroll />
      </View>
    )
  }
}


export default App;
