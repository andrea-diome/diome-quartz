import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Diome",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://diome.xyz",
    ignorePatterns: [
  	"Do Not Publish/**",
  	"Maps/**",
  	"Templates/**",
  	"PDFs/**",
	"7 ⛏ Gardening Tools/**",
  	"6 🍂 Compost/**",
  	"5 🌰 Seeds/**",
  	".obsidian",
	],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Archivo",
        body: "Archivo",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#FFFCF0",
          lightgray: "#E6E4D9",
          gray: "#CECDC3",
          darkgray: "#6F6E69",
          dark: "#100F0F",
          secondary: "#66800B",
          tertiary: "#3AA99F",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#24837B",
        },
        darkMode: {
          light: "#100F0F",
          lightgray: "#282726",
          gray: "#6F6E69",
          darkgray: "#CECDC3",
          dark: "#E6E4D9",
          secondary: "#879A39",
          tertiary: "#24837B",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#3AA99F",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
