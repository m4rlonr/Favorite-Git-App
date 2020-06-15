import React from 'react';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

import styles from './styles';

export default function Profile() {
  const route = useRoute();

  console.log(route);
  const myrepos = route.params.repo;
  const username = route.params.login;
  return (
    <WebView
      style={styles.webView}
      source={{uri: `https://github.com/${username}/${myrepos}`}}
    />
  );
}
