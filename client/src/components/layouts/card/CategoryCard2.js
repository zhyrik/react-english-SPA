import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Card, CardActions, CardContent, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { Favorite, Star } from '@material-ui/icons'

const style ={
  wrap: {
    margin: '10px 0'
  }
}

const CategoryCard2 = ({ categoris, title, learnLenguage, nativeLenguage, id, stars, history }) => {

  let counter = []
  for (let i=0; i<stars; i++) {
    counter.push(1)
  }


return <div style={style.wrap}>
  <Card>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CardActionArea onClick={ () => history.push('/learn?' + id ) }>
        <CardContent>
          <Typography component="h6" variant="h6" color="primary">
            { title }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${ learnLenguage } - ${ nativeLenguage }`}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="Share">
          { counter.map((i) => { return <Star key={i}/>}) }
        </IconButton>
      </CardActions>
    </div>
  </Card>
</div>
}

CategoryCard2.propTypes = {
  title: PropTypes.string.isRequired,
  learnLenguage: PropTypes.string.isRequired,
  nativeLenguage: PropTypes.string.isRequired,
  id: PropTypes.string,
  stars: PropTypes.number
}

export default withRouter(CategoryCard2)