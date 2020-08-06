import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

class Scroll extends Component {
  render() {
    return (
      <ScrollView style={{ top: 50, height: '100%' }}>

      <View style={{}}>
      <Image style={{ width: '100%', height: 190, resizeMode: 'stretch', position: 'relative'}} source={require('../assets/burger2.jpg')} />
      <Text style={{ left: 15, position: 'absolute', fontSize: 30, top: 20, fontWeight: '700' }}>Cheese bits on</Text>
      <Text style={{ left: 15, position: 'absolute', fontSize: 30, top: 50, fontWeight: '700' }}>the wrapper</Text>
      <Text style={{ position: 'absolute', top: 85, left: 15 }}>Of the Sausage McMuffin with Egg</Text>
      <Text style={{ left: 15, textAlign: 'center', padding: 10, position: 'absolute', top: 120, backgroundColor: '#FAA41A'}}>Get Morning Started</Text>
      </View>

      <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#686868', marginTop: 10, marginBottom:  35, marginLeft: 15, marginRight: 15 }}> Mobile order & pay at participation Mcdonald. McD App registration required.{'\u00A9'}2020 Mcdonald's.</Text>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative' }}>
      <Image style={{ width: '100%' }} source={require('../assets/burger1.jpg')} />
      <Text style={{ position: 'absolute', top: 20, fontWeight: '700', fontSize: 30 }}>Love pickles or</Text>
      <Text  style={{ position: 'absolute', top: 50, fontWeight: '700', fontSize: 30 }}>hate 'em</Text>
      <Text style={{ backgroundColor: '#FAA41A', width: 150, position: 'absolute',
       top: 110, color: '#000',  textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>Start Order</Text>
      </View>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative'  }}>
      <Text style={{ marginBottom: 20, fontWeight: '900', fontSize: 20 }}>Menu</Text>
       <Image style={{ width: '100%' }} source={require('../assets/burger.jpg')} />
       <Text style={{ fontSize: 30, fontWeight: '900', position: 'absolute', top: 70, left: 15 }}>Daily deals</Text>
       <Text style={{ fontSize: 20, fontWeight: 'bold', position: 'absolute', top: 100, left: 15 }}>On everything you love</Text>
       <Text style={{ position: 'absolute', paddingTop: 12, paddingBottom: 12, left: 15, top: 150, backgroundColor: '#fff',  width: 150, textAlign: 'center'}}>View Deals</Text>
      </View>

      </ScrollView>
    )
  }
}

export default Scroll;
