import React from 'react';
import { View, Text } from 'react-native';

import { useXMLResponse } from '../hooks/useXMLResponse';

import {
  useRenderElementsArr,
  RenderElementsArrProps,
} from '../hooks/useRenderElementsArr';

export default function ArticleContainer(): JSX.Element {
  const parsedFeed = useXMLResponse({
    url: 'https://www.xatakandroid.com/tag/feeds/rss2.xml',
  });

  const elementsToRender: RenderElementsArrProps = {
    elementsArr: null,
  };

  if (parsedFeed) {
    const elementsArr = parsedFeed.rss.channel.item;
    elementsArr.sort((a, b) => {
      return Date.parse(b.pubDate) - Date.parse(a.pubDate);
    });
    elementsToRender.elementsArr = elementsArr;
  }

  const articleCards = useRenderElementsArr(elementsToRender);

  return (
    <View>
      <Text>Container</Text>
      {articleCards}
    </View>
  );
}
