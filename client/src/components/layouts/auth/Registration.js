import React from 'react'
import {connect} from 'react-redux'
import { TextField, Button} from '@material-ui/core'
import Form from '../card/Form'
import {auth} from '../../../store/actions/auth'
import validator from "validator";

class Password extends React.Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    validatorEmail: true,
    labelEmail: 'Email',
    validatorPassword: true,
    labelPassword: 'Password',
    validatorRepeatPassword: true,
    labelRepeatPassword: 'Password'
  }

  registrationHandler = () => {
    console.log(this.state.email)
    this.props.auth(
      this.state.email,
      this.state.password,
      false
    )
  }

  checkEmail = e => {
    const flag = validator.isEmail(e.target.value)
    this.setState({
      validatorEmail: flag,
      labelEmail: 'Email'
    }, () => {
      if ( !this.state.validatorEmail ) {
        this.setState({
          labelEmail: 'It is not email'
        })
      }
    })
  }

  checkPassword = e => {
    const flag = validator.isLength(e.target.value, {min:7, max: 20})
    this.setState({
      validatorPassword: flag,
      labelPassword: 'Password'
    }, () => {
      if ( !this.state.validatorPassword ) {
        this.setState({
          labelPassword: 'Password is too short'
        })
      }
    })
  }

  checkRepeatPassword = e => {
    const flag = validator.equals(e.target.value, this.state.password)
    this.setState({
      validatorRepeatPassword: flag,
      labelRepeatPassword: 'Password'
    }, () => {
      if ( !this.state.validatorRepeatPassword ) {
        this.setState({
          labelRepeatPassword: 'Passwords is\'t equals'
        })
      }
    })
  }

  render () {
    return <Form>
      <TextField
        id="filled-email-input"
        label={ this.state.labelEmail }
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
        error={ !this.state.validatorEmail }
        onBlur={ this.checkEmail }
        onChange={event => {this.setState({email: event.target.value})}}
      />
      <TextField
        id="filled-password-input"
        label={ this.state.labelPassword }
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        error={ !this.state.validatorPassword }
        onBlur={ this.checkPassword }
        onChange={event => {this.setState({password: event.target.value})}}
      />
      <TextField
        id="repeat-password-input"
        label={ this.state.labelRepeatPassword }
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        error={ !this.state.validatorRepeatPassword}
        onBlur={ this.checkRepeatPassword }
        onChange={(event) => this.setState({repeatPassword: event.target.value})}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={this.registrationHandler}
        disabled={ !this.state.validatorEmail || !this.state.validatorPassword ||
        this.state.email.length < 1 || this.state.password.length < 1 ||
        !this.state.validatorRepeatPassword || this.state.repeatPassword.length < 1}
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