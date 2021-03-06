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
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.epicswap.io/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.epicswap.io/pools'
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
        // href: 'https://pancakeswap.info/token/0x182Db9378Eb8FB4Eee006074bF4377c3D932620e',
        href: '',
      },
      {
        label: 'CoinGecko',
        // href: 'https://www.coingecko.com/en/coins/goose-finance',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        // href: 'https://coinmarketcap.com/currencies/goose-finance/',
        href: '',
      },
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x3bf79bf0c50db9adbbe8a0f6f3a198288174fc76',
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
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: '',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: '',
  // },
]

export default config
