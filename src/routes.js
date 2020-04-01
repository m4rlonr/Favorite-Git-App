import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

// import Instrucoes from './pages/Intrucoes';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Favorites from './pages/Favorites';
import detailRepo from './pages/detailRepo';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositories" component={Repositories} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="detailRepo" component={detailRepo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
