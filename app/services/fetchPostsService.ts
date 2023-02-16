import { readdirSync, readFileSync } from "fs";
import path from "path";
import { marked } from "marked";
import { Post } from "../interfaces/Post";

export async function getPosts(): Promise<Post[]> {
  let posts: Post[] = [];
  const files = await getFiles();
  files.map((file) => {
    const markdownContent = readFileSync(path.join("posts", file), "utf-8");
    posts.push({
      fileName: file,
      content: marked(markdownContent),
    });
  });

  return posts;
}

export async function getPostByFileName(
  fileName: string
): Promise<Post | undefined> {
  const files = await getFiles();
  files
    .filter((f) => f.replace(".md", "") === fileName)
    .map((file) => {
      const markdownContent = readFileSync(path.join("posts", file), "utf-8");
      return {
        fileName: file,
        content: marked(markdownContent),
      };
    });

  return undefined;
}

async function getFiles(): Promise<string[]> {
  return readdirSync(path.join("posts"));
}
