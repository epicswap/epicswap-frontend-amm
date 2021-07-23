import { MenuEntry } from '@epicswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.epicswap.io/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Code',
    icon: 'FarmIcon',
    href: 'https://www.epicswap.io/code'
  },
  {
    label: 'Developing',
    icon: 'PoolIcon',
    href: 'https://www.epicswap.io/developing'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.epicswap.io/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xbA01b008d1530baB2b0DFeFd7a883028EA21d14E',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xbA01b008d1530baB2b0DFeFd7a883028EA21d14E',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/epicswap/",
      },
      {
        label: "Docs",
        href: "https://epicswap.gitbook.io/epicswap/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.epicswap.io/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config
