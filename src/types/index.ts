export type Item = {
  id: string;
  description: string;
  imageUrl: string;
  userName: string;
  postCount?: number;
};

export type Post = {
  id?: string;
  itemId: string;
  userName: string;
  body: string;
  timestamp?: Date;
};
