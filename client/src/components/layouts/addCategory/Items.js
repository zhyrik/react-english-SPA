import React from 'react'
import {connect} from 'react-redux'
import CategoryCard2 from '../card/CategoryCard2'
import WordCard from '../card/WordCard'

class Items extends React.Component {

  render () {
    return (
      <div style={{minWidth: '50%', maxWidth: '70%'}}>
        {this.props.titleObj.title
          ? <CategoryCard2 titleObj={this.props.titleObj} />
          : null}
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          { this.props.items.map((item) => <WordCard item={item} flag={[true, true]}/>) }
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    titleObj: state.add.titleObj,
    items: state.add.items
  }
}

export default connect(mapStateToProps)(Items)