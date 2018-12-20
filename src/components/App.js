import React, { Component } from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Auth from './auth/Auth'


export default class extends Component {
  render () {
    return (
      <div>
        <Header />
        <Auth />
        <Footer />
      </div>
    )
  }
}