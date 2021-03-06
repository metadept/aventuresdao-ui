
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import ANALYTICS from 'utils/constants/anlaytics'
import { DIVIDER_ICON_IMAGE_PATH } from 'utils/constants/image-paths'
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    minHeight: 250,
    padding: theme.spacing(3),
    margin: theme.spacing(4),
    border: `1px solid ${theme.custom.palette.border}`,
  },
}));

const responsive = {
  480: { items: 1 },
  680: { items: 2 },
  960: { items: 3 },
  1280: { items: 4 }
}

const Analytics = () => {
  const classes = useStyles()

  return (
    <main id='analytics' className={classes.root}>
      <img
        alt='divider'
        src={DIVIDER_ICON_IMAGE_PATH}
        className={classes.divider}
      />
      <Typography
        align='center'
        className={classes.title}
      >
        From the <span>Blog</span>
      </Typography>
      <div className={classes.container}>
        <AliceCarousel
          mouseDragEnabled
          autoPlay
          infinite
          ssrSilentMode={false}
          animationDuration={5000}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          className={classes.carousel}
        >
          {ANALYTICS.map((item, index) =>
            <div key={index} className={classes.itemContainer}>
              <Typography variant='h5'>
                {item.title}
              </Typography>
              <Typography variant='body2' gutterBottom>
                {item.description}
              </Typography>
              <OutlinedButton>
                Coming Soon
              </OutlinedButton>
            </div>
          )}
        </AliceCarousel>
      </div>
    </main>
  )
}

export default memo(Analytics)