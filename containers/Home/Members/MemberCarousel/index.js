
import { memo } from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { Link, Typography } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import AvawareTokenIcon from 'components/AvawareTokenIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import { FOOTER_RIGHT_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
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
  imageContainer: {
    minWidth: 95,
    width: 95,
    height: 95,
    borderRadius: '50%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
  },
  icon: {
    width: 95,
    objectFit: 'contain',
    borderRadius: '50%'
  },
  description: {
    position: 'relative',
    zIndex: 2,
    marginLeft: theme.spacing(2),
  },
  twitter: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  rightImage: {
    height: 120,
    position: 'absolute',
    top: 24,
    right: 0,
    objectFit: 'contain',
    opacity: 0.3,
  },
  tokenContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16
  },
  tokenIcon: {
    marginLeft: theme.spacing(0.5)
  }
}));

const responsive = {
  480: { items: 1 },
  680: { items: 2 },
  960: { items: 3 },
  1280: { items: 4 },
}

const MemberCarousel = ({
  members
}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <AliceCarousel
        autoPlay
        infinite
        animationDuration={3000}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        ssrSilentMode={false}
        className={classes.carousel}
      >
        {
          members.map((item) =>
            <div key={item.id} className={classes.itemContainer}>
              <img
                alt='right-image'
                src={FOOTER_RIGHT_IMAGE_PATH}
                className={classes.rightImage}
              />
              <Link href={item.twitter} target='_blank' rel='noreferrer' className={classes.twitter}>
                <TwitterIcon />
              </Link>
              <div className={classes.tokenContainer}>
                {item.tokens.map((token) => (
                  <AvawareTokenIcon
                    key={token}
                    size={25}
                    token={token}
                    className={classes.tokenIcon}
                  />
                ))}
              </div>
              <div className={classes.imageContainer}>
                <Image
                  alt={item.id}
                  src={item.icon}
                  width={95}
                  height={95}
                  className={classes.icon}
                />
              </div>
              <Typography variant='h5' align='center' className={classes.description} >
                {item.description}
              </Typography>
            </div>
          )
        }
      </AliceCarousel>
    </div>
  )
}

export default memo(MemberCarousel)