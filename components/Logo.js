import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', top: 40, paddingBottom: 5, borderBottomWidth: 1, borderColor: '#a0a0a0' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#FFCC00' }}>M</Text>
      </View>
    )
  }
}

export default Logo;
