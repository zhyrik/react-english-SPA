import React, {Component} from 'react'
import {connect} from 'react-redux'
import CardForm from '../card/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'

class Main extends Component {

  render () {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start'}}>
        <CardForm
          First={NewCategory}
          Second={AddItem}
          title1={'Category'}
          title2={'items'} 
          titleOgj={this.props.titleOgj}
        />
        <Items />
      </div>
    )
  }
}

export default connect()(Main)