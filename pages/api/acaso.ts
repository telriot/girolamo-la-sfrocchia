import { NextApiRequest, NextApiResponse } from "next";
import { getSortedPostsData, getPostData } from "../../lib/posts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allPostsData = await getSortedPostsData();
    const randomPost = allPostsData.length
      ? await getPostData(
          allPostsData[Math.floor(Math.random() * allPostsData.length)].id
        )
      : { date: "", title: "", id: "", unprocessedContent: "" };
    res.status(200).json(randomPost);
  } catch (error) {
    console.log(error);
  }
};
