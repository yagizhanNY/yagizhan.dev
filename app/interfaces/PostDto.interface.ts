import { Post } from "@prisma/client";

export interface PostDto {
  post: Post;
  content: string;
}
