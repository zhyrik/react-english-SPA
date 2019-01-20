import React from 'react'
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import { getCategorys } from '../../querys'
import { compose, graphql } from "react-apollo/index"
import PropTypes from 'prop-types'
import MyCard from './card/CategoryCard2'
import Loader from '../common/Loader/Loader'

const styles = {
  appBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputWrap: {
    borderRadius: 5,
    border: '1px solid black',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    marginRight: 10
  },
  button: {
    padding: '13px 30px',
    marginLeft: 50
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}


const Home = ({ classes, getCategorys }) => {

  let items = <Loader />

  if (!getCategorys.loading) {
    items = []
    const categorys = getCategorys.categorys
    for (let i = 0; i < categorys.length; i++) {
      const category = categorys[i]
      items.push(<MyCard
        title={ category.title }
        learnLenguage={ category.learnLenguage }
        nativeLenguage={ category.nativeLenguage }
        id={ category.id }
        stars={ category.stars }
        key={ category.id } />)
    }
  }

  return (
  <div>
    <AppBar position="static" color="default" className={ classes.appBar }>
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}> </Typography>
        <div className={ classes.inputWrap }>
          <Search className={ classes.search }/>
          <InputBase
            placeholder="Search…"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={ classes.button }
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>

    <div className={ classes.items }>
      { items }
    </div>
  </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  getCategorys: PropTypes.object.isRequired
}

const withApollo = compose(
  graphql(getCategorys, {name: "getCategorys"})
)( withStyles(styles)(Home))
export default withApollo