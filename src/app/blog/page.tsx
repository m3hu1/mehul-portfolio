import AnnotatedHeading from "@/components/blogNotation";
import BlurFade from "@/components/magicui/blur-fade";
import { File, Folder, Tree } from "@/components/ui/tree";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "I occasionally enjoy writing blogs, primarily about tech topics.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const ELEMENTS = [
    {
      id: "1",
      isSelectable: true,
      name: "blogs",
      children: [
        {
          id: "2",
          isSelectable: true,
          name: "tech",
          children: posts
            .filter(post => post.metadata.tags?.includes("tech"))
            .map(post => ({
              id: post.slug,
              isSelectable: true,
              name: post.metadata.title,
            })),
        },
        {
          id: "3",
          isSelectable: true,
          name: "rant",
          children: posts
            .filter(post => post.metadata.tags?.includes("rant"))
            .map(post => ({
              id: post.slug,
              isSelectable: true,
              name: post.metadata.title,
            })),
        },
        {
          id: "4",
          isSelectable: true,
          name: "misc",
          children: posts
            .filter(post => post.metadata.tags?.includes("misc"))
            .map(post => ({
              id: post.slug,
              isSelectable: true,
              name: post.metadata.title,
            })),
        },
      ],
    },
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          <AnnotatedHeading text={"my blog"}></AnnotatedHeading>
        </h1>
      </BlurFade>
      <Tree
        className="p-2 overflow-hidden rounded-lg bg-background"
        initialExpandedItems={["1"]}
        elements={ELEMENTS}
      >
        <Folder element="blogs" value="1">
          <Folder value="2" element="tech">
            {posts
              .filter(post => post.metadata.tags?.includes("tech"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
          <Folder value="3" element="rant">
            {posts
              .filter(post => post.metadata.tags?.includes("rant"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
          <Folder value="4" element="misc">
            {posts
              .filter(post => post.metadata.tags?.includes("misc"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
        </Folder>
      </Tree>

      <br></br>
      
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      {/* <Tree
        className="p-2 overflow-hidden rounded-lg bg-background"
        initialExpandedItems={["1"]}
        elements={ELEMENTS}
      >
        <Folder element="blogs" value="1">
          <Folder value="2" element="tech">
            {posts
              .filter(post => post.metadata.tags?.includes("tech"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
          <Folder value="3" element="rant">
            {posts
              .filter(post => post.metadata.tags?.includes("rant"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
          <Folder value="4" element="misc">
            {posts
              .filter(post => post.metadata.tags?.includes("misc"))
              .map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <File value={post.slug}>
                    <p>{post.metadata.title}</p>
                  </File>
                </Link>
              ))}
          </Folder>
        </Folder>
      </Tree> */}
    </section>
  );
}
