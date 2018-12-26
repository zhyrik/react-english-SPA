import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'

const style ={
  wrap: {
    border: 'solid 1px black',
    width: 240,
    margin: '0 auto'
  }
}

export default props => 
<div style={style.wrap}>
  <Card>
    <CardActionArea onClick={props.action}>
      <CardMedia
        component="img"
        alt={props.item.native}
        height="140"
        image={props.item.url}
        title="Contemplative Reptile"
      />
      <CardContent>
        {props.flag
          ? <Typography gutterBottom variant="h6" component="h6" align="center">
              {props.item.english}
            </Typography>
          : <Typography variant="h6" component="h6" align="center">
              {props.item.native}
            </Typography>
        }
      </CardContent>
    </CardActionArea>
  </Card>
</div>
