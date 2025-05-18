import { Posts } from '@/types/posts';

type BlogPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  post_background: string;
  author: string;
  keywords: string;
};

type BlogResponse = {
  totalPages: number;
  results: BlogPost[];
};

export class PostsMapper {
  static toDomain(post: BlogResponse): { totalPages: number; results: Posts[] } {
    return {
      totalPages: post.totalPages,
      results: post.results.map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        date: item.date,
        category: item.category,
        metaTagTitle: item.meta_tag_title,
        metaTagDescription: item.meta_tag_description,
        postImage: item.post_image,
        postBackground: item.post_background,
        author: item.author,
        keywords: item.keywords,
      })),
    };
  }
}
