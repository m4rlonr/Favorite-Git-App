import React from 'react';
import {AsyncStorage} from 'react-native';
import {useRoute} from '@react-navigation/native';

const route = useRoute();
const myrepos = route.params.dev.html_url;
const projname = route.params.dev.name;

const setStorage = async () => {
  try {
    await AsyncStorage.setItem(projname, myrepos);
  } catch (error) {
    console.log(error);
  }
  return 1;
};
console.log(setStorage);
