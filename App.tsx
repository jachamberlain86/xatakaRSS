import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import { MainStackNavigator } from './navigation/AppNavigator';
import ArticleContainer from './components/ArticleContainer';

import Colors from './styles/Colors';
import styles from './styles/App.styles';

const App = (): JSX.Element => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...styles.flex }}>
      <StatusBar />
      <MainStackNavigator />
    </SafeAreaView>
  );
};

export default App;
