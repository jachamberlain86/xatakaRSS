import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArticleContainer from '../components/ArticleContainer';
import ArticleDetail from '../components/ArticleDetail';

const Stack = createStackNavigator();

export function MainStackNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Article Container">
        <Stack.Screen name="Article Container" component={ArticleContainer} />
        <Stack.Screen name="Article Detail" component={ArticleDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
