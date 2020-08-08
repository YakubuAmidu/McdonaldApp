import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class BottomTabs extends Component {
  render() {
    return (
      <View style={{ top: 53, alignItems: 'center', borderTopWidth: .5, borderColor: 'grey'}}>
      <Text style={{ top: 25 }}>BottomTabs</Text>
      </View>
    );
  };
}

export default BottomTabs;
