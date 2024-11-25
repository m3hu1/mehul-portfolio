"use client";

import React from "react";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/data";
import Link from "next/link";
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';
import Particles from "@/components/magicui/particles";

const BLUR_FADE_DELAY = 0.04;

const Page = () => {
  const recentProjectsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (recentProjectsRef.current) {
      const annotation = annotate(recentProjectsRef.current, {
        type: 'underline',
        color: '#3C82F6',
        strokeWidth: 3,
      });
      annotation.show();
    }
  }, []);

  return (
    <>
    <Particles className="hidden md:block fixed inset-0 -z-10" quantity={100} />
    <section id="more_projects">
      <div className="-mt-12 space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm select-none">
                My Projects
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Explore my projects
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Below are the rest of the projects that I&apos;ve developed over
                the past few years. View my most{" "}
                <Link
                  href="/#projects"
                  className="text-blue-500 underline-a"
                  // ref={recentProjectsRef}
                >
                  recent work.
                </Link>
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.more_projects.map((project, id) => (
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
    </>
  );
};

export default Page;
