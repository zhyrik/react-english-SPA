import React, { Component } from 'react'
import { AppBar, Tabs, Card, Tab } from '@material-ui/core'
import Login from './Login'
import Registration from './Registration'

const style = {
  maxWidth: 300,
  margin: '50px auto'
}

export default class extends Component {
state = {
  value: 0
}
changeTab (value) {
  this.setState({
    value
  })
}

render() {
  return <Card style={style}>
    <AppBar position="static">
      <Tabs value={this.state.value} fullWidth>
        <Tab label="Login" onClick={this.changeTab.bind(this, 0)} />
        <Tab label="Registration" onClick={this.changeTab.bind(this, 1)}/>
      </Tabs>
    </AppBar>
    {this.state.value === 0 && <Login />}
    {this.state.value === 1 && <Registration />}
  </Card>
  }
}