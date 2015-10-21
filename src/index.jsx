import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'

const pair = ['Bacon', 'Bits']

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
)
