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
<<<<<<< HEAD
    label: 'Lottery',
=======
    label: 'Lottery (Coming Soon)',
>>>>>>> parent of 4b0d154 (update)
    icon: 'TicketIcon',
    href: '',
    // href: '',
  },
  {
<<<<<<< HEAD
    label: 'IFO',
=======
    label: 'IFO (Coming Soon)',
>>>>>>> parent of 4b0d154 (update)
    icon: 'IfoIcon',
    href: '',
    // href: '',
  },
  {
<<<<<<< HEAD
    label: 'Referrals',
    // icon: 'ReferralsIcon',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Info (Coming Soon)',
    // icon: 'ReferralsIcon',
    icon: 'InfoIcon',
    href: '',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
=======
    label: 'Referrals (Coming Soon)',
    icon: 'HandshakeIcon',
    href: '',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.epicswap.io/lottery'
>>>>>>> parent of 4b0d154 (update)
  // },
  {
    label: 'Listings',
    icon: 'HandshakeIcon',
    items: [
      {
        label: 'PancakeSwap',
<<<<<<< HEAD
        href: 'https://pancakeswap.info/token/0x182Db9378Eb8FB4Eee006074bF4377c3D932620e',
=======
        href: 'https://pancakeswap.info/token/0xbA01b008d1530baB2b0DFeFd7a883028EA21d14E',
>>>>>>> parent of 4b0d154 (update)
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
<<<<<<< HEAD
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x182Db9378Eb8FB4Eee006074bF4377c3D932620e',
=======
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xbA01b008d1530baB2b0DFeFd7a883028EA21d14E',
>>>>>>> parent of 4b0d154 (update)
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
