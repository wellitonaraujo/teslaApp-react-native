import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import StyledButton from '../../components/StyledButton';

export default function CardItem() {
 return (
   <View>
        <View style={styles.cardContainer}>

        <Image
         source={require('../../images/ModelX.jpeg')}
         style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Modelo SS</Text>
          <Text style={styles.subTitle}>Valor sugerido: Muito caro</Text>
        </View>

      <StyledButton />
      
      </View>
   </View>
  );
}