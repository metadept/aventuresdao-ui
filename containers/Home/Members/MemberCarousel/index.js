
import { memo } from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link, Typography } from '@material-ui/core'

import AvawareTokenIcon from 'components/AvawareTokenIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import { FOOTER_RIGHT_IMAGE_PATH } from 'utils/constants/image-paths'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5, 0)
  },
  itemContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    borderRadius: 2,
    border: `2px solid ${theme.custom.palette.border}`,
  },
  headerContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
  },
  imageContainer: {
    minWidth: 80,
    width: 80,
    height: 80,
    borderRadius: '50%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
  },
  icon: {
    width: 80,
    objectFit: 'contain',
    borderRadius: '50%'
  },
  name: {
    position: 'relative',
    zIndex: 2,
    marginLeft: theme.spacing(1),
  },
  twitter: {
    position: 'absolute',
    top: 0,
    right: 0
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
    bottom: 0,
    right: 0
  },
  tokenIcon: {
    marginLeft: theme.spacing(0.5)
  },
  description: {
    padding: theme.spacing(3, 0)
  }
}));

const MemberCarousel = ({
  members
}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container spacing={4}>
        {
          members.map((item) =>
            <Grid key={item.id} item xs={12} sm={6} md={3}>
              <div className={classes.itemContainer}>
                <img
                  alt='right-image'
                  src={FOOTER_RIGHT_IMAGE_PATH}
                  className={classes.rightImage}
                />
                <div className={classes.headerContainer}>
                  <Link href={item.twitter} target='_blank' rel='noreferrer' className={classes.twitter}>
                    <TwitterIcon />
                  </Link>
                  <div className={classes.imageContainer}>
                    <Image
                      alt={item.id}
                      src={item.icon}
                      width={95}
                      height={95}
                      className={classes.icon}
                    />
                  </div>
                  <Typography variant='h5' align='center' className={classes.name} >
                    {item.name}
                  </Typography>
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
                </div>
                <Typography variant='body2' className={classes.description} >
                  {item.description}
                </Typography>
              </div>
            </Grid>
          )
        }
      </Grid>
    </div>
  )
}

export default memo(MemberCarousel)