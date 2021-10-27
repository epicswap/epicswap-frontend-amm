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
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '',
    // href: '',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '',
    // href: '',
  },
  {
    label: 'Referrals',
    // icon: 'ReferralsIcon',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  // {
  //   label: 'Info (Coming Soon)',
  //   // icon: 'ReferralsIcon',
  //   icon: 'InfoIcon',
  //   href: '',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Listings',
    icon: 'HandshakeIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x182Db9378Eb8FB4Eee006074bF4377c3D932620e',
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
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x182Db9378Eb8FB4Eee006074bF4377c3D932620e',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/epicswap/',
      },
      {
        label: 'Docs',
        href: 'https://epicswap.gitbook.io/epicswap/',
      },
      {
        label: 'Medium',
        href: 'https://epicswap.medium.com/',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: '',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
