
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Typography } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import TwitterIcon from 'components/Icons/TwitterIcon'
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
  container: {
    width: '100%',
    margin: theme.spacing(5, 0)
  },
  carousel: {
    width: '100%',
  },
  itemContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4, 3),
    margin: theme.spacing(4),
    border: `1px solid ${theme.custom.palette.border}`,
  },
  icon: {
    width: 77,
    objectFit: 'containe',
    marginRight: theme.spacing(1),
    borderRadius: '50%'
  },
  twitter: {
    position: 'absolute',
    top: 16,
    right: 16
  }
}));

const responsive = {
  480: { items: 1 },
  680: { items: 2 },
  960: { items: 3 },
  1280: { items: 4 }
}

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
        Avalanche <span>OG Squad</span>
      </Typography>
      <Typography variant='h5' align='center' >
        {`Meet Adventures team: analysts, crypto veterans & key opinion leaders.`}
      </Typography>
      <div className={classes.container}>
        <AliceCarousel
          autoPlay
          infinite
          animationDuration={5000}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          ssrSilentMode={false}
          className={classes.carousel}
        >
          {
            MEMBER_ITEMS.map((item) =>
              <div key={item.id} className={classes.itemContainer}>
                <Link href={item.twitter} target='_blank' rel='noreferrer' className={classes.twitter}>
                  <TwitterIcon />
                </Link>
                <img
                  alt={item.id}
                  src={item.icon}
                  className={classes.icon}
                />
                <Typography variant='h5' align='center' >
                  {item.description}
                </Typography>
              </div>
            )
          }
        </AliceCarousel>
      </div>
    </main>
  )
}

export default memo(Members)

const MEMBER_ITEMS = [
  {
    id: 'Jomari_P',
    icon: 'https://pbs.twimg.com/profile_images/1444996045583241216/UF_Aj4IH_400x400.jpg',
    twitter: 'https://twitter.com/Jomari_P',
    description: 'Jomari Peterson'
  },
  {
    id: 'meta',
    icon: 'https://pbs.twimg.com/profile_images/1426643075934429197/SfsoqySm_400x400.jpg',
    twitter: 'https://twitter.com/m3t4farms',
    description: 'meta'
  },
  {
    id: 'Best_coder_NA',
    icon: 'https://pbs.twimg.com/profile_images/1443348479204421633/3sxlv1eN_400x400.jpg',
    twitter: 'https://twitter.com/Best_coder_NA',
    description: 'Leo🔺Pangolin'
  },
  {
    id: 'cheetah_slow',
    icon: 'https://pbs.twimg.com/profile_images/1395883744989483014/1G-oYj2E_400x400.jpg',
    twitter: 'https://twitter.com/cheetah_slow',
    description: 'Justin  (hariseldon23)- Pangolin '
  },
  {
    id: 'CederNets',
    icon: 'https://pbs.twimg.com/profile_images/1372237642054598656/czQum58J_400x400.jpg',
    twitter: 'https://twitter.com/CederNets',
    description: 'CederNets'
  },
  {
    id: 'DefiCashflows',
    icon: 'https://pbs.twimg.com/profile_images/1433648744537501716/_aUqZfEo_400x400.jpg',
    twitter: 'https://twitter.com/DefiCashflows',
    description: 'DΞFiCashflow$ 🔺'
  },
  {
    id: 'rogerclu',
    icon: 'https://pbs.twimg.com/profile_images/1436434899532238854/zfIyr3aT_400x400.jpg',
    twitter: 'https://twitter.com/rogerclu',
    description: 'Roger Lu 🔺'
  },
  {
    id: 'oztimoore',
    icon: 'https://pbs.twimg.com/profile_images/1428675103307489284/i2oynoqA_400x400.jpg',
    twitter: 'https://twitter.com/oztimoore',
    description: 'Emre Oztimur🔺🌖'
  },
]
