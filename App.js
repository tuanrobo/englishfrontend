import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity } from 'react-native';

import { useEffect, useState } from 'react';

import GrammarList from './screens/grammarDetails';
import ExerciseScreen from './screens/exerciseScreen';
import GrammarDetails from './screens/grammarDetails';

import Tabbar from './components/homeTabbar';

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Tabbar} options={{ headerShown: false }} />
        <Stack.Screen name='Grammar List' component={GrammarList} />
        <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='Grammar details' component={GrammarDetails}
            options={({ route }) => ({
              title: route.params.attributes,
              headerStyle: {
                backgroundColor: '#ECE6DB',
                borderBottom: 0
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => alert('Bookmarked')}>
                  <Image
                    source={
                      route.params.bookmark
                        ? require('./assets/icons/ic-bookmarked.png')
                        : require('./assets/icons/ic-bookmark.png')
                    }

                  />
                </TouchableOpacity>
              )
            })}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

