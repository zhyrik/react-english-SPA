import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Auth from './auth/Auth'
import Home from './layouts/Home'
import Learn from './layouts/learn/'


export default class extends Component {
  render () {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/learn" component={Learn} />
        <Route path="/login" component={Auth} />
        <Footer />
      </div>
    )
  }
}