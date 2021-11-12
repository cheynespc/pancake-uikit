import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Who we Are",
    items: [
      {
        label: "Blog",
        href: "https://galagatoken.com/blog",
      },
      {
        label: "1UP",
        href: "https://docs.galagatoken.com",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Dev Info",
    items: [
      {
        label: "Github",
        href: "https://github.com/galagatoken",
      },
      {
        label: "Whitepaper",
        href: "https://docs.galagatoken.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/galagatoken",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/galagatoken",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/PancakeSwapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/galagatoken",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/galagatoken",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/galagatoken/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
