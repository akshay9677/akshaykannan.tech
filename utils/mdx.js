import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const root = process.cwd();
const getAllFilesFrontMatter = () => {
  const files = fs.readdirSync(path.join(root, "blog"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, "blog", postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(source),
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};

export { getAllFilesFrontMatter };
