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

export type Article = {
  readonly author: string;
  readonly link: string;
  readonly title: string;
  readonly pubDate: number;
  readonly description: string;
  readonly image: string;
};

export type Paragraph = {
  readonly '#text': string;
};

export type SubSection = {
  readonly p: (string | Paragraph | SubSection)[];
  readonly img: {
    '@_src': string;
  };
};

export type UnformattedDescription = {
  readonly p: SubSection;
};
