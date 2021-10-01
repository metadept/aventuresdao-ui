import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.primary,
    border: `2px solid ${theme.custom.palette.border}`
  },
  expanded: {
    border: `2px solid ${theme.palette.primary.main}`
  },
  summaryRoot: {
    borderBottom: `1px solid ${theme.custom.palette.border}`
  },
  summaryContent: {
    margin: '0 !important'
  },
  expandIcon: {
    color: theme.palette.text.primary
  }
}));

const AvawareAccordion = ({
  className,
  summary,
  details,
}) => {
  const classes = useStyles();

  return (
    <Accordion
      classes={{
        root: clsx(classes.root, className),
        expanded: classes.expanded
      }}
    >
      <AccordionSummary
        expandIcon={
          <ContainedButton color='secondary'>
            <KeyboardArrowDownIcon className={classes.expandIcon} />
          </ContainedButton>
        }
        aria-controls='panel1c-content'
        id='panel1c-header'
        classes={{
          root: classes.summaryRoot,
          content: classes.summaryContent
        }}
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        {details}
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(AvawareAccordion);
