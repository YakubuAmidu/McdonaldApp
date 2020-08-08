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
      <Text style={{ left: 15, textAlign: 'center', padding: 10, position: 'absolute', top: 130, backgroundColor: '#FAA41A'}}>Get Morning Started</Text>
      </View>

      <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#686868', marginTop: 10, marginBottom:  35, marginLeft: 15, marginRight: 15 }}> Mobile order & pay at participation Mcdonald. McD App registration required.{'\u00A9'}2020 Mcdonald's.</Text>
      <Text style={{ left: 15, marginBottom: 20, fontWeight: '900', fontSize: 20 }}>Menu</Text>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative' }}>
      <Image style={{ width: '100%', height: 160 }} source={require('../assets/burger1.jpg')} />
      <Text style={{ color: '#fff', position: 'absolute', top: 20, fontWeight: '700', fontSize: 30, left: 15 }}>Hungry?</Text>
      <Text  style={{ position: 'absolute', top: 55, fontWeight: '700', fontSize: 20, color: '#fff', left: 15 }}>Lets's fix that</Text>
      <Text style={{ left: 15, backgroundColor: '#FAA41A', width: 150, position: 'absolute',
       top: 100, color: '#000',  textAlign: 'center', paddingTop: 12, paddingBottom: 12 }}>Start Order</Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: '900', marginTop: 30, marginBottom: 10, left: 15  }}>Deals</Text>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative'  }}>
       <Image style={{ width: '100%' }} source={require('../assets/burger.jpg')} />
       <Text style={{ fontSize: 30, fontWeight: '900', position: 'absolute', top: 30, left: 15 }}>Daily deals</Text>
       <Text style={{ fontSize: 20, fontWeight: 'bold', position: 'absolute', top: 60, left: 15 }}>On everything you love</Text>
       <Text style={{ position: 'absolute', paddingTop: 12, paddingBottom: 12, left: 15, top: 100, backgroundColor: '#fff',  width: 150, textAlign: 'center'}}>View Deals</Text>
      </View>

      <View style={{ marginLeft: 15, marginRight: 15, position: 'relative' }}>
      <Text style={{ paddingTop: 20, paddingBottom: 20, left: 10, fontSize: 20, fontWeight: '900' }}>Trending</Text>
       <Image style={{ width: '100%' }} source={require('../assets/fries.jpg')} />
       <Text>One Dollar.</Text>
       <Text>Large Fries.</Text>
       <Text>Only in the App</Text>
       <Text>Get Deal</Text>
      </View>

      </ScrollView>
    )
  }
}

export default Scroll;
