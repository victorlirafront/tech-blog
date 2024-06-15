export const updateFavoritSource = function (favoritPosts: any, post: any) {
  const exists = favoritPosts.some((item: any) => item.post === post.id);
  if (exists) {
    return '/heart-pink.png';
  } else {
    return '/heart-white.png';
  }
};