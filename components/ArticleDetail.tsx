import React from 'react';
import { View, Text } from 'react-native';

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
    <View>
      <Text>{articleData.title}</Text>
    </View>
  );
}
