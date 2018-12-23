import React from 'react'
import { TextField, Fab, Button} from '@material-ui/core'
import Form from '../card/Form'

const style = {
  item: {
    margin: '10px 0'
  }
}

export default class extends React.Component {
  render () {
    return <Form>
      <TextField
        id="filled-email-input"
        label="Email"

        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"

        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
      </div>
      <Button variant="contained" color="primary" style={style.item}>
        Login
      </Button>
    </Form>
  }
}