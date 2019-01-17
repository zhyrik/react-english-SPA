import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTitleObj} from '../../../store/actions/add'
import {TextField, Button} from '@material-ui/core'
import Form from '../card/Form'

class TitleObj {
  constructor (title, description, learnLenguage, nativeLenguage) {
    this.title = title
    this.description = description
    this.learnLenguage = learnLenguage
    this.nativeLenguage = nativeLenguage
    this.stars = 5
    this.starsCount = 0
    this.learnCount = 0
    this.promo = false
    this.author = ''
  }
}

class NewCategory extends Component {
  state = {
    title: '',
    description: '',
    english: 'English',
    native: 'Українська'
  }

  changeLanguage (language, e) {
    this.setState({
      [language]: e.target.value
    })
  }

  createTitleObj (e) {
    e.preventDefault()
    const titleObj = new TitleObj(this.state.title, this.state.description, this.state.english, this.state.native)
    this.props.addTitleObj(titleObj)

    this.setState({
      title: '',
      description: ''
    })
  }

  render () {
    return (
      <Form>
        <TextField
          id="title-input"
          label="Title category"
          type="text"
          name="native"
          margin="normal"
          variant="filled"
          value={this.state.title}
          onChange={this.changeLanguage.bind(this, 'title')}
        />
        <TextField
          id="description-input"
          label="Description"
          type="text"
          multiline
          rows="2"
          name="english"
          margin="normal"
          variant="filled"
          value={this.state.description}
          onChange={this.changeLanguage.bind(this, 'description')}
        />
        <TextField
          id="englinsh-input"
          label="Learn lenguage"
          type="text"
          name="native"
          margin="normal"
          variant="filled"
          value={this.state.english}
          onChange={this.changeLanguage.bind(this, 'english')}
        />
        <TextField
          id="native-input"
          label="Native language"
          type="text"
          name="native"
          margin="normal"
          variant="filled"
          value={this.state.native}
          onChange={this.changeLanguage.bind(this, 'native')}
        />
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom: 8}}
          onClick={this.createTitleObj.bind(this)}
          disabled={ !this.state.description || !this.state.english ||
          !this.state.native || !this.state.title }
        >
          Add category
        </Button>
      </Form>
    )
  }
}

function mapStateToProps (state) {
  return {
    titleObj: state.add.titleObj
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addTitleObj: item => dispatch(addTitleObj(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory)
