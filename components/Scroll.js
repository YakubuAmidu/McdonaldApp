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
      <Text style={{ backgroundColor: '#FAA41A', width: 150, position: 'absolute',
       top: 110, color: '#000',  textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>Start Order</Text>
      </View>

      <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#686868', marginTop: 10, marginBottom:  35, marginLeft: 15, marginRight: 15 }}> Mobile order & pay at participation Mcdonald. McD App registration required.{'\u00A9'}2020 Mcdonald's.</Text>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative'  }}>
      <Text style={{ marginBottom: 20, fontWeight: '900', fontSize: 20 }}>Menu</Text>
       <Image style={{ width: '100%' }} source={require('../assets/burger.jpg')} />
       <Text style={{ fontSize: 30, fontWeight: '900', position: 'absolute', top: 70 }}>Daily deals</Text>
       <Text style={{ }}>On everything you love</Text>
      </View>

      </ScrollView>
    )
  }
}

export default Scroll;