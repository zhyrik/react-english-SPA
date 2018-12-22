import React, {Component} from 'react'
import CardForm from '../../auth/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'

export default class extends Component {

  render () {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start'}}>
        <CardForm First={NewCategory} Second={AddItem} title1={'Category'} title2={'items'} />
        <Items items={[1, 2, 3, 4, 5, 6, 7, 8]} style={{minWidth: '500px'}} />
      </div>
    )
  }
}
