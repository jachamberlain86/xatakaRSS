// React Navigation installed as a dep to enable stack navigation
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { MainStackNavigator } from './navigation/AppNavigator';

// All styles moved into single file for greater reusability
import Colors from './styles/Colors';
import styles from './styles/App.styles';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar backgroundColor={Colors.darker} />
      <MainStackNavigator />
    </SafeAreaView>
  );
};

export default App;
