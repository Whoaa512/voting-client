import React from 'react'
import Vote from './Vote'
import Winner from './Winner'

export default class Voting extends React.Component {


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
