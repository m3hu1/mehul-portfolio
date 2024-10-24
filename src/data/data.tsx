import { Icons } from "@/components/icons";
import { FolderOpen, HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Mehul Pathak",
  initials: "MP",
  url: "https://www.mehulpathak.com",
  location: "Greater Noida, UP",
  locationLink:
    "https://www.google.com/maps/place/Bennett+University/@28.4431291,77.5873979,13.43z/data=!4m6!3m5!1s0x390cbf94deb6bc39:0x7ba6bedc9a2b537f!8m2!3d28.4506465!4d77.5841978!16s%2Fg%2F11c3wvm4q_?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  description:
    "pre-final year university student with a passion for problem-solving and learning new technologies.",
  summary:
    "Since childhood, I have been passionate about computers, technology, and gaming. While gaming sparked my interest in game development, I ultimately found my true passion in programming through various [projects](/#projects). I particularly enjoy [competitive programming](https://leetcode.com/u/pathakkmehul) and tackling complex problems. I love learning new technologies and building websites with the latest tech stacks. Additionally, I take pride in my typing skills, often reaching speeds of over 200 words per minute.",
  avatarUrlLight: "/mehul_light.png",
  avatarUrlDark: "/mehul_dark.png",
  skills: [
    "Python",
    "C++",
    "Go",
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express.js",
    "Docker",
    "Kubernetes",
    "TensorFlow",
  ],
  learning: ["Remix", "Astro", "Rust", "Bun", "Deno"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
    { href: "/blog", icon: Notebook, label: "Blog" },
  ],
  contact: {
    email: "pathakkmehul@gmail.com",
    tel: "+91 8081421477",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/m3hu1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pathakmehul",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "Leetcode",
        url: "https://leetcode.com/pathakkmehul",
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pathakkmehul",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:pathakkmehul@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "z1ppie",
      href: "https://z1ppie.vercel.app",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "A peer-to-peer (P2P) file sharing application that utilizes WebRTC for seamless communication and features real-time chat functionality through Socket.IO.",
      technologies: [
        "Next.js",
        "Typescript",
        "WebRTC",
        "Socket.IO",
        "Tailwind CSS",
        "Shadcn UI",
        "Aceternity UI",
        "Node.js",
        "Render",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://z1ppie.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/z1ppie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "notez",
      href: "https://notezai.vercel.app",
      dates: "Aug 2024 - Sept 2024",
      active: true,
      description:
        "Inspired by Apple Intelligence in Apple Notes, Notez is an AI math solver that allows users to draw mathematical expressions on a blank canvas. It intelligently recognizes these drawings, solves the expressions, and converts them to LaTeX.",
      technologies: [
        "Vite",
        "React",
        "Typescript",
        "Gemini GenAI API",
        "FastAPI",
        "Tailwind CSS",
        "Node.js",
        "Render",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://notezai.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/notez",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "bugpa",
      href: "https://bugpa.vercel.app",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
        "A GPA calculator designed for college students, addressing the common challenge of understanding the credit system. It provides an intuitive interface for students to easily calculate their SGPA, helping them navigate their academic performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Node.js",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://bugpa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/gpa-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "qaution",
      href: "https://qaution.vercel.app",
      dates: "Mar 2023 - May 2023",
      active: true,
      description:
        "A platform that offers a comprehensive suite of cybersecurity services, including redirect tracking, SSL certificate verification, IP reputation checking, and more.",
      technologies: [
        "Python",
        "FastAPI",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Lottie",
        "Node.js",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://qaution.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/qaution",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
  ],
  more_projects: [
    {
      title: "go-todo",
      href: "https://github.com/m3hu1/golang-todo-cli",
      dates: "Sept 2024",
      active: true,
      description:
        "A Go-based CLI for todo task management using Cobra. Supports adding, listing, completing, and deleting tasks with CSV persistence.",
      technologies: ["Go", "Cobra", "CRUD", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/golang-todo-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "go-typing-test",
      href: "https://github.com/m3hu1/typing-test-golang",
      dates: "Oct 2024",
      active: true,
      description:
        "A typing test application that leverages Go for the backend. This project showcases my learning journey in Golang.",
      technologies: ["Go", "HTML", "CSS", "HTTP", "Server"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/typing-test-golang",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "ceh-notes",
      href: "https://cehnotes.netlify.app",
      dates: "Oct 2024",
      active: true,
      description:
        "Revived study notes for the EC-Council Certified Ethical Hacker (C|EH) v12 exam originally by @findmeandkillme hosted using HonKit.",
      technologies: ["HonKit", "GitBook", "Markdown", "Notes", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://cehnotes.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/ceh-notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "auto-typer",
      href: "https://github.com/m3hu1/auto-typer",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Python and C++ scripts to automate keyboard typing based on the content of a text file.",
      technologies: ["Python", "C++", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/auto-typer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "perfect-circle-exploit",
      href: "https://github.com/m3hu1/perfect-circle",
      dates: "Dec 2023",
      active: true,
      description:
        "MacOS only. Exploit to draw a perfect circle (99.9%) on Neal.fun's Perfect Circle Challenge.",
      technologies: ["C++", "CLI", "Exploit"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/perfect-circle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "instagram-impostor",
      href: "https://github.com/m3hu1/impostor",
      dates: "Jun 2024",
      active: true,
      description:
        "A python3 script to identify Instagram accounts that don't follow you back.",
      technologies: ["Python", "CLI", "Fun"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/impostor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "cpp-fms",
      href: "https://github.com/m3hu1/terminalplusplus",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A C++ based command-line interface (CLI) file management system that implements essential operations from scratch.",
      technologies: ["C++", "CLI", "Collaboration"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/terminalplusplus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
  ],
};
