import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  const route = useRoute();

  const userName = route.params.user;
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const {data: result} = await api.get(`users/${userName.login}/repos`);
        setUser(result);
      } catch (error) {
        Alert.alert('[ERRO] - Tente novamente');
      }
    }
    carregar();
  }, [userName.login]);

  const setStore = async dev => {
    let item = {
      id: dev.id,
      name: dev.name,
      url: dev.html_url,
      login: userName.login,
    };

    try {
      await AsyncStorage.setItem(`${dev.id}`, JSON.stringify(item));
      Alert.alert('Adicionado com Sucesso');
    } catch (error) {
      console.log(error);
    }
  };

  function OpenWebView(item) {
    let login = item.owner.login;
    let repo = item.name;
    navigation.navigate('detailRepo', {login, repo});
  }

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios.</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
        {user.map(dev => (
          <View key={dev.id} style={styles.viewMap}>
            <Text style={styles.headerText} onPress={() => OpenWebView(dev)}>
              {dev.name}
            </Text>
            <TouchableOpacity>
              <Icon
                name="star"
                size={18}
                color="#000"
                onPress={() => setStore(dev)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

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
