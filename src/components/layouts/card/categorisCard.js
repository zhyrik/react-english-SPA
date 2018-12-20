import React from 'react'
import {Card, CardActions, CardMedia, CardContent, Typography, IconButton, CardActionArea } from '@material-ui/core'
import {Favorite, Star} from '@material-ui/icons'

const style ={
  wrap: {
    border: 'solid 1px black',
    width: 240
  }
}

export default props =>
<div style={style.wrap}>
<Card>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image="https://cdn.vox-cdn.com/thumbor/-bKrYahnwqww9sH9v2h34v9ViA0=/0x114:585x559/1200x800/filters:focal(248x297:340x389)/cdn.vox-cdn.com/uploads/chorus_image/image/57272301/Screen_Shot_2017_10_23_at_10.16.32_AM.0.png"
      title="Live from space album cover"
      alt="Live from space album cover"
    />
    <div>
      <CardContent>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Miller
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="Share">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </IconButton>
      </CardActions>
    </div>
  </CardActionArea>
</Card>
</div>