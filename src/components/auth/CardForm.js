import React, { Component } from 'react'
import { AppBar, Tabs, Card, Tab } from '@material-ui/core'

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
  const {First, Second} = this.props
  return <Card style={style}>
    <AppBar position="static">
      <Tabs value={this.state.value} fullWidth>
        <Tab label={this.props.title1} onClick={this.changeTab.bind(this, 0)} />
        <Tab label={this.props.title2} onClick={this.changeTab.bind(this, 1)}/>
      </Tabs>
    </AppBar>
    {this.state.value === 0 && <First />}
    {this.state.value === 1 && <Second />}
  </Card>
  }
}