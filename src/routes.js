import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

import Instrucoes from './pages/Intrucoes';
import Home from './pages/Home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Instrucoes" component={Instrucoes} /> */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
