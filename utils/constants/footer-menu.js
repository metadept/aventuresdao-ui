import LINKS from './links'

const CABBAGE_CASH_MENU = [
  {
    ...LINKS.HOME,
    IS_IN_LINK: true,
  },
  {
    HREF: 'https://app.pangolin.exchange/#/swap?outputCurrency=0xdb333724fae72b4253fc3d44c8270cbbc86d147b',
    TITLE: 'Buy CABAG'
  },
  {
    HREF: 'https://app.pangolin.exchange/#/add/AVAX/0xdb333724fae72b4253fc3d44c8270cbbc86d147b',
    TITLE: 'Add Liquidity'
  },
  {
    ...LINKS.DECOMISSIONED_FARM,
    IS_IN_LINK: true,
  },
]

const SOCIAL_MEDIA_MENU = [
  {
    HREF: 'https://twitter.com/CabbageCashh',
    TITLE: 'Twitter'
  },
  {
    HREF: 'https://t.me/cabbagecash',
    TITLE: 'Telegram'
  },
  {
    HREF: 'https://discord.com/invite/U6PctTT46Xh',
    TITLE: 'Discord'
  }
]

const PARTNERS_MENU = [
  {
    HREF: 'https://pangolin.exchange',
    TITLE: 'Pangolin'
  },
  {
    HREF: 'https://avaware.network/',
    TITLE: 'Avaware'
  },
  {
    HREF: 'https://tip.blue/',
    TITLE: 'Tip Blue'
  }
]

export {
  CABBAGE_CASH_MENU,
  SOCIAL_MEDIA_MENU,
  PARTNERS_MENU
}