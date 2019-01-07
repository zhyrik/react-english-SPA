import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Auth from './layouts/auth/Auth'
import Home from './layouts/Home'
import Learn from './layouts/learn/'
import AddCategory from './layouts/addCategory'

// import axios from 'axios'

export default class extends Component {
  // componentDidMount () {
  //   axios.get('https://react-english.firebaseio.com/quiz.json')
  //     .then(response => console.log(response))
  // }
  render () {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/learn" component={Learn} />
        <Route path="/login" component={Auth} />
        <Route path="/add" component={AddCategory} />
        <Footer />
      </div>
    )
  }
}