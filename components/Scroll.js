import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

class Scroll extends Component {
  render() {
    return (
      <ScrollView style={{ top: 50, height: '100%' }}>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative' }}>
      <Image style={{ width: '100%' }} source={require('../assets/burger1.jpg')} />
      <Text style={{ position: 'absolute', top: 20, fontWeight: '900', fontSize: 30 }}>Love pickles or</Text>
      <Text  style={{ position: 'absolute', top: 50, fontWeight: '900', fontSize: 30 }}>hate 'em</Text>
      <Text style={{ backgroundColor: '#FAA41A', width: 150, position: 'absolute', top: 100, color: '#000',  textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>Start Order</Text>
      </View>

      <View style={{ marginLeft: 15, marginRight: 15 }}>
       <Image style={{ width: '100%' }} source={require('../assets/burger.jpg')} />
      </View>

      </ScrollView>
    )
  }
}

export default Scroll;
