import React from 'react'
import {connect} from 'react-redux'
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

class Learn extends React.Component{
  render () {
    return (
      <div>
        <div>
          <AppBar position="static" color="default">
            <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
              <NavLink to='/learn' exact style={style.link}>
                <Button variant="contained" color="primary" style={style.button}>
                  Slider
                </Button>
              </NavLink>
              <NavLink to='/learn/englins' exact style={style.link}>
                <Button variant="contained" color="primary" style={style.button}>
                  English
                </Button>
              </NavLink>
              <NavLink to='/learn/native' exact style={style.link}>
                <Button variant="contained" color="primary" style={style.button}>
                  Native
                </Button>
              </NavLink>
            </Toolbar>
          </AppBar>
        </div>
        <Route path="/learn" exact component={MySlider} />
        <Route path="/learn/englins" exact component={Englisn} />
        <Route path="/learn/native" exact component={Native} />
      </div>
    )
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(mapStateToProps)(Learn)