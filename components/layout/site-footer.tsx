import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="sticky top-[100vh] mt-6 w-full border-t p-2">
      <p className="text-center text-sm leading-loose text-muted-foreground">
        Built by{" "}
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          NICO
        </a>
        . New features coming soon 🎉 {" "}
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Twitter
        </a>
      </p>
    </footer>
  )
}
