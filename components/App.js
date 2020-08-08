import React, { Component } from 'react';
import Logo from './Logo';
import Scroll from './Scroll';
import BottomTabs from './BottomTabs';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View>
      <Logo />
      <Scroll />
      <BottomTabs />
      </View>
    )
  }
}


export default App;
