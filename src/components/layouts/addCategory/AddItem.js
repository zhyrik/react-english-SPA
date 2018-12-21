import React, {Component} from 'react'
import {TextField, Button} from '@material-ui/core'
import Form from '../../auth/Form'

const style = {
  button: {
    marginBottom: 8
  }
}

export default class extends Component {

  render () {
    return (
      <Form>
        <TextField
          id="native-input"
          label="Native word"
          type="text"
          name="native"
          margin="normal"
          variant="filled"
        />
        <TextField
          id="english-input"
          label="English word"
          type="text"
          name="english"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" color="primary" style={style.button}>
          google translate
        </Button>
        <TextField
          id="img-url-input"
          label="Image URL (www.photo.jpg)"
          type="text"
          name="img"
          margin="normal"
          variant="filled"
        />
        <Button variant="contained" color="primary" style={{marginBottom: 16}}>
          get URL
        </Button>
        <Button variant="contained" color="primary" style={style.button}>
          Add
        </Button>
      </Form>
    )
  }
}
