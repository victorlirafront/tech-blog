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
    id: number;
    category: string;
    post_background: string;
    date: string;
    meta_tag_title: string;
    meta_tag_description: string;
    title: string;
    content: string;
    post_image: string;
    author: string;
    keywords: string;
  }[];
};

export type ICurrentPost = {
  slug: string;
  title: string
};