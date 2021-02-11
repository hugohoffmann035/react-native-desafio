import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Movies from './pages/Movies';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Movies">
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
