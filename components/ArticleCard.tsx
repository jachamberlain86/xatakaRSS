import React from 'react';
import { View, Text, Image } from 'react-native';
import { useFormatArticle } from '../hooks/useFormatArticle';

import ArticleDetail from './ArticleDetail';

import { UnformattedArticle } from '../types/articles.types';

import styles from '../styles/App.styles';

type ArticleCardProps = {
  content: UnformattedArticle;
};

export default function ArticleCard({
  content,
}: ArticleCardProps): JSX.Element {
  const articleData = useFormatArticle({ originalArticle: content });

  const renderedArticle = articleData ? (
    <View>
      <Image source={{ uri: articleData.image }} style={styles.cardImage} />
      <Text>{articleData.title}</Text>
      <Text>{articleData.description}</Text>
    </View>
  ) : null;

  return (
    <View>
      {renderedArticle}
      <ArticleDetail />
    </View>
  );
}
