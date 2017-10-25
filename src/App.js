import React, { Component } from 'react'
import logo from './porcus.svg'
import './App.css'
import Editor from './views/Editor'
import VowelPlotter from './VowelPlotter'

import {list} from './VowelList'

class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="container navbar-container">
          <div className="navbar">
            <div className="navbar-brand">
              <div className="navbar-item logo">
                <a href="//zyx.vowelchart.xyz">
                  <img src={logo} className="App-logo" alt="logo"/>
                  Vowelchart.xyz
                </a>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start"/>
              <div className="navbar-end">
                <a className="navbar-item is-hidden-desktop-only" href="https://github.com/schweinebauch-heroes/vowelchart" target="_blank" rel="noopener noreferrer">
                  <span className="icon github">
                    <i className="fa fa-lg fa-github"/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <VowelPlotter width="500" height="500"/>
              </div>
              <div className="column right">
                <Editor vowelList={list}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
