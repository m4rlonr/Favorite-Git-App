import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Aqui ficarão os favoritos.</Text>
      </View>

      <TouchableOpacity
        style={styles.action}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
