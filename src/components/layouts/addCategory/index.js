import React, {Component} from 'react'
import {connect} from 'react-redux'
import {sentCategory} from '../../../store/actions/add'
import {Button} from '@material-ui/core'
import CardForm from '../card/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'


class Category {
  constructor (title, items){
    this.titleObj = title
    this.items = items
  }
}

class Main extends Component {

  sendCategory () {
    const newCategory = new Category(this.props.titleObj, this.props.items)
    this.props.sentCategory(newCategory)
  }

  render () {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start'}}>
        <div>
          <CardForm
            First={NewCategory}
            Second={AddItem}
            title1={'Category'}
            title2={'items'} 
            titleOgj={this.props.titleOgj}
          />
          <Button
            variant="contained"
            color="primary"
            style={{marginTop: -40}}
            onClick={this.sendCategory.bind(this)}
          >
            Create
          </Button>
        </div>
        <Items />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    items: state.add.items,
    titleObj: state.add.titleObj,
    category: state.add.category
  }
}
function mapDispatchToProps (dispatch) {
  return {
    sentCategory: item => dispatch(sentCategory(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)