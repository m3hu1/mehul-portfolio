import BackButton from "@/components/back-button";
import LoveCounter from "@/components/love-counter";
import Particles from "@/components/magicui/particles";
import ScrollProgress from "@/components/scroll-progress";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/data";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
    <Particles className="hidden md:block fixed inset-0 -z-10" quantity={100} />
    <section id="blog">
      <ScrollProgress />
      <BackButton>Back to Posts</BackButton>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        <LoveCounter slug={params.slug} />
      </div>
      <article
        className="prose dark:prose-invert prose-code:p-1 prose-code:rounded-md prose-code:border prose-code:before:content-none prose-code:after:content-none prose-code:px-1.5 prose-code:overflow-x-auto dark:prose-code:bg-gray-600/25"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      <br></br>
    </section>
    </>
  );
}
