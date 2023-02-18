import { readdirSync, readFileSync } from "fs";
import path from "path";
import { marked } from "marked";
import { PostFile } from "../interfaces/Post.interface";

export async function getPosts(): Promise<PostFile[]> {
  let posts: PostFile[] = [];
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
): Promise<PostFile | undefined> {
  console.log("FILE NAME: ", fileName);
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
