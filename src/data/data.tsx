import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
          X: {
            name: "X",
            url: "https://x.com/pathakkmehul",
            icon: Icons.x,
            navbar: true,
          },
        //   LeetCode: {
        //     name: "Leetcode",
        //     url: "https://leetcode.com/pathakkmehul",
        //     icon: Icons.leetcode,
        //     navbar: false,
        //   },
          Email: {
            name: "Send Email",
            url: "mailto:pathakkmehul@gmail.com",
            icon: Icons.email,
            navbar: false,
          },
        },
      },
}