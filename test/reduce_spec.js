require('./test_helper.js')
import test from 'ava'
import {expect} from 'chai'
import {List, Map, fromJS} from 'immutable'
import reducer from '../src/reducer'

test('handles SET_STATE', t => {
  const initialState = Map()
  const action = {
    type: 'SET_STATE',
    state: fromJS({
      vote: {
        pair: ['Bacon', 'Bits'],
        tally: { Bacon: 1 }
      }
    })
  }
  const nextState = reducer(initialState, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  }))
  t.end()
})

test('handles SET_STATE with plain JS payload', t => {
  const initialState = Map()
  const action = {
    type: 'SET_STATE',
    state: {
      vote: {
        pair: ['Bacon', 'Bits'],
        tally: { Bacon: 1 }
      }
    }
  }
  const nextState = reducer(initialState, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  }))
  t.end()
})

test('handles SET_STATE without initial state', t => {
  const action = {
    type: 'SET_STATE',
    state: {
      vote: {
        pair: ['Bacon', 'Bits'],
        tally: { Bacon: 1 }
      }
    }
  }
  const nextState = reducer(undefined, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  }))
  t.end()
})

test('handles VOTE by setting hasVoted', t => {
  const state = fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  })
  const action = { type: 'VOTE', entry: 'Bacon' }
  const nextState = reducer(state, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    },
    hasVoted: 'Bacon'
  }))
  t.end()
})

test('does not set hasVoted for VOTE on invalid entry', t => {
  const state = fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  })
  const action = { type: 'VOTE', entry: 'Awesome' }
  const nextState = reducer(state, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    }
  }))
  t.end()
})

test('removes hasVoted on SET_STATE if pair changes', t => {
  const state = fromJS({
    vote: {
      pair: ['Bacon', 'Bits'],
      tally: { Bacon: 1 }
    },
    hasVoted: 'Bacon'
  })
  const action = {
    type: 'SET_STATE',
    state: {
      vote: {
        pair: ['Nope', 'Cats']
      }
    }
  }
  const nextState = reducer(state, action)
  expect(nextState).to.equal(fromJS({
    vote: {
      pair: ['Nope', 'Cats']
    }
  }))
  t.end()
})
