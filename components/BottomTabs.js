import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class BottomTabs extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 15, flexDirection: 'row', top: 53, alignItems: 'center', borderTopWidth: .5, borderColor: 'grey'}}>

      <View style={{ top: 30, paddingRight: 30 }}>
      <Image style={{ width: 30, height: 30 }} source={require('../assets/logo2.png')} />
        <Text>Home</Text>
      </View>

      <View style={{ top: 30, paddingRight: 30 }}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/fries2.jpg')} />
        <Text>Order</Text>
      </View>

      <View style={{ top: 30, paddingRight: 30 }}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/deals.png')} />
        <Text>Deals</Text>
      </View>

      </View>
    );
  };
}

export default BottomTabs;
