import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import moment from 'moment';

import styles from '../styles/App.styles';

type ArticleDetailProps = {
  route: any;
};

export default function ArticleDetail({
  route,
}: ArticleDetailProps): JSX.Element {
  const { articleData } = route.params;

  function loadInBrowser(): void {
    Linking.openURL(articleData.link).catch((error) => console.log(error));
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.flex}>
      <View style={styles.flex}>
        <Image source={{ uri: articleData.image }} style={styles.cardImage} />
        <Text>{articleData.title}</Text>
        <Text>{articleData.author}</Text>
        <Text>{moment(articleData.pubDate).format('HH:mm, DD/MM/YY')}</Text>
        <Text>{articleData.description}</Text>
        <Pressable
          onPress={() => {
            loadInBrowser();
          }}
        >
          <Text>Ver en el nevegador</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
