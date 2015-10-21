import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class Winner extends React.Component {
  get mixins () {
    return [PureRenderMixin]
  }

  render () {
    return (
      <div className='winner'>
        Winner is {this.props.winner}!
      </div>
    )
  }
}
