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

const styles = theme => ({
  addWrap: {
    padding: '0 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'start',
    }
  },
  leftItem: {
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    //marginRight: '30px',
    [theme.breakpoints.up('md')]: {
      marginRight: '30px',
    }
  },
  addButton: {
    margin: '-40px 20px 0 20px',
    width: '260px',
    [theme.breakpoints.down('md')]: {
      width: '220px'
    }
  }
})

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
      <div className={ classes.leftItem }>
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
    titleObj: state.add.titleObj
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.object,
  titleObj: PropTypes.object
}

const WithStyles = withStyles(styles)(Main)
const withStore = connect(mapStateToProps)(WithStyles)
const withApollo = compose(
  graphql(addCategory, {name: "addCategory"}),
  graphql(addWord, {name: "addWord"}),
  graphql(getIds, {name: "getIds"})
)(withStore)

export default withApollo