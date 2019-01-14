import React from 'react'
import { Route, NavLink, withRouter} from 'react-router-dom'
import {AppBar, Toolbar, Button} from '@material-ui/core'
import MySlider from './Slider'
import Native from './Native'
import Loader from '../../common/Loader/Loader'
import { connect } from 'react-redux'
import {changeFlag, getArrayWords} from '../../../store/actions/learn'
import {getWordsQuery} from "../../../querys";
import {compose, graphql} from "react-apollo/index";



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

const Learn = props => {
  let Content = <Loader />
  if (!props.data.loading) {
    props.getArrayWords(props.data.word)
    Content = (
      <div>
        <div>
          <AppBar position="static" color="default">
            <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
              <NavLink to={{pathname: '/learn',
                search: props.location.search.slice(1)}} exact style={style.link}>
                <Button variant="contained" color="primary" style={style.button}>
                  Slider
                </Button>
              </NavLink>
              <NavLink to={{pathname: '/learn/native',
                search: props.location.search.slice(1)}} exact style={style.link}>
                <Button
                  variant="contained"
                  color="primary"
                  style={style.button}
                  onClick={props.changeFlag.bind(this, [false, true])}
                >
                  English
                </Button>
              </NavLink>
              <NavLink to={{pathname: '/learn/native',
                search: props.location.search.slice(1)}} exact style={style.link}>
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
        <Route path="/learn" exact component={MySlider}/>
        <Route path="/learn/native" exact component={Native} flag={true}/>
      </div>
    )
  }

  return Content
}

function mapDispatchToProps (dispatch) {
  return {
    changeFlag: flag => dispatch(changeFlag(flag)),
    getArrayWords: (item) => dispatch(getArrayWords(item))
  }
}

const withStore = connect(null, mapDispatchToProps)(withRouter(Learn))
const withApollo = compose(
  graphql(getWordsQuery, {
    options: props => {
      return {
        variables: {
          categoryId: props.location.search.slice(1)
        }
      }
    }
  })
)(withStore)
export default withApollo

