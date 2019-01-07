import React from 'react'
import CardForm from '../card/CardForm'
import Login from './Login'
import Registration from './Registration'

export default props =>
  <CardForm First={Login} Second={Registration} title1={'login'} title2={'registration'} />
