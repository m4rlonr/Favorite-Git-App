import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem vindo primeiro que funciona.</Text>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() =>
          navigation.navigate(() => {
            alert('é isso meu amigo');
          })
        }>
        <Text style={styles.detailButtonText}>Ir as intruções</Text>
      </TouchableOpacity>
    </View>
  );
}
