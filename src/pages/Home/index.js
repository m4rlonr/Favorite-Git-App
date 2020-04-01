import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  Animated,
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
      fadeIn();
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

  const fadeAnim = useRef(new Animated.Value(0.3)).current;

  function fadeIn() {
    fadeAnim.setValue(0.3);
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false,
    }).start();
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

      <Animated.Image
        style={{
          width: 227,
          marginTop: 20,
          height: 230,
          transform: [{scale: fadeAnim}],
        }}
        source={{uri: user.avatar_url}}
      />
      <Text style={styles.textName}>{user.name || user.login}</Text>
      <Text numberOfLines={5} style={styles.bio}>
        {user.bio}
      </Text>

      {ButtonRepos()}

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.detailButtonText}>Ir aos Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
