import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parse } from 'fast-xml-parser';
import { Feed } from '../types/articles.types';

export type XMLResponseProps = {
  url: string;
};

export function useXMLResponse({ url }: XMLResponseProps): Feed | null {
  const [parsedFeed, setParsedFeed] = useState<Feed | null>(null);

  async function storeLocalData(data: Feed): Promise<void> {
    try {
      const stringData = JSON.stringify(data);
      await AsyncStorage.setItem('@storage_Key', stringData);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLocalData(): Promise<void> {
    try {
      const jsonValue = await AsyncStorage.getItem('storage_Key');
      const parsedValue = jsonValue ? JSON.parse(jsonValue) : null;
      setParsedFeed(parsedValue);
    } catch (error) {
      console.log(error);
    }
  }

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
