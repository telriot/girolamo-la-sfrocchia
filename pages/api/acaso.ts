import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { getPostData } from "../../lib/posts";
import { isProduction } from "../../public/config";
const postsDirectory = isProduction
  ? path.join(__dirname, "/public/posts")
  : path.resolve("./posts");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    let allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as {
          date: string;
          title: string;
          tags: Array<string>;
        }),
      };
    });
    // Sort posts by date
    const randomPost = allPostsData.length
      ? await getPostData(
          allPostsData[Math.floor(Math.random() * allPostsData.length)].id
        )
      : { date: "", title: "", id: "", unprocessedContent: "" };
    res.statusCode = 200;
    res.json(randomPost);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
