import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    if (user.login) {
      return (
        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('Repositories', {user})}>
          {/* <Text style={styles.detailButtonText}>Ir aos repositórios</Text> */}
          <Icon name="folder-open" size={30} color="#fff" />
        </TouchableOpacity>
      );
    }
  }
  function avatar() {
    if (user.avatar_url) {
      return (
        <Animated.Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 227,
            marginTop: 20,
            height: 230,
            transform: [{scale: fadeAnim}],
            borderRadius: 250,
          }}
          source={{uri: user.avatar_url}}
        />
      );
    } else {
      return (
        <Icon
          name="user-circle-o"
          color="grey"
          size={210}
          style={styles.Icone_avatar}
        />
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
      <TouchableOpacity style={styles.action} onPress={carregar}>
        <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>

      {avatar()}

      <Text style={styles.textName}>{user.name || user.login}</Text>
      <Text numberOfLines={5} style={styles.bio}>
        {user.bio}
      </Text>

      <View style={styles.actions}>
        {ButtonRepos()}

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
