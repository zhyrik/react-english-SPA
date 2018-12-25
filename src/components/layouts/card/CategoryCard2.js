import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, CardActions, CardContent, Typography, IconButton, CardActionArea } from '@material-ui/core'
import {Favorite, Star} from '@material-ui/icons'
import {getArrayWords} from '../../../store/actions/learn'

const style ={
  wrap: {
    margin: '10px 0'
  }
}

const CategoryCard2 = props => {
  const muveToLearn = () => {
    console.log(props.categoris[props.id].items)
    props.getArrayWords(props.categoris[props.id].items)
    props.history.push('/learn/native')
  }

return <div style={style.wrap}>
  <Card>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <CardActionArea onClick={muveToLearn}>
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
}

function mapStateToProps (state) {
  return {
    categoris: state.getComponent.categoris
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getArrayWords: (item) => dispatch(getArrayWords(item))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryCard2))