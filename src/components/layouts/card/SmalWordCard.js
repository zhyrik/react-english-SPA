import React from 'react'
import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core'

export default props =>
<Card>
  <CardActionArea>
    <CardContent>
      <Typography variant="h6" component="h6" align="center">
        {props.word}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>