import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {AppBar, Toolbar, IconButton, Typography, Button, Divider, Drawer, List,
  ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Close from '@material-ui/icons/Close'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  navLink: {
    color: '#ffffff',
    textDecoration: 'none'
  },
  overlay: {
    position: 'fixed',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.1)'
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end'
  }

})

class Header extends React.Component {
  state = {
    open: false,
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render () {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={ this.handleDrawerOpen }>
            <MenuIcon/>
          </IconButton>
          <NavLink to='/' exact className={classes.navLink}>
            <Button color="inherit">Zhurik</Button>
          </NavLink>
          <Typography style={{flexGrow: 1}}> </Typography>
          <NavLink to='/login' className={classes.navLink}>
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink to='/add' className={classes.navLink}>
            <Button color="inherit">add own categoris</Button>
          </NavLink>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <Close/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          <NavLink to={{pathname: '/'}}>
            <ListItem button >
              <ListItemText primary={'Home'} />
            </ListItem>
          </NavLink>
          <NavLink to={{pathname: '/login'}}>
            <ListItem button>
              <ListItemText primary={'Login/Registration'} />
            </ListItem>
          </NavLink>
          <NavLink to={{pathname: '/add'}}>
            <ListItem button>
              <ListItemText primary={'Add own category'} />
            </ListItem>
          </NavLink>
        </List>
        <Divider/>
      </Drawer>
      { open ? <div onClick={this.handleDrawerClose} className={classes.overlay}> </div> : null }
    </div>
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)