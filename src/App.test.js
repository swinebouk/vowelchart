import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// eslint-disable-next-line
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App param="value" />, div)
})
