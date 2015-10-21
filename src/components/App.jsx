import React from 'react'
import {List, Map} from 'immutable'

const pair = List.of('Bacon', 'Bits')
const tally = Map({Bacon: 5, Bits: 4})

export default class App extends React.Component {
  render () {
    return React.cloneElement(this.props.children, {
      pair,
      tally
    })
  }
}
