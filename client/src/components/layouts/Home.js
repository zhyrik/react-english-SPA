import React from 'react'
import {connect} from 'react-redux'
import {AppBar, Toolbar, Typography, InputBase, Button} from '@material-ui/core'
import {Search} from '@material-ui/icons'
import MyCard from './card/CategoryCard2'
import {getCategory} from '../../store/actions/getComponent'


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
    this.props.getCategory()
  }
  render () {
    let items = null
    const iterators = Object.keys(this.props.categoris)
    if (iterators.length > 0) {
      items = []
      for (let i = 0; i < iterators.length; i++) {
        items.push(<MyCard
          titleObj={this.props.categoris[iterators[i]].titleObj}
          id={iterators[i]}
          key={iterators[i]} />)
      }
    }

    return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography style={{ flexGrow: 1 }}></Typography>
            <div style={style.inputWrap}>
              <div style={{marginRight: 10}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)