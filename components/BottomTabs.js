import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

class BottomTabs extends Component {
  render() {
    return (
      <View style={{ paddingLeft: 15, flexDirection: 'row', top: 53, alignItems: 'center', borderTopWidth: .5, borderColor: 'grey'}}>

      <View style={{ top: 30, paddingRight: 40 }}>
      <Image style={{ width: 30, height: 30 }} source={require('../assets/logo2.png')} />
        <Text>Home</Text>
      </View>

      <View style={{ top: 30, paddingRight: 40 }}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/fries2.jpg')} />
        <Text>Order</Text>
      </View>

      <View style={{ top: 30, paddingRight: 40 }}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/deals.png')} />
        <Text>Deals</Text>
      </View>

      <View style={{ top: 30, paddingRight: 40 }}>
        <Image style={{ width: 30, height: 30 }} source={require('../assets/recent.png')} />
        <Text>Recents</Text>
      </View>

      <View style={{ top: 30 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold'}}>0  0  0</Text>
        <Text style={{ top: 10}}>More</Text>
      </View>

      </View>
    );
  };
}

export default BottomTabs;
