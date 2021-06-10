import { useState, useEffect } from 'react';
/* AsyncStorage imported to cache data pulled from API and provide
content incase nothing is retrieved from using fetch */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parse } from 'fast-xml-parser';
import { Feed } from '../types/articles.types';

export type XMLResponseProps = {
  url: string;
};

/* Hook attempts to fetch data from a provided URL and parses the result.
If user has not signal retrieves a backup cached in local storage. Current local
storage solution not thoroughly tested */
export function useXMLResponse({ url }: XMLResponseProps): Feed | null {
  const [parsedFeed, setParsedFeed] = useState<Feed | null>(null);

  async function storeLocalData(data: Feed): Promise<void> {
    try {
      const stringData = JSON.stringify(data);
      await AsyncStorage.setItem('@storage_Key', stringData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async function getLocalData(): Promise<void> {
    try {
      const jsonValue = await AsyncStorage.getItem('storage_Key');
      const parsedValue = jsonValue ? JSON.parse(jsonValue) : null;
      setParsedFeed(parsedValue);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  /* Fetches data from API but aborts request is unmounted
  or called again before request completed */
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((response: Response) => response.text())
      .then((textResponse: string) => parse(textResponse, {}, true))
      .then((parsedResponse: Feed) => {
        setParsedFeed(parsedResponse);
        storeLocalData(parsedResponse);
      });

    if (!parsedFeed) {
      getLocalData();
    }

    return function cancel() {
      controller.abort();
    };
  }, [url]);

  return parsedFeed;
}
