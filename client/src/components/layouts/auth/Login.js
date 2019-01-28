import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../../../store/actions/auth'
import { TextField, Fab, Button } from '@material-ui/core'
import Form from '../card/Form'
import validator from 'validator'
import { fb, github, IN } from "../../../icon";


const style = {
  item: {
    margin: '10px 0'
  }
}

const links = [
  {
    link: 'https://www.facebook.com/zhyriki',
    icon: fb
  },
  {
    link: 'https://github.com/zhyrik/react-english-SPA',
    icon: github
  },
  {
    link: 'https://www.linkedin.com/in/oleh-zhurovskyi-26b9bb175/',
    icon: IN
  }
]

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    validatorEmail: true,
    labelEmail: 'Email',
    validatorPassword: true,
    labelPassword: 'Password'
  }

  loginHandler = () => {
    this.props.auth(
      this.state.email,
      this.state.password,
      true
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
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {links.map((link, index) => {
          return <Fab
            variant="contained"
            href={ link.link }
            target="_blank"
            size= "small"
            key={ index }
          >
            {<img src={ link.icon } style={{ width: '40px' }} alt="icon" />}
          </Fab>
        })}
      </div>
      <Button
        variant="contained"
        color="primary"
        style={style.item}
        onClick={this.loginHandler}
        disabled={ !this.state.validatorEmail || !this.state.validatorPassword ||
        this.state.email.length < 1 || this.state.password.length < 1}
      >
        Login
      </Button>
    </Form>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
}

export default connect(null, mapDispatchToProps)(Login)