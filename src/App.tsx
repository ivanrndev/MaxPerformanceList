import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PhotoListScreen from './modules/PhotoListScreen';
import PhotoDetailsScreen from './modules/PhotoListScreen/components/PhotoDetailsScreen';

type RootStackParamList = {
  PhotoListScreen: undefined;
  PhotoDetailsScreen: {uri: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen
            name="PhotoListScreen"
            component={PhotoListScreen}
            options={{gestureEnabled: true}}
          />
          <Stack.Screen
            options={{gestureEnabled: true}}
            name="PhotoDetailsScreen"
            component={PhotoDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
