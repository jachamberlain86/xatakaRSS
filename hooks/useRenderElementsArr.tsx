import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import ArticleCard from '../components/ArticleCard';
import { UnformattedArticle } from '../types/articles.types';

export type RenderElementsArrProps = {
  elementsArr: UnformattedArticle[] | null;
};

export function useRenderElementsArr({
  elementsArr,
}: RenderElementsArrProps): JSX.Element[] {
  const [elements, setElements] = useState<JSX.Element[]>([
    <Text key={uuidv4()}>Loading...</Text>,
  ]);

  useEffect(() => {
    if (elementsArr) {
      const renderedElementsArr = elementsArr.map((element) => {
        return <ArticleCard key={uuidv4()} content={element} />;
      });

      setElements(renderedElementsArr);
    }
  }, [elementsArr]);

  return elements;
}
