import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');

  async function carregar() {
    try {
      const {data: result} = await api.get(`users/${username}`);
      setUser(result);
      // console.log(result.login);
    } catch (error) {
      Alert.alert('Opss!', 'Usuário não existe');
      console.log(error);
    }
  }

  function ButtonRepos() {
    if (user.name) {
      return (
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigation.navigate('Repositories', {user})}>
          <Text style={styles.detailButtonText}>Ir aos repositórios</Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={styles.dados}>
      <Text>Digite o usuário do github abaixo:</Text>
      <TextInput
        style={styles.input}
        placeholder="github username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.btn} onPress={carregar}>
        <Text style={styles.textBuscar}>Buscar</Text>
      </TouchableOpacity>

      <Image style={styles.img} source={{uri: user.avatar_url}} />

      <Text style={styles.textName}>{user.name || user.login}</Text>
      <Text style={styles.textName}>{user.bio}</Text>

      {ButtonRepos()}

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.detailButtonText}>Ir aos Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
