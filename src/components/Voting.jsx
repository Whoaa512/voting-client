import React from 'react'
import {connect} from 'react-redux'
import PureRenderComponent from './PureRenderComponent'
import Vote from './Vote'
import Winner from './Winner'

export default class Voting extends PureRenderComponent {
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
}

function mapStateToProps (state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting)
