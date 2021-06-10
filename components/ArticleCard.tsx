import React from 'react';
import { View, Text } from 'react-native';

import ArticleDetail from './ArticleDetail';

export default function ArticleCard(): JSX.Element {
  return (
    <View>
      <Text>Card</Text>
      <ArticleDetail />
    </View>
  );
}
