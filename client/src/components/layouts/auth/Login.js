import React from 'react'
import {connect} from 'react-redux'
import {auth} from '../../../store/actions/auth'
import { TextField, Fab, Button} from '@material-ui/core'
import Form from '../card/Form'

const style = {
  item: {
    margin: '10px 0'
  }
}

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  loginHandler = () => {
    console.log(this.state.email)
    this.props.auth(
      this.state.email,
      this.state.password,
      true
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
        onChange={event => {this.setState({email: event.target.value})}}
      />
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
        onChange={event => {this.setState({password: event.target.value})}}
      />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
        <Fab variant="contained" href={'#'} size= "small" style={style.item}>fb</Fab>
      </div>
      <Button
        variant="contained"
        color="primary"
        style={style.item}
        onClick={this.loginHandler}
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