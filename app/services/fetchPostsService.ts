import { readdirSync, readFileSync } from "fs";
import path from "path";
import { marked } from "marked";
import { PostFile } from "../interfaces/PostFile.interface";
import { readFile } from "fs/promises";

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
  const content = await readFile(
    path.join(process.cwd(), "post-files", fileName)
  );
  return {
    fileName: fileName,
    content: marked(content.toString()),
  };
}

async function getFiles(): Promise<string[]> {
  return readdirSync(path.join(process.cwd(), "post-files"));
}
