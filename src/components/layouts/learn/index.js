import React from 'react'
import { Route, NavLink} from 'react-router-dom'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import MySlider from './Slider'
import Englisn from './English'
import Native from './Native'

const style = {
  button: {
    padding: '13px 30px',
    whiteSpace: 'nowrap'
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none'
  }
}

export default () =>(
<div>
  <div>
    <AppBar position="static" color="default">
      <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
        <NavLink to='/learn' exact style={style.link}>
          <Button variant="contained" color="primary" style={style.button}>
            Slider
          </Button>
        </NavLink>
        <NavLink to={{pathname: '/learn/native'}} exact style={style.link}>
          <Button variant="contained" color="primary" style={style.button}>
            English
          </Button>
        </NavLink>
        <NavLink to={{pathname: '/learn/native'}} exact style={style.link}>
          <Button variant="contained" color="primary" style={style.button}>
            Native
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  </div>
  <Route path="/learn" exact component={MySlider} />
  <Route path="/learn/native" exact component={Native} flag={true}/>
</div>
)

