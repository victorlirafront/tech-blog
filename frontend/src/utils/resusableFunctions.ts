interface IPost {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  author: string;
}

interface IFavoritPost {
  post: number;
}

export const updateFavoritSource = function (favoritPosts: IFavoritPost[], post: IPost) {
  const exists = favoritPosts.some((item: { post: number }) => item.post === post.id);
  if (exists) {
    return '/heart-pink.png';
  } else {
    return '/heart-white.png';
  }
};