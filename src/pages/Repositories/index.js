import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  const route = useRoute();

  const userName = route.params.user;
  const [user, setUser] = useState([]);

  const carregar = async () => {
    try {
      const {data: result} = await api.get(`users/${userName.login}/repos`);
      setUser(result);
      console.log('passou');
    } catch (error) {
      // alert('Opss!', 'Usuário não existe');
      console.log(error);
    }
  };
  carregar();

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios.</Text>
      </View>

      <ScrollView>
        {user.map(dev => (
          <Text key={dev.id} style={styles.headerText}>
            {dev.name}
          </Text>
        ))}
      </ScrollView>

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
