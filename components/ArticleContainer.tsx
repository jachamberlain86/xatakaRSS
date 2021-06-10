import React from 'react';
import { View, Text } from 'react-native';

import ArticleCard from './ArticleCard';

export default function ArticleContainer(): JSX.Element {
  return (
    <View>
      <Text>Container</Text>
      <ArticleCard />
    </View>
  );
}
