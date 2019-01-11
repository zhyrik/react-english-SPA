import React, {Component} from 'react'
import {connect} from 'react-redux'
import { graphql, compose } from 'react-apollo'
import {Button} from '@material-ui/core'
import CardForm from '../card/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'
import { addCategory, addWord, getIds } from '../../../querys'

class Main extends Component {

  sendWords (res) {
    const words = this.props.items
    for (let i=0; i<words.length; i++) {
      const word = words[i]
      console.log('hello', word)
      this.props.addWord({
        variables: {
          native: word.native,
          english: word.english,
          url: word.url,
          categoryId: res.data.addCategory.id
        }
      })
    }
  }

  sendCategory () {
    const category = this.props.titleObj
    try {
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
        },
        refetchQueries: [{query: getIds}]
      })
      .then(res => {
        this.sendWords(res)
      })
    } catch (e) {
      console.log('e',e)
    }
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

const withStore = connect(mapStateToProps)(Main)
const withApollo = compose(
  graphql(addCategory, {name: "addCategory"}),
  graphql(addWord, {name: "addWord"}),
  graphql(getIds, {name: "getIds"})
)(withStore)

export default withApollo