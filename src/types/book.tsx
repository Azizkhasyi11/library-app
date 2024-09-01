type Book = {
  id: number;
  title: string;
  cover_url: string;
  description: string;
  author: {
    id: number;
    name: string;
  };
  pages: number;
  publication_year: string;
  publisher: {
    id: number;
    name: string;
  };
  stock: number;
  ISBN: string;
  created_at: string;
  updated_at: string;
};

export type { Book };
