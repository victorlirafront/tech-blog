export type PostProps = {
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

export type IProps = {
  post: {
    id: number;
    category: string;
    post_background: string;
    date: string;
    meta_tag_title: string;
    meta_tag_description: string;
    title: string;
    content: string;
    post_image: string;
    author: string; // Make 'author' property optional
    keywords: string;
  };
  data: {
    results: PostProps[];
  };
};

export type ICurrentPost = {
  slug: string;
  title: string;
};