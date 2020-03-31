import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aqui ficarão os repositórios.</Text>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.detailButtonText}>Ir para home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.detailButtonText}>Adicionar Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
