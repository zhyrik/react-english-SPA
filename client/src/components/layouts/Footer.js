import React from 'react'
import { Paper, Typography, Fab } from '@material-ui/core'

const style = {
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
export default props => {
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
    <div style={style.wrap}>
      {links.map((link, index) => {
        return <Fab variant="contained" href={link.link} size= "small" style={style.social} key={index} >
        {link.icon}
      </Fab>
      })}
    </div>
    <Typography component="p" style={style.text} color="primary">
      Copyright © 2018 Oleh Zhurovskyi. All rights reserved.
    </Typography>
  </Paper>
</div>
}