import React from 'react'
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core'

const tileData = [
  {
    img: 'https://i.dietdoctor.com/wp-content/uploads/2016/03/Low-Carb-Fruits-1-2400x1441-1.jpg?auto=compress%2Cformat&w=1600&h=961&fit=crop',
    title: 'Fruits',
    description: 'Lorem ipsum dolor jhjkh jkh kjmhkmh kl,jkljkl,j  kljkl j;klj hgf ghf ghf fkadsjfkljds kfdjsalkfj 11...'
  }
]

export default props =>
<GridList cellHeight={180} style={{width: 250, margin: 10}}>
  {tileData.map(tile => (
    <GridListTile key={tile.title} cols={2} style={{display: 'flex'}}>
      <img src={tile.img} alt={tile.title} />
      <GridListTileBar
        title={tile.title}
        subtitle={<span>by: {tile.description}</span>}
      />
    </GridListTile>
  ))}
</GridList>