import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardForm from '../../auth/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'

class Main extends Component {

  render () {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start'}}>
        <CardForm First={NewCategory} Second={AddItem} title1={'Category'} title2={'items'} />
        <Items items={this.props.items} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.add.items
  }
}

export default connect(mapStateToProps)(Main)