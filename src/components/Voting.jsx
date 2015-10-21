import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Vote from './Vote'
import Winner from './Winner'

export default class Voting extends React.Component {
  get mixins () {
    return [PureRenderMixin]
  }

  render () {
    return (
      <div>
        {this.props.winner
          ? <Winner ref='winner' winner={this.props.winner} />
          : <Vote {...this.props} />
        }
      </div>
    )
  }

  // static get propTypes () {
  //   return {
  //     pair: React.PropTypes.array,
  //     hasVoted: React.PropTypes.string,
  //     vote: React.PropTypes.func
  //   }
  // }
}
