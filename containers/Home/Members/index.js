
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import MemberCarousel from './MemberCarousel'
import { DIVIDER_ICON_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #EBF6F5 100%)',
    padding: theme.spacing(8, 0)
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
    '& span': {
      color: theme.palette.text.secondary
    }
  },
  divider: {
    width: 214,
    objectFit: 'contain',
    margin: theme.spacing(2, 0)
  },
}));


const Members = () => {
  const classes = useStyles()

  return (
    <main id='members' className={classes.root}>
      <img
        alt='divider'
        src={DIVIDER_ICON_IMAGE_PATH}
        className={classes.divider}
      />
      <Typography
        align='center'
        className={classes.title}
      >
        AVentures <span>DAO Members</span>
      </Typography>
      <Typography variant='h5' align='center' >
        Crypto veterans, key opinion leaders and developers
      </Typography>
      <MemberCarousel members={firstMembers} />
      <MemberCarousel members={secondMembers} />
    </main>
  )
}

export default memo(Members)

const MEMBER_ITEMS = [
  {
    id: 'Jomari_P',
    icon: 'https://pbs.twimg.com/profile_images/1444996045583241216/UF_Aj4IH_400x400.jpg',
    twitter: 'https://twitter.com/Jomari_P',
    description: 'Jomari Peterson',
    tokens: ['SNOB', 'AVAX']
  },
  {
    id: 'meta',
    icon: 'https://pbs.twimg.com/profile_images/1449375400694517763/PBjfXdDo_400x400.png',
    twitter: 'https://twitter.com/m3t4farms',
    description: 'Meta',
    tokens: ['AVAX']
  },
  {
    id: 'Best_coder_NA',
    icon: 'https://pbs.twimg.com/profile_images/1448147561412366341/tNATkKxW_400x400.jpg',
    twitter: 'https://twitter.com/Best_coder_NA',
    description: 'Leo Pangolin',
    tokens: ['SNOB', 'PNG']
  },
  {
    id: 'cheetah_slow',
    icon: 'https://pbs.twimg.com/profile_images/1395883744989483014/1G-oYj2E_400x400.jpg',
    twitter: 'https://twitter.com/cheetah_slow',
    description: 'Slowcheetah',
    tokens: ['PNG']
  },
  {
    id: 'CederNets',
    icon: 'https://pbs.twimg.com/profile_images/1372237642054598656/czQum58J_400x400.jpg',
    twitter: 'https://twitter.com/CederNets',
    description: 'CederNets',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'DefiCashflows',
    icon: 'https://pbs.twimg.com/profile_images/1433648744537501716/_aUqZfEo_400x400.jpg',
    twitter: 'https://twitter.com/DefiCashflows',
    description: 'DΞFiCashflow$',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'rogerclu',
    icon: 'https://pbs.twimg.com/profile_images/1436434899532238854/zfIyr3aT_400x400.jpg',
    twitter: 'https://twitter.com/rogerclu',
    description: 'Roger Lu',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'oztimoore',
    icon: 'https://pbs.twimg.com/profile_images/1428675103307489284/i2oynoqA_400x400.jpg',
    twitter: 'https://twitter.com/oztimoore',
    description: 'Emre Oztimur',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'TamerOvutmen',
    icon: 'https://pbs.twimg.com/profile_images/1449719387670433794/rAxhYPIz_400x400.jpg',
    twitter: 'https://twitter.com/TamerOvutmen',
    description: 'Tamer Ovutmen, PhD',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'crytovan',
    icon: 'https://pbs.twimg.com/profile_images/1385467793362104321/H89xKtS4_400x400.jpg',
    twitter: 'https://twitter.com/crytovan',
    description: 'Cryptovan',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'jtrollip',
    icon: 'https://pbs.twimg.com/profile_images/1443337812485443585/E6gaDQfK_400x400.jpg',
    twitter: 'https://twitter.com/jtrollip',
    description: 'Justin Trollip',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'ravageur77',
    icon: 'https://pbs.twimg.com/profile_images/1437356572951392261/HlSm_zcT_400x400.jpg',
    twitter: 'https://twitter.com/ravageur77',
    description: 'Ravageur',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'connorbode',
    icon: 'https://pbs.twimg.com/profile_images/1320105220576321537/6jrxpmlL_400x400.jpg',
    twitter: 'https://twitter.com/connorbode',
    description: 'Connor Bode',
    tokens: ['PNG', 'AVAX']
  },
  {
    id: 'Wizardara',
    icon: 'https://pbs.twimg.com/profile_images/1320105220576321537/6jrxpmlL_400x400.jpg',
    twitter: 'https://twitter.com/Wizardara',
    description: 'Mr Wizard',
    tokens: ['PNG', 'AVAX']
  },
]

const middleIndex = Math.ceil(MEMBER_ITEMS.length / 2);
const firstMembers = MEMBER_ITEMS.splice(0, middleIndex);
const secondMembers = MEMBER_ITEMS.splice(-middleIndex);