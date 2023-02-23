import { readdirSync } from "fs";
import path from "path";
import { marked } from "marked";
import { PostFile } from "../interfaces/PostFile.interface";
import { readFile } from "fs/promises";
import { DIRECTORY } from "../consts/fileDirectory";

export async function getPostByFileName(
  fileName: string
): Promise<PostFile | undefined> {
  const content = await readFile(path.join(DIRECTORY, fileName));
  return {
    fileName: fileName,
    content: marked(content.toString()),
  };
}
