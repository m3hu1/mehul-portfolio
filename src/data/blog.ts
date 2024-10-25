import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkMdx from "remark-mdx";
import { visit } from 'unist-util-visit';
import { Node } from 'unist';
import { Heading, PhrasingContent } from 'mdast';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function addIdsToHeadings() {
  return (tree: Node) => {
    visit(tree, 'heading', (node: Heading) => {
      const headingText = node.children
        .map((child: PhrasingContent) => {
          if (child.type === 'text') {
            return child.value;
          }
          return '';
        })
        .join(' ')
        .trim();

      const id = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

      if (!node.data) {
        node.data = {};
      }
      if (!node.data.hProperties) {
        node.data.hProperties = {};
      }
      node.data.hProperties.id = id;
    });
  };
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(addIdsToHeadings)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("posts", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const typedMetadata: Metadata = {
    title: metadata.title,
    publishedAt: metadata.publishedAt,
    summary: metadata.summary,
    image: metadata.image,
  };
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: typedMetadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "posts"));
}
