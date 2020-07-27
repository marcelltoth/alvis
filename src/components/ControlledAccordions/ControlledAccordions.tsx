import React, { ReactNode } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { rgba } from 'polished'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordion: {
      boxShadow: 'none',
      margin: 0,
      '&.Mui-expanded': {
        backgroundColor: rgba(0, 0, 0, 0.1),
      },
    },
  })
)

type Props = {
  id: string
  children: ReactNode
  title: ReactNode
}

function ControlledAccordions({ children, title, id }: Props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordion}
        expanded={expanded === id}
        onChange={handleChange(id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {title ? <div className={classes.heading}>{title}</div> : null}
        </AccordionSummary>
        <>{children}</>
      </Accordion>
    </div>
  )
}

export default React.memo(ControlledAccordions)
