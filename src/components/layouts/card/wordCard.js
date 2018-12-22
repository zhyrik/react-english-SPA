import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'

const style ={
  wrap: {
    border: 'solid 1px black',
    width: 240,
    margin: '0 auto'
  }
}

export default props => {
  console.log('props', props.item.url);
return <div style={style.wrap}>
<Card>
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="140"
      image="https://cdn.vox-cdn.com/thumbor/-bKrYahnwqww9sH9v2h34v9ViA0=/0x114:585x559/1200x800/filters:focal(248x297:340x389)/cdn.vox-cdn.com/uploads/chorus_image/image/57272301/Screen_Shot_2017_10_23_at_10.16.32_AM.0.png"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="h6" align="center">
        Apple
      </Typography>
      <Typography variant="h6" component="h6" align="center">
        Яблуко
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</div>
}