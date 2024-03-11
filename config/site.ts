export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "CookPal Genie",
  url: "https://chef-genie.app",
  ogImage: "https://chef-genie.app/og.png",
  description: "Recipe generator powered by OpenAi and ChatGPT.",
  mainNav: [
    {
      title: "Chef Genie Homepage",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/nicholast1998",
    github: "https://github.com/",
    docs: "https://cookpal.vercel.app",
  },
}
