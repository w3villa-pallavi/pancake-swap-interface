import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.yffii.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.yffii.finance/#/pool",
      },
    ],
  },
  // {
  //   label: "Farms",
  //   icon: "FarmIcon",
  //   href: "/farms",
  //   status: status.LIVE,
  // },
  // {
  //   label: "Pools",
  //   icon: "PoolIcon",
  //   href: "/syrup",
  // },
  // {
  //   label: "Lottery",
  //   icon: "TicketIcon",
  //   href: "/lottery",
  // },
  // {
  //   label: "NFT",
  //   icon: "NftIcon",
  //   href: "/nft",
  // },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  // {
  //   label: "Info",
  //   icon: "InfoIcon",
  //   items: [
  //     {
  //       label: "Overview",
  //       href: "https://yffii.info",
  //     },
  //     {
  //       label: "Tokens",
  //       href: "https://yffii.info/tokens",
  //     },
  //     {
  //       label: "Pairs",
  //       href: "https://yffii.info/pairs",
  //     },
  //     {
  //       label: "Accounts",
  //       href: "https://yffii.info/accounts",
  //     },
  //   ],
  // },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.yffii.finance",
      },
      {
        label: "Github",
        href: "https://github.com/yffii",
      },
      {
        label: "Docs",
        href: "https://docs.yffii.finance",
      },
      {
        label: "Blog",
        href: "https://yffii.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/yffii",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/yffiiIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/yffii_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/yffiiVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/yffii_ita",
      },
      {
        label: "русский",
        href: "https://t.me/yffii_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/yffiiturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/yffiiPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/yffiiEs",
      },
      {
        label: "日本語",
        href: "https://t.me/yffiijp",
      },
      {
        label: "Français",
        href: "https://t.me/yffiifr",
      },
      {
        label: "Announcements",
        href: "https://t.me/yffiiAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/yffiiWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/yffii",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
