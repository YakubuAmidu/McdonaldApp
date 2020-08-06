import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

class Scroll extends Component {
  render() {
    return (
      <ScrollView style={{ top: 50, height: '100%' }}>
      <View style={{ marginLeft: 15 }}>
       <Text>ScrollView</Text>
      </View>
      </ScrollView>
    )
  }
}

export default Scroll;
