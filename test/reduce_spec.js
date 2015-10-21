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

