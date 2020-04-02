import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const lista = [];

async function getStorage() {
  try {
    const Allkeys = await AsyncStorage.getAllKeys();

    Allkeys.map(key => {
      setList(key);
    });
  } catch (error) {
    console.log(error);
  }
}

async function setList(key) {
  const retrievedItem = await AsyncStorage.getItem(key);
  const ItemG = JSON.parse(retrievedItem);
  lista.push(ItemG);
}
getStorage();

export default function Favorites() {
  async function removeItem(id) {
    Alert.alert('Removendo o item');
    await AsyncStorage.removeItem(`${id}`);
    getStorage();
  }

  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios favoritos.</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
        {lista.map(item => (
          <View key={item.id} style={styles.viewMap}>
            <Text style={styles.headerText} onPress={() => {}}>
              {item.name}
            </Text>
            <TouchableOpacity>
              <Icon
                name="trash-o"
                size={18}
                color="#000"
                onPress={() => removeItem(item.id)}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
