
import { memo } from 'react'
import { Typography } from '@material-ui/core'

import AvawareDialog from 'components/AvawareDialog'

const AvawareConfirmDialog = ({
  text = 'Are you sure to proceed this operation?',
  ...rest
}) => {
  return (
    <AvawareDialog {...rest}>
      <Typography color='textPrimary' variant='h5' align='center'>
        {text}
      </Typography>
    </AvawareDialog>
  );
}

export default memo(AvawareConfirmDialog)