import { Posts } from "@/types/posts"

export interface PostsResponse {
  id: string
}


export class PostsMapper {
  static toDomain(post: PostsResponse): Posts {
    return {
      id: post.id
    }
  }
}