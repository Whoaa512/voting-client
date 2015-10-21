import React from 'react'
import PureRenderComponent from './PureRenderComponent'

export default class Winner extends PureRenderComponent {
  render () {
    return (
      <div className='winner'>
        Winner is {this.props.winner}!
      </div>
    )
  }
}
