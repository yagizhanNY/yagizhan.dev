import { Post } from ".prisma/client";
import { DIRECTORY } from "@/app/consts/fileDirectory";
import { PostDto } from "@/app/interfaces/PostDto.interface";
import { existsSync } from "fs";
import { appendFile, mkdir } from "fs/promises";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  if (req.method === "POST") {
    const post = JSON.parse(req.body) as PostDto;
    const apiResponse = await prisma.post.create({
      data: post.post,
    });

    if (!existsSync(DIRECTORY)) {
      await mkdir(DIRECTORY);
    }

    await appendFile(path.join(DIRECTORY, post.post.fileName), post.content);
    res.status(201).json(apiResponse);
  }
}
