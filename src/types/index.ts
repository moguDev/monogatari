export type Item = {
  id: string;
  description: string;
  imageUrl: string;
  userName: string;
};

export type Post = {
  itemId: string;
  userName: string;
  body: string;
};
