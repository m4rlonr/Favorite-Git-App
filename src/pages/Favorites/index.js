import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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
    // Error retrieving data
    console.log(error);
  }
}

async function setList(key) {
  const retrievedItem = await AsyncStorage.getItem(key);
  const ItemG = JSON.parse(retrievedItem);
  lista.push(ItemG);
}

async function clearStore() {
  await AsyncStorage.clear();
}

export default function Favorites() {
  return (
    <View style={styles.dados}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Repositórios favoritos.</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.repos}>
        {lista.map(item => (
          <View style={styles.viewMap}>
            <Text style={styles.headerText} onPress={() => {}}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.actions}>
        {/* <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.action} onPress={getStorage}>
          <Icon name="search" size={30} color="#fff" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.action} onPress={clearStore}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
