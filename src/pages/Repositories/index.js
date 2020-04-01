import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  WebView,
} from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  const route = useRoute();

  const userName = route.params.user;
  const [user, setUser] = useState([]);

  async function carregar() {
    try {
      const {data: result} = await api.get(`users/${userName.login}/repos`);
      setUser(result);
    } catch (error) {
      alert('[ERRO] - Tente novamente');
    }
  }

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios.</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
        {user.map(dev => (
          <Text
            key={dev.id}
            style={styles.headerText}
            onPress={() => {
              return (
                <WebView source={{uri: dev.html_url}} style={{marginTop: 20}} />
                // Linking.openURL(dev.html_url);
              );
            }}>
            {dev.name}
          </Text>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.detailButton} onPress={carregar}>
        <Text style={styles.detailButtonText}>Carregar</Text>
      </TouchableOpacity>

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
