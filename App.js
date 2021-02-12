import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from './store/store';

import VideoStore from './pages/VideoStore';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="VideoStore" headerMode={false}>
          <Stack.Screen name="VideoStore" component={VideoStore} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
