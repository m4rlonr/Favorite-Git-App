import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();

  const [user, setUser] = useState([]);

  const carregar = async () => {
    try {
      const {data: result} = await api.get('users/mchdouglas/repos');
      setUser(result);
    } catch (error) {
      alert('Opss!', 'Usuário não existe');
      console.log(error);
    }
  };
  carregar();

  return (
    <View style={styles.dados}>
      {user.map(dev => (
        <Text key={dev.id} style={styles.headerText}>
          {dev.name}
        </Text>
      ))}

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
