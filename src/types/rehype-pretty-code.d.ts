declare module "rehype-pretty-code" {
  import type { Plugin } from "unified";

  interface Options {
    theme?: string | Record<string, string>;
    keepBackground?: boolean;
    defaultLang?: string;
    onVisitLine?: (node: unknown) => void;
    onVisitHighlightedLine?: (node: unknown) => void;
    onVisitHighlightedChars?: (node: unknown) => void;
  }

  const rehypePrettyCode: Plugin<[Options?]>;
  export default rehypePrettyCode;
}
