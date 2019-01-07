import React from 'react'
import { Route, NavLink} from 'react-router-dom'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import MySlider from './Slider'
import Native from './Native'
import { connect } from 'react-redux'
import { changeFlag } from '../../../store/actions/learn'

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

function mapDispatchToProps (dispatch) {
  return {
    changeFlag: flag => dispatch(changeFlag(flag))
  }
}

export default connect(null, mapDispatchToProps)(props =>(
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
          <Button
            variant="contained"
            color="primary"
            style={style.button}
            onClick={props.changeFlag.bind(this, [false, true])}
          >
            English
          </Button>
        </NavLink>
        <NavLink to={{pathname: '/learn/native'}} exact style={style.link}>
        <Button
            variant="contained"
            color="primary"
            style={style.button}
            onClick={props.changeFlag.bind(this, [true, false])}
          >
            Native
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  </div>
  <Route path="/learn" exact component={MySlider} />
  <Route path="/learn/native" exact component={Native} flag={true}/>
</div>
))

