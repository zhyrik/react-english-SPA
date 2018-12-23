import React from 'react'
import {Card, CardActions, CardContent, Typography, IconButton, CardActionArea } from '@material-ui/core'
import {Favorite, Star} from '@material-ui/icons'

const style ={
  wrap: {
    margin: '10px 0'
  }
}

export default props =>
<div style={style.wrap}>
  <Card>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <CardActionArea >
        <CardContent>
          <Typography component="h6" variant="h6" color="primary">
            {props.titleObj.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${props.titleObj.learnLenguage} - ${props.titleObj.nativeLenguage}`}
          </Typography>
        </CardContent>
      </CardActionArea>

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
  </Card>
</div>