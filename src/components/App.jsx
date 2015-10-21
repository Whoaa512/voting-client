import React from 'react'
import {List} from 'immutable'

const pair = List.of('Bacon', 'Bits')

export default class App extends React.Component {
  render () {
    return React.cloneElement(this.props.children, {pair})
  }
}
