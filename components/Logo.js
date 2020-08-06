import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', top: 50, paddingBottom: 5, borderBottomWidth: 1, borderColor: '#a0a0a0' }}>
      <Image style={{ width: 35, height: 30}} source={require('../assets/logo.jpg')} />
      </View>
    )
  }
}

export default Logo;
