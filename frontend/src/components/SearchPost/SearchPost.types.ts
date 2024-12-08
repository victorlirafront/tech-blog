type PostProps = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  author: string;
};

type Data = {
  totalPages: number;
    next?: {
      page: number;
      limit: number;
    };
    previous?: {
      page: number;
      limit: number;
    };
    results?: PostProps[];
};


export type SearchPostProps = {
  displaySearch: boolean;
  onCloseSearch: () => void;
  onSearchPosts: (data: Data) => void;
  onCloseMobileMenu: () => void
};
