import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default props =>
<AppBar position="static">
  <Toolbar>
    <IconButton color="inherit" aria-label="Menu">
      <MenuIcon />
    </IconButton>
    <NavLink to='/' exact style={{color: '#ffffff', textDecoration: 'none'}}>
      <Button color="inherit" >Zhurik</Button>
    </NavLink>
    <Typography style={{flexGrow: 1}}></Typography>
    <NavLink to='/login' style={{color: '#ffffff', textDecoration: 'none'}}>
      <Button color="inherit" >Login</Button>
    </NavLink>
  </Toolbar>
</AppBar>
