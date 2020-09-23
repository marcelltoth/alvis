import React, { ReactNode } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CodeExecutionEditorPanel from './CodeExecutionEditorPanel'
import { Reflex, FirsReflextElement, SecondReflexElement } from 'components'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        minHeight: '600px',
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    content: {
      padding: 0,
      '&:last-child': {
        padding: 0,
      },
    },
  })
)

type Props = {
  cardActions?: ReactNode
}

const CodeExecutionPanel = () => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div>kndf</div>
    // <Card className={classes.root}>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    //   <CardContent className={classes.content}>

    //   </CardContent>
    // </Card>
    // <CodeExecutionEditorPanel />
  )
}
export default CodeExecutionPanel

{
  /* <Typography
className={classes.title}
color="textSecondary"
gutterBottom
>
Word of the Day
</Typography>
<Typography variant="h5" component="h2">
be{bull}nev{bull}o{bull}lent
</Typography>
<Typography className={classes.pos} color="textSecondary">
adjective
</Typography>
<Typography variant="body2" component="p">
well meaning and kindly.
<br />
{'"a benevolent smile"'}
</Typography> */
}

// import React from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: any;
//   value: any;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: any) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

// export default function FullWidthTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index: number) => {
//     setValue(index);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//     </div>
//   );
// }
