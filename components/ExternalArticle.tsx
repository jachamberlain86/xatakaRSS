import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from '../styles/App.styles';

type ExternalArticleProps = {
  navigation: any;
  route: any;
};

export default function ExternalArticle({
  navigation,
  route,
}: ExternalArticleProps): JSX.Element {
  const { articleData } = route.params;
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.flex}>
      <View style={styles.flex}>
        <WebView source={{ uri: articleData.link }} />
      </View>
    </ScrollView>
  );
}
