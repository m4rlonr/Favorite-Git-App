import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aqui ficarão os favoritos.</Text>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.detailButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
