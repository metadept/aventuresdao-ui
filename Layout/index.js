
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useFarm } from 'contexts/farm-context'
import AvawareLoading from 'components/AvawareLoading'
import TopAppBar from './TopAppBar'
import StatusBar from './StatusBar'
import Footer from './Footer'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative'
  },
  container: {
    flex: '1 0 auto'
  },
}));

const Layout = ({
  children
}) => {
  const classes = useStyles();
  const { loading } = useFarm()

  return (
    <main className={classes.root}>
      {loading && <AvawareLoading loading={loading} />}
      <TopAppBar />
      <StatusBar />
      <div className={classes.container}>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default memo(Layout);
