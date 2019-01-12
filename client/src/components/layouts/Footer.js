import React from 'react'
import { Paper, Typography, Fab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  text: {
    textAlign: 'center'
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center'
  },
  social: {
    margin: 10
  }
}

const Footer = ({ classes }) => {
  const links = [
    {
      link: 'https://www.facebook.com/zhyriki',
      icon: 'fb'
    },
    {
      link: 'https://www.facebook.com/zhyriki',
      icon: 'fb'
    },
    {
      link: 'https://www.facebook.com/zhyriki',
      icon: 'fb'
    },
    {
      link: 'https://www.facebook.com/zhyriki',
      icon: 'fb'
    },
  ]

  return <div>
    <Paper elevation={1} >
      <div className={ classes.wrap }>
        {links.map((link, index) => {
          return <Fab
            variant="contained"
            href={link.link}
            size= "small"
            key={index}
            className={ classes.social }
          >
          {link.icon}
        </Fab>
        })}
      </div>
      <Typography component="p" className={ classes.text } color="primary">
        Copyright © 2018 Oleh Zhurovskyi. All rights reserved.
      </Typography>
    </Paper>
  </div>
}

export default withStyles(styles)(Footer)