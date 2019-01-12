import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  navLink: {
    color: '#ffffff',
    textDecoration: 'none'
  }
}

const Header = ({ classes }) =>
<div>
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <NavLink to='/' exact className={ classes.navLink }>
        <Button color="inherit" >Zhurik</Button>
      </NavLink>
      <Typography style={{flexGrow: 1}}> </Typography>
      <NavLink to='/login' className={ classes.navLink }>
        <Button color="inherit" >Login</Button>
      </NavLink>
      <NavLink to='/add' className={ classes.navLink }>
        <Button color="inherit" >add own categoris</Button>
      </NavLink>
    </Toolbar>
  </AppBar>
</div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)