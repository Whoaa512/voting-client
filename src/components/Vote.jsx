import React from 'react'

export default class Voting extends React.Component {
  getPair () {
    return this.props.pair || []
  }

  isDisabled () {
    return !!this.props.hasVoted
  }

  hasVotedFor (entry) {
    return this.props.hasVoted === entry
  }

  render () {
    return (
      <div className='voting'>
        {this.getPair().map(entry =>
          <button
              key={entry}
              disabled={this.isDisabled()}
              onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry)
              ? <div className='label'>Voted</div>
              : null}
          </button>
        )}
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