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
      <View style={[styles.flex, styles.container]}>
        <Image source={{ uri: articleData.image }} style={styles.cardImage} />
        <Text style={styles.detailTitle}>{articleData.title}</Text>
        <Text style={styles.detailSubTitle}>
          {articleData.author}:{' '}
          {moment(articleData.pubDate).format('HH:mm, DD/MM/YY')}
        </Text>
        <Text style={styles.detailBody}>{articleData.description}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            loadInBrowser();
          }}
        >
          <Text style={styles.buttonText}>Ver en el nevegador</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
