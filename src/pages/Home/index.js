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

import axios from 'axios';

import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');

  const carregar = async () => {
    try {
      const {data: result} = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      setUser(result);
    } catch (error) {
      Alert.alert('Opss!', 'Usuário não existe');
    }
  };

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

      <Text style={styles.textName}>{user.name || user.login}</Text>
      <Text style={styles.textName}>{user.repos_url}</Text>

      <Image style={styles.img} source={{uri: user.avatar_url}} />

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.detailButtonText}>Salvar nos favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
