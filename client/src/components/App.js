import React from 'react'
import { Route } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Auth from './layouts/auth/Auth'
import Home from './layouts/Home'
import Learn from './layouts/learn/'
import AddCategory from './layouts/addCategory'

const styles = {
  margin: '0 auto',
  minHeight: '100vh',
  maxWidth: '1200px',
  display: 'grid',
  gridTemplateRows: '64px 1fr 80px'
}

export default () => (
  <div style={ styles }>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/learn" component={Learn} />
    <Route path="/login" component={Auth} />
    <Route path="/add" component={AddCategory} />
    <Footer />
  </div>
)
