import React from 'react'
import ReactDOM from 'react-dom'
import Voting from './components/Voting'

const pair = ['Bacon', 'Bits']

ReactDOM.render(
  <Voting pair={pair} hasVoted='Bacon' vote={(x) => x}/>,
  document.getElementById('app')
)
