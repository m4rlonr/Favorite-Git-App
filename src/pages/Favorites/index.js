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

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('Favorites')}>
          <Icon name="star" size={20} color="#fff" />
          <Icon name="star" size={30} color="#fff" />
          <Icon name="star" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
