import React, { Component } from 'react'
import { AppBar, Tabs, Card, Tab } from '@material-ui/core'
import PropTypes from 'prop-types'

const style = {
  maxWidth: 300,
  margin: '50px auto'
}

class CardForm extends Component {
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
          <Tab label={this.props.title1} onClick={this.changeTab.bind(this, 0)} key="0" />
          <Tab label={this.props.title2} onClick={this.changeTab.bind(this, 1)} key="1" />
        </Tabs>
      </AppBar>
      {this.state.value === 0 && <First key="3" />}
      {this.state.value === 1 && <Second key="4" />}
    </Card>
  }
}

CardForm.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  First: PropTypes.func.isRequired,
  Second: PropTypes.func.isRequired
}

export default CardForm