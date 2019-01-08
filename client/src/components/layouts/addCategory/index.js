import React, {Component} from 'react'
import {connect} from 'react-redux'
import { graphql, compose } from 'react-apollo'
import {Button} from '@material-ui/core'
import CardForm from '../card/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'
import { addCategory, addWord } from '../../../querys'

class Main extends Component {

  sendCategory () {
    const category = this.props.titleObj
    this.props.addCategory({
      variables: {
        title: category.title,
        description: category.description,
        learnLenguage: category.learnLenguage,
        nativeLenguage: category.nativeLenguage,
        stars: category.stars,
        starsCount: category.starsCount,
        learnCount: category.learnCount,
        promo: category.promo,
        author: category.author
      }
      // refetchQueries: [{query: getBooksQuery}]
    })
      .then(console.log(this.props))
  }

  render () {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start'}}>
        <div >
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
            style={{margin: '-40px 20px 0 20px', width: '260px'}}
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

const Store = connect(mapStateToProps)(Main)
const Apollo = compose(
  graphql(addCategory, {name: "addCategory"}),
  graphql(addWord, {name: "addWord"})
)(Store)

export default Apollo