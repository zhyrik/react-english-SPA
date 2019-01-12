import React from 'react'
import {connect} from 'react-redux'
import { graphql, compose } from 'react-apollo'
import {Button} from '@material-ui/core'
import CardForm from '../card/CardForm'
import NewCategory from './NewCategoty'
import AddItem from './AddItem'
import Items from './Items'
import { addCategory, addWord, getIds } from '../../../querys'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  addWrap: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '0 3%'
  },
  addButton: {
    margin: '-40px 20px 0 20px',
    width: '260px'
  }
}

const Main = ({ classes, items, titleObj, addWord, addCategory }) => {

  const sendWords = (res) => {
    for (let i=0; i<items.length; i++) {
      const word = items[i]
      addWord({
        variables: {
          native: word.native,
          english: word.english,
          url: word.url,
          categoryId: res.data.addCategory.id
        }
      })
    }
  }

  const sendCategory = () => {
    try {
      addCategory({
        variables: {
          title: titleObj.title,
          description: titleObj.description,
          learnLenguage: titleObj.learnLenguage,
          nativeLenguage: titleObj.nativeLenguage,
          stars: titleObj.stars,
          starsCount: titleObj.starsCount,
          learnCount: titleObj.learnCount,
          promo: titleObj.promo,
          author: titleObj.author
        },
        refetchQueries: [{ query: getIds }]
      })
      .then(res => {
        sendWords(res)
      })
    } catch (e) {
      console.log('e',e)
    }
  }

  return (
    <div className={ classes.addWrap }>
      <div >
        <CardForm
          First={ NewCategory }
          Second={ AddItem }
          title1={ 'Category' }
          title2={ 'items' }
          titleOgj={ titleObj }
        />
        <Button
          variant="contained"
          color="primary"
          className={ classes.addButton }
          onClick={ sendCategory }
        >
          Create
        </Button>
      </div>
      <Items />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    items: state.add.items,
    titleObj: state.add.titleObj,
    category: state.add.category
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object,
  titleObj: PropTypes.object,
  addWord: PropTypes.func,
  addCategory: PropTypes.func
}

const WithStyles = withStyles(styles)(Main)
const withStore = connect(mapStateToProps)(WithStyles)
const withApollo = compose(
  graphql(addCategory, {name: "addCategory"}),
  graphql(addWord, {name: "addWord"}),
  graphql(getIds, {name: "getIds"})
)(withStore)

export default withApollo