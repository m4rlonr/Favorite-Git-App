import React from 'react';
import {useRoute} from '@react-navigation/native';

import {WebView} from 'react-native-webview';

function Profile() {
  const route = useRoute();

  const myrepos = route.params.dev.name;
  const username = route.params.userName.login;
  return (
    <WebView
      style={{flex: 1}}
      source={{uri: `https://github.com/${username}/${myrepos}`}}
    />
  );
}

export default Profile;
