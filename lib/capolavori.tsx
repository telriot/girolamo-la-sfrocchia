import fs from "fs";
import path from "path";
import matter from "gray-matter";
//import remark from "remark";
//import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const postsPerPage = 15;

export const getPostsByTag = (
  tag?: any
): Array<{ id: string; date: string; title: string; tags: Array<string> }> => {
  const fileNames = fs.readdirSync(postsDirectory);
  let allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        tags: Array<string>;
      }),
    };
  });

  if (tag)
    allPostsData = allPostsData.filter((post, i) => post.tags.includes(tag));

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getTagsList = (): Array<{ params: { tag: string } }> => {
  const fileNames = fs.readdirSync(postsDirectory);
  let tagsSet = new Set();
  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const { tags } = matterResult.data;
    tags.forEach((tag) => tagsSet.add(tag));
  });
  const tagsArr = Array.from(tagsSet);
  return tagsArr.map((tag: string) => {
    return {
      params: {
        tag,
      },
    };
  });
};

export const getPagesNumber = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((_, i) => i);
  const pages = Math.ceil(allPosts.length / postsPerPage);
  let pagesArr: string[] = [];
  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i.toString());
  }
  return pagesArr.map((page: string) => {
    return {
      params: {
        page,
      },
    };
  });
};

export const getPaginatedPosts = (page) => {
  const fileNames = fs.readdirSync(postsDirectory);

  let allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const id = fileName.replace(/\.md$/, "");

    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        tags: Array<string>;
      }),
    };
  });

  return allPosts
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice((page - 1) * postsPerPage, page * postsPerPage);
};
