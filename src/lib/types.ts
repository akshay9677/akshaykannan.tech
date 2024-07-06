export type BlogMetaType = {
  title: string;
  sysCreatedTime: string;
  tags: string;
  body: string;
  id: string;
};

export type BlogType = {
  metadata: BlogMetaType;
  slug: string;
  content: string;
};
