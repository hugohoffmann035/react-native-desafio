import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from './store/store';

import Movies from './pages/Movies';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Movies" headerMode={false}>
          <Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
