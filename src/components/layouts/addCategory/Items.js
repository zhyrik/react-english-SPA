import React from 'react'
import CategoryCard2 from '../card/CategoryCard2'
import WordCard from '../card/WordCard'

export default class extends React.Component {

  render () {
    return (
      <div style={{minWidth: '50%', maxWidth: '70%'}}>
        <CategoryCard2 />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          { this.props.items.map((item) => <WordCard item={item} />) }
        </div>
      </div>
    )
  }
}