import React from 'react'
import WordCard from './card/wordCard'
import CategoryCard from './card/categorisCard'

export default props =>
<div style={{display: 'flex', justifyContent: 'center'}}>
  <WordCard />
  <WordCard />
  <WordCard />
  <CategoryCard />
</div>