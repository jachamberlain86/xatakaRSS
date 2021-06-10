import React from 'react';
import { View, Text } from 'react-native';

import ArticleDetail from './ArticleDetail';

import { UnformattedArticle } from '../types/articles.types';

type ArticleCardProps = {
  content: UnformattedArticle;
};

export default function ArticleCard({
  content,
}: ArticleCardProps): JSX.Element {
  return (
    <View>
      <Text>Card</Text>
      <ArticleDetail />
    </View>
  );
}
