import { useState, useEffect } from 'react';
import { parse } from 'fast-xml-parser';
import { Feed } from '../types/articles.types';

export type XMLResponseProps = {
  url: string;
};

export function useXMLResponse({ url }: XMLResponseProps): Feed | null {
  const [parsedFeed, setParsedFeed] = useState<Feed | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((response: Response) => response.text())
      .then((textResponse: string) =>
        parse(textResponse, { parseAttributeValue: true }, true)
      )
      .then((parsedResponse: Feed) => setParsedFeed(parsedResponse));

    return function cancel() {
      controller.abort();
    };
  }, [url]);

  return parsedFeed;
}
