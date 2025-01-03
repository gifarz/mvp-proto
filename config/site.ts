export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Partners",
      href: "#partners",
    },
    {
      label: "Product and Services",
      href: "#product",
    },
    {
      label: "About Us",
      href: "#aboutus",
    },
  ],
  navMenuItems: [
    {
      label: "Partners",
      href: "/partners",
    },
    {
      label: "Product and Services",
      href: "/product-and-services",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
