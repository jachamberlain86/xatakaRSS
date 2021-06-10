import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArticleContainer from '../components/ArticleContainer';
import ArticleDetail from '../components/ArticleDetail';

const Stack = createStackNavigator();

export function MainStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Article Container" headerMode="screen">
      <Stack.Screen name="Article Container" component={ArticleContainer} />
      <Stack.Screen name="Article Detail" component={ArticleDetail} />
    </Stack.Navigator>
  );
}
