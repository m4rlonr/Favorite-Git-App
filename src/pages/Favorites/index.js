import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

export default function Favorites() {
  const navigation = useNavigation();
  const [control, setControl] = useState(false);
  const [lista, setLista] = useState([]);

  function OpenWebView(item) {
    let login = item.login;
    let repo = item.name;
    navigation.navigate('detailRepo', {repo, login});
  }

  async function removeStorage(item) {
    Alert.alert('Removendo repositório dos favoritos.');
    await AsyncStorage.removeItem(String(item.id));
    setControl(false);
  }

  async function clearAll() {
    Alert.alert('Todos os favoritos serão removidos.');
    await AsyncStorage.clear();
    setLista([]);
  }

  useEffect(() => {
    async function loadDataList() {
      const AllKeys = await AsyncStorage.getAllKeys();

      try {
        if (lista.length > 0) {
          while (lista.length) {
            lista.pop();
          }
        }
        let i = 0;
        while (i < AllKeys.length) {
          let dado = await AsyncStorage.getItem(AllKeys[i]);
          lista.push(JSON.parse(dado));
          i++;
        }
        setControl(true);
      } catch (error) {
        console.log(error);
      }
    }
    if (control !== true) {
      loadDataList();
    }
  }, [lista, control]);

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios favoritos.</Text>
      </View>
      {control ? (
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
                  onPress={() => removeStorage(item)}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
          <Text>Carregando...</Text>
        </ScrollView>
      )}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={clearAll}>
          <Icon name="trash" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
