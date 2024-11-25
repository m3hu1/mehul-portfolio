"use client"

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import SparklesText from "@/components/magicui/sparkle";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/data";
import Link from "next/link";
import Markdown from "react-markdown";
// import { useTheme } from "next-themes";
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import Particles from "@/components/magicui/particles";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const blogLinkRef = useRef<HTMLAnchorElement>(null);
  const resumeLinkRef = useRef<HTMLAnchorElement>(null);
  const emailLinkRef = useRef<HTMLAnchorElement>(null);
  const twitterLinkRef = useRef<HTMLAnchorElement>(null);
  const skillsHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (blogLinkRef.current) {
      const annotation = annotate(blogLinkRef.current, {
        type: 'underline',
        color: '#3C82F6',
        strokeWidth: 3,
        padding: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }
  }, []);
  useEffect(() => {
    if (resumeLinkRef.current) {
      const annotation = annotate(resumeLinkRef.current, {
        type: 'underline',
        color: '#3C82F6',
        strokeWidth: 3,
        padding: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }

    if (emailLinkRef.current) {
      const annotation = annotate(emailLinkRef.current, {
        type: 'underline',
        color: '#3C82F6',
        strokeWidth: 2,
        padding: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }

    if (twitterLinkRef.current) {
      const annotation = annotate(twitterLinkRef.current, {
        type: 'underline',
        color: '#3C82F6',
        strokeWidth: 2,
        padding: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }
  }, []);
  useEffect(() => {
    if (skillsHeadingRef.current) {
      const annotation = annotate(skillsHeadingRef.current, {
        type: 'underline',
        color: '#ED8796',
        strokeWidth: 3,
        padding: 1,
        iterations: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }
  }, []);
  useEffect(() => {
    if (aboutHeadingRef.current) {
      const annotation = annotate(aboutHeadingRef.current, {
        type: 'underline',
        color: '#ED8796',
        strokeWidth: 3,
        padding: 1,
        iterations: 1,
        animationDuration: 1000,
      });
      annotation.show();
    }
  }, []);

  // const { theme } = useTheme();
  return (
    <>
    <Particles className="hidden md:block fixed inset-0 -z-10" quantity={100} />
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi, i'm ${DATA.name.split(" ")[0].toLowerCase()} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrlDark} />
                {/* <AvatarImage
                  alt={DATA.name}
                  src={
                    theme === "dark" ? DATA.avatarUrlDark : DATA.avatarUrlLight
                  }
                /> */}
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold inline-block underline-animation" >About</h2>
        </BlurFade>
        {/* <br></br> */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="mt-3 prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold inline-block underline-animation" >Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge variant="new" key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
        <div className="flex min-h-0 flex-col gap-y-3 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-sm font-bold">Currently exploring:</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.learning.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <Badge variant="new" key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Check out my{" "}
                <Link
                  href="https://drive.google.com/file/d/1LLDsv8uzp07CVql618rH1E3a7t2U9p9W/view?usp=sharing"
                  target="_blank"
                  className="text-blue-500 underline-a"
                  // ref={resumeLinkRef}
                >
                  resume.
                </Link>
              </h3>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="-mt-4 space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm select-none">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {/* Check out my latest work */}
                  <SparklesText text="My latest work"></SparklesText>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love building projects, whether they are simple websites or
                  more complex web apps. Below are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 11 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  // video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my{" "}
                <Link href="/blog" className="text-blue-500 underline-a" >
                  blog.
                </Link>
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I occasionally enjoy writing blogs, primarily about tech topics,
                but I also explore other subjects.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat?<br></br> Just{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 underline-a"
                  // ref={emailLinkRef}
                >
                  email me
                </Link>{" "}
                or{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  className="text-blue-500 underline-a"
                  // ref={twitterLinkRef}
                >
                  dm me on twitter.
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
    </>
  );
}
