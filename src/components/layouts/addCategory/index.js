import React, {Component} from 'react'
import CardForm from '../../auth/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'

export default class extends Component {

  render () {
    return (
      <CardForm First={NewCategory} Second={AddItem} title1={'Category'} title2={'items'} />
    )
  }
}
