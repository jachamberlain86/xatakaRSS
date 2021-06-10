import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useFormatArticle } from '../hooks/useFormatArticle';

import ArticleDetail from './ArticleDetail';

import { UnformattedArticle } from '../types/articles.types';

import styles from '../styles/App.styles';

type ArticleCardProps = {
  content: UnformattedArticle;
  navigation: any;
};

export default function ArticleCard({
  content,
  navigation,
}: ArticleCardProps): JSX.Element {
  const articleData = useFormatArticle({ originalArticle: content });

  const renderedArticle = articleData ? (
    <Pressable
      onPress={() => navigation.navigate('Article Detail', { articleData })}
    >
      <View style={styles.card}>
        <Image source={{ uri: articleData.image }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{articleData.title}</Text>
        <Text style={styles.cardBody} numberOfLines={2}>
          {articleData.description}
        </Text>
      </View>
    </Pressable>
  ) : null;

  return <View>{renderedArticle}</View>;
}
