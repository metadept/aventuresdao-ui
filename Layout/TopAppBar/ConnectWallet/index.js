import { memo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useWallets } from 'contexts/wallet-context'
import AvawareIdenticon from 'components/AvawareIdenticon'
import ContainedButton from 'components/UI/Buttons/ContainedButton'
import getEllipsis from 'utils/helpers/getEllipsis'

const useStyles = makeStyles(() => ({
  accountContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
  }
}));

const ConnectWallet = () => {
  const classes = useStyles()
  const { setIsWalletDialog } = useWallets()
  const { account, active, error, deactivate } = useWeb3React();

  const walletHandler = () => {
    if ((active || error)) {
      deactivate();
      return
    }
    setIsWalletDialog(true)
  }

  return (
    (active || error)
      ? (
        <div
          className={classes.accountContainer}
          onClick={walletHandler}
        >
          <AvawareIdenticon value={account} size={25} />
          <Typography
            variant='caption'
            color='textPrimary'
            className={classes.account}
          >
            {getEllipsis(account || '')}
          </Typography>
        </div>
      ) : (
        <ContainedButton
          onClick={walletHandler}
        >
          Connect
        </ContainedButton>
      )
  );
};

export default memo(ConnectWallet);
