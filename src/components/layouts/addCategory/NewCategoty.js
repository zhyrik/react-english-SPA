import React, {Component} from 'react'
import {TextField, Button} from '@material-ui/core'
import Form from '../../auth/Form'

const style = {
  button: {
    marginBottom: 8
  }
}

export default class extends Component {
  state = {
    english: 'English',
    native: 'Українська'
  }

  changeLanguage (language, e) {
    this.setState({
      [language]: e.target.value
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
        <Button variant="contained" color="primary" style={style.button}>
          Create
        </Button>
      </Form>
    )
  }
}