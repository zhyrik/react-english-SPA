import React from 'react'
import { TextField, Button} from '@material-ui/core'
import Form from './Form'

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
      <TextField
        id="filled-password-input"
        label="Password"

        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
      <Button variant="contained" color="primary" style={{ margin: '10px 0' }}>
        Login
      </Button>
    </Form>
  }
}