import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'

export default class PureRenderComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowCompare(this.props, nextProps) || !shallowCompare(this.state, nextState)
  }
}
