export type UnformattedArticle = {
  readonly author: string;
  readonly link: string;
  readonly title: string;
  readonly pubDate: string;
  readonly description: string;
  readonly image: string;
};

export type Feed = {
  readonly rss: {
    readonly channel: {
      readonly item: UnformattedArticle[];
    };
  };
};
