import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import remarkAutoHighlights from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkCodetitles from "remark-code-titles";
import remarkAdmonitions from "remark-admonitions";
import style from "./docs.module.scss";
import matter from "gray-matter";
import Image from "next/image";
import ProsCons from "../../src/components/blog/ProsCons";
import readingTime from "reading-time";
import "remark-admonitions/styles/classic.css";
import BlogLayout from "../../src/layouts/BlogLayout";

export default function Docs({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <div className={style.docsContent}>
        <MDXRemote {...mdxSource} components={{ Image, ProsCons }} />
      </div>
    </BlogLayout>
  );
}

const root = process.cwd();

export async function getStaticPaths() {
  const docs = await fs.readdirSync(path.join(root, "blog"));

  return {
    paths: docs.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const source = await getFile(params.slug);
  return { props: { ...source } };
}

const getFile = async (slug) => {
  const source = await fs.readFileSync(
    path.join(root, "blog", `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        remarkCodetitles,
        remarkAdmonitions,
        [
          remarkAutoHighlights,
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      rehypePlugins: [mdxPrism],
    },
  });
  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...data,
    },
  };
};
