import LoveCounter from "@/components/love-counter";
import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { File, Folder, Tree } from "@/components/ui/tree";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "I occasionally enjoy writing blogs, primarily about tech topics.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const sortPostsByDate = (tag: string) =>
    posts
      .filter((post) => post.metadata.tags?.includes(tag))
      .sort((a, b) => {
        const dateA = new Date(a.metadata.publishedAt).getTime();
        const dateB = new Date(b.metadata.publishedAt).getTime();
        return dateB - dateA; // Ensure both dates are numbers
      })
      .map((post) => ({
        id: post.slug,
        isSelectable: true,
        name: post.metadata.title,
      }));

  const ELEMENTS = [
    {
      id: "1",
      isSelectable: true,
      name: "blogs",
      children: [
        { id: "2", isSelectable: true, name: "tech", children: sortPostsByDate("tech") },
        { id: "3", isSelectable: true, name: "rant", children: sortPostsByDate("rant") },
        { id: "4", isSelectable: true, name: "misc", children: sortPostsByDate("misc") },
      ],
    },
  ];

  return (
    <>
    <Particles className="hidden md:block fixed inset-0 -z-10" quantity={100} />
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          my blog
        </h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY} > 
      <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
      <Tree
        className="p-2 overflow-hidden rounded-lg bg-background"
        initialExpandedItems={["1"]}
        elements={ELEMENTS}
      >
        <Folder element="blogs" value="1">
          <Folder value="2" element="tech">
            {sortPostsByDate("tech").map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <File value={post.id}>
                  <p className="whitespace-nowrap">{`${post.name}`}</p>
                </File>
              </Link>
            ))}
          </Folder>
          <Folder value="3" element="rant">
            {sortPostsByDate("rant").map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <File value={post.id}>
                <p className="whitespace-nowrap">{`${post.name}`}</p>
                </File>
              </Link>
            ))}
          </Folder>
          <Folder value="4" element="misc">
            {sortPostsByDate("misc").map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <File value={post.id}>
                <p className="whitespace-nowrap">{`${post.name}`}</p>
                </File>
              </Link>
            ))}
          </Folder>
        </Folder>
      </Tree>
      </div>
      </div>
      </BlurFade>
      <br />

      {posts
        .sort((a, b) => {
          const dateA = new Date(a.metadata.publishedAt).getTime();
          const dateB = new Date(b.metadata.publishedAt).getTime();
          return dateB - dateA; // Ensure both dates are numbers
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                  <LoveCounter slug={post.slug} readonly />
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
    </>
  );
}