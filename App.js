import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {store} from './store/store';

import VideoStore from './pages/VideoStore';
import VideoDetails from './pages/VideoDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="VideoStore">
          <Stack.Screen
            name="VideoStore"
            component={VideoStore}
            options={{title: 'Locadora'}}
          />
          <Stack.Screen
            name="VideoDetails"
            component={VideoDetails}
            options={{title: 'Informações detalhadas'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
