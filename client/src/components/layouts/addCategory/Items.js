import React from 'react'
import { connect } from 'react-redux'
import CategoryCard2 from '../card/CategoryCard2'
import WordCard from '../card/WordCard'

const Items = ({ titleObj, items }) => (
  <div >
    { titleObj.title
      ? <CategoryCard2
          title={ titleObj.title }
          learnLenguage={ titleObj.learnLenguage }
          nativeLenguage={ titleObj.nativeLenguage }
          stars={ titleObj.stars }
      />
      : null }
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      { items.map((item) => <WordCard item={ item } flag={ [true, true] }/>) }
    </div>
  </div>
)

function mapStateToProps (state) {
  return {
    titleObj: state.add.titleObj,
    items: state.add.items
  }
}

export default connect(mapStateToProps)(Items)