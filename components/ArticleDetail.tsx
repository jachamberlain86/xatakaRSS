import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import moment from 'moment';

import styles from '../styles/App.styles';

type ArticleDetailProps = {
  navigation: any;
  route: any;
};

export default function ArticleDetail({
  navigation,
  route,
}: ArticleDetailProps): JSX.Element {
  const { articleData } = route.params;
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
            navigation.navigate('External Article', { articleData });
          }}
        >
          <Text>Ver en el nevegador</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
