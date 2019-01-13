import React from 'react'
import {connect} from 'react-redux'
import { TextField, Button} from '@material-ui/core'
import Form from '../card/Form'
import {auth} from '../../../store/actions/auth'

class Password extends React.Component {
  state = {
    email: '',
    password: '',
    repeatPassword: ''
  }

  registrationHandler = () => {
    console.log(this.state.email)
    this.props.auth(
      this.state.email,
      this.state.password,
      false
    )
  }

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
        onChange={(event) => this.setState({email: event.target.value})}
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        onChange={(event) => this.setState({password: event.target.value})}
      />
      <TextField
        id="repeat-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        onChange={(event) => this.setState({repeatPassword: event.target.value})}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={this.registrationHandler}
      >
        Registration
      </Button>
    </Form>
  }
}

function mapDispatchToState (dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
}

export default connect(null, mapDispatchToState)(Password)