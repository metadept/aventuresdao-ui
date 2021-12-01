import { memo } from 'react';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

import AvawareTokenIcon from 'components/AvawareTokenIcon'
import {
  FOOTER_LEFT_IMAGE_PATH,
  FOOTER_RIGHT_IMAGE_PATH,
} from 'utils/constants/image-paths'
import Logo from 'components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red'
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 480,
  },
  container: {
    position: 'relative',
    border: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  infoContainer: {
    zIndex: 9,
    position: 'relative'
  },
  leftImage: {
    width: 130,
    position: 'absolute',
    bottom: 0,
    left: 0,
    objectFit: 'contain',
    opacity: 0.3
  },
  rightImage: {
    width: 130,
    position: 'absolute',
    bottom: 0,
    right: 0,
    objectFit: 'contain',
    opacity: 0.3
  },
  icon: {
    width: '100%',
    objectFit: 'contain',
    borderRadius: '50%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.7)',
  },
  description: {
    fontSize: 14,
    maxHeight: 150,
    padding: theme.spacing(1),
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'unset'
    },
    '&::-webkit-scrollbar': {
      width: theme.spacing(0.5),
      backgroundColor: 'unset'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 2,
      backgroundColor: theme.custom.palette.border
    }
  },
  tokenContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  tokenIcon: {
    marginLeft: theme.spacing(0.5)
  },
}));

const MemberModal = ({
  open,
  setOpen,
  member
}) => {
  const classes = useStyles()

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{ style: { backdropFilter: 'blur(8px)' } }}
    >
      <div className={classes.paper}>
        <div className={classes.container}>
          <img
            alt='left-image'
            src={FOOTER_LEFT_IMAGE_PATH}
            className={classes.leftImage}
          />
          <img
            alt='right-image'
            src={FOOTER_RIGHT_IMAGE_PATH}
            className={classes.rightImage}
          />
          <div className={classes.infoContainer}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <Logo />
              </Grid>
              <Grid item xs={4} >
                <img
                  alt={member.id}
                  src={member.icon}
                  className={classes.icon}
                />
              </Grid>
              <Grid item xs={8} >
                <div className={classes.description}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </div>
              </Grid>
              <Grid item xs={12} >
                <div className={classes.tokenContainer}>
                  {member.tokens.map((token) => (
                    <AvawareTokenIcon
                      key={token}
                      size={30}
                      token={token}
                      className={classes.tokenIcon}
                    />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default memo(MemberModal)
