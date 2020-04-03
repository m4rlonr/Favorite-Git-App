import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  const lista = [];

  async function getStorage() {
    try {
      const Allkeys = await AsyncStorage.getAllKeys();
      Allkeys.forEach(async key => {
        const getItem = await AsyncStorage.getItem(key);
        const item = JSON.parse(getItem);
        lista.push(item);
      });
    } catch (error) {
      console.log(error);
    }
    console.log(lista);
  }

  useEffect(() => {
    getStorage();
  });

  function OpenWebView(item) {
    let login = item.login;
    let repo = item.url;
    navigation.navigate('detailRepo', {repo, login});
  }

  async function removeStorage(id) {
    Alert.alert('Removendo Repositório.');
    await AsyncStorage.removeItem(id);
  }

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios favoritos.</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
        {lista.map(item => (
          <View key={item.id} style={styles.viewMap}>
            <Text style={styles.headerText} onPress={() => OpenWebView(item)}>
              {item.name}
            </Text>
            <TouchableOpacity>
              <Icon
                name="trash"
                size={18}
                color="#000"
                onPress={() => removeStorage(item.id)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.action} onPress={getStorage}>
        <Icon name="search" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
