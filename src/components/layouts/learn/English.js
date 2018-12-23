import React from 'react'
import WordCard from '../card/WordCard'
import SmalWordCard from '../card/SmalWordCard'

export default props =>
<div>
  <div style={{display: 'flex'}}>
    <WordCard />
    <WordCard />
    <WordCard />
  </div>
  <SmalWordCard />
</div>
