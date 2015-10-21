import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'

export default class PureRenderComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    let state = this.state != null ? this.state : {}
    return !shallowCompare(this.props, nextProps) || !shallowCompare(state, nextState)
  }
}
