import { useState, useEffect } from 'react';
// Fast XML Parser imported to provide fast a reliable XML parsing
import { parse } from 'fast-xml-parser';
import {
  UnformattedArticle,
  UnformattedDescription,
  Article,
} from '../types/articles.types';

export type FormatArticleProps = {
  originalArticle: UnformattedArticle;
};

/* This hook currently requires data to arrive in a predictable shape.
It's not the most reliable solution. */
export function useFormatArticle({
  originalArticle,
}: FormatArticleProps): Article | null {
  const [articleData, setArticleData] = useState<Article | null>(null);

  useEffect(() => {
    /* Description is returned as CDATA, parsing to JSON
    allows us to retrieve src attribute from img tag */
    function descriptionToJSON(description: string): UnformattedDescription {
      const descriptionJSON = parse(description, {
        ignoreAttributes: false,
        parseAttributeValue: true,
      });
      return descriptionJSON;
    }

    // Some parsed URLs are returned without https: and need it adding manually
    function formatImageURL(originalURL: string): string {
      const regex = /^\/\//;
      const imageURL = regex.test(originalURL)
        ? `https:${originalURL}`
        : originalURL;
      return imageURL;
    }

    /* Extracts text only from description CDATA by stripping out tags,
    objects, and excessive new lines, then formats into paragraphs with
    appropriate line breaks. Need to find more robust alternative to using
    RegEx to parse HTML */
    function extractTextFromCDATA(htmlString: string): string {
      const regex = /<[^>]*>|{[^}]*}/g;
      const splitHtml = htmlString.split(regex);
      const paragraphs: string[] = [];
      let paragraphIndex = 0;
      let newParagraph = true;
      splitHtml.forEach((string) => {
        const isNewLine = /^\n/;
        if (
          string &&
          string.length &&
          string !== ' ' &&
          !isNewLine.test(string)
        ) {
          newParagraph = false;
          if (paragraphs[paragraphIndex]) paragraphs[paragraphIndex] += string;
          else paragraphs[paragraphIndex] = string;
        }
        if (string && isNewLine.test(string) && newParagraph === false) {
          newParagraph = true;
          paragraphIndex += 1;
        }
      });
      const extractedText = paragraphs.join('\n\n');
      return extractedText;
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
