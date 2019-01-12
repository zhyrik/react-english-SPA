import React from 'react'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import MyCard from './card/CategoryCard2'
import { getCategory } from '../../store/actions/getComponent'
import { getCategorys } from '../../querys'
import { compose, graphql } from "react-apollo/index"
import Loader from '../common/Loader/Loader'


const style = {
  inputWrap: {
    borderRadius: 5,
    border: '1px solid black',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center'
  }
}

class Home extends React.Component{

  componentDidMount () {
    console.log(this.props.getCategorys)
    setTimeout(() => {console.log(this.props.getCategorys.categorys[0])}, 3000)
    //this.props.getCategory()
  }
  render () {
    let items = <Loader />

    if (false) {
      items = []
      //for (let i = 0; i < iterators.length; i++) {
        // items.push(<MyCard
        //   titleObj={this.props.getCategorys.categoris[i].title}
        //   id={iterators[i]}
        //   key={iterators[i]} />)
      //}
    }

    return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography style={{ flexGrow: 1 }}> </Typography>
            <div style={style.inputWrap}>
              <div style={{ marginRight: 10 }}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
              />
            </div>
            <Button variant="contained" color="primary" style={{padding: '13px 30px', marginLeft: 50}}>
              Primary
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items}
      </div>
    </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    categoris: state.getComponent.categoris
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategory: () => dispatch(getCategory())
  }
}


const withStore = connect(mapStateToProps, mapDispatchToProps)(Home)
const withApollo = compose(
  graphql(getCategorys, {name: "getCategorys"})
)(withStore)
export default withApollo