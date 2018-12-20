import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default props =>
<AppBar position="static">
  <Toolbar>
    <IconButton color="inherit" aria-label="Menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
