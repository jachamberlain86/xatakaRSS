import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArticleContainer from '../components/ArticleContainer';
import ArticleDetail from '../components/ArticleDetail';
import ExternalArticle from '../components/ExternalArticle';

const Stack = createStackNavigator();

export function MainStackNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Article Container">
        <Stack.Screen name="Article Container" component={ArticleContainer} />
        <Stack.Screen name="Article Detail" component={ArticleDetail} />
        <Stack.Screen name="External Article" component={ExternalArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
