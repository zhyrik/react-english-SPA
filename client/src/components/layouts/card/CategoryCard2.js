import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardActions, CardContent, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { Favorite, Star } from '@material-ui/icons'
import { getArrayWords } from '../../../store/actions/learn'

const style ={
  wrap: {
    margin: '10px 0'
  }
}

const CategoryCard2 = ({ categoris, title, learnLenguage, nativeLenguage, id, stars }) => {

  const muveToLearn = () => {

  }

return <div style={style.wrap}>
  <Card>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <CardActionArea onClick={ muveToLearn }>
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
}

CategoryCard2.propTypes = {
  title: PropTypes.string.isRequired,
  learnLenguage: PropTypes.string.isRequired,
  nativeLenguage: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}


function mapDispatchToProps (dispatch) {
  return {
    getArrayWords: (item) => dispatch(getArrayWords(item))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CategoryCard2))