/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import CardItem from './src/components/CardItem';

import { StyleSheet, View} from 'react-native';


function App() {
  return (
    <View style={styles.container}>
     
      <CardItem />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default App;
