import React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import styles from './styles';

export default function StyledButton() {
 return (
   <View style={styles.container}>
     <TouchableOpacity 
     style={styles.button}
     onPress={() => {
       alert('Tetse')
     }}
     >
       <Text style={styles.text}>Ordenar</Text>
     </TouchableOpacity >
   </View>
  );
}