import { readdirSync, readFileSync } from "fs";
import path from "path";
import { marked } from "marked";
import { PostFile } from "../interfaces/PostFile.interface";

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
  const files = await getFiles();
  let fileDetails: PostFile | undefined = undefined;
  files
    .filter((f) => f === fileName)
    .map((file) => {
      const markdownContent = readFileSync(path.join("posts", file), "utf-8");
      fileDetails = {
        fileName: file,
        content: marked(markdownContent),
      };
    });

  return fileDetails;
}

async function getFiles(): Promise<string[]> {
  return readdirSync(path.join("posts"));
}
