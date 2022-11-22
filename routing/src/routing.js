import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from './App'
import About from './Component/about'

export default class routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
