import { MenuEntry } from 'flydex-uikit'

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
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.epicswap.io/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.epicswap.io/pools'
  },
  // {
  //   label: 'Lottery (Coming Soon)',
  //   icon: 'TicketIcon',
  //   href: '',
  //   // href: '',
  // },
  // {
  //   label: 'IFO (Coming Soon)',
  //   icon: 'IfoIcon',
  //   href: '',
  //   // href: '',
  // },
  // {
  //   label: 'Referrals (Coming Soon)',
  //   icon: 'HandshakeIcon',
  //   href: '',
  // },
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
        href: 'https://pancakeswap.info/token/0x0041Bac4BEeDFe967CAA491ce058f61C14dF5CFb',
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
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x0041Bac4BEeDFe967CAA491ce058f61C14dF5CFb',
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
