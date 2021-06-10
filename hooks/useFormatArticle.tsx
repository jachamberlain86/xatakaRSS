import { useState, useEffect } from 'react';
import { parse } from 'fast-xml-parser';
import {
  UnformattedArticle,
  UnformattedDescription,
  Article,
} from '../types/articles.types';

export type FormatArticleProps = {
  originalArticle: UnformattedArticle;
};

export function useFormatArticle({
  originalArticle,
}: FormatArticleProps): Article | null {
  const [articleData, setArticleData] = useState<Article | null>(null);

  useEffect(() => {
    function descriptionToJSON(description: string): UnformattedDescription {
      const descriptionJSON = parse(description, {
        ignoreAttributes: false,
        parseAttributeValue: true,
      });
      return descriptionJSON;
    }

    function formatImageURL(originalURL: string): string {
      const regex = /^\/\//;
      const imageURL = regex.test(originalURL)
        ? `https:${originalURL}`
        : originalURL;
      return imageURL;
    }

    function extractTextFromCDATA(htmlString: string): string {
      return htmlString;
    }

    if (originalArticle) {
      const descriptionJSON = descriptionToJSON(originalArticle.description);
      const image = formatImageURL(descriptionJSON.p.img['@_src']);
      const description = extractTextFromCDATA(originalArticle.description);
      const formattedArticle: Article = {
        author: originalArticle.author,
        link: originalArticle.link,
        title: originalArticle.title,
        pubDate: Date.parse(originalArticle.pubDate),
        image,
        description,
      };

      setArticleData(formattedArticle);
    }
  }, [originalArticle]);

  return articleData;
}
