require('../test_helper.js')
import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import Voting from '../../src/components/Voting'

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = ReactTestUtils

test('renders a pair of buttons', t => {
  t.plan(3)

  const component = renderIntoDocument(
    <Voting pair={['Bacon', 'Bits']} />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  t.ok(buttons.length === 2)
  t.ok(buttons[0].textContent === 'Bacon')
  t.ok(buttons[1].textContent === 'Bits')
})

test('invokes callback when button is clicked', t => {
  t.plan(1)

  let votedWith
  const vote = (entry) => votedWith = entry
  const component = renderIntoDocument(
    <Voting
        pair={['Bacon', 'Bits']}
        vote={vote} />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  Simulate.click(buttons[0])

  t.ok(votedWith === 'Bacon')
})

test('disables buttons when user has voted', t => {
  t.plan(3)

  const component = renderIntoDocument(
    <Voting
        pair={['Bacon', 'Bits']}
        hasVoted='Bacon' />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  t.ok(buttons.length === 2)
  t.ok(buttons[0].hasAttribute('disabled'))
  t.ok(buttons[1].hasAttribute('disabled'))
})

test('adds label to voted entry', t => {
  t.plan(1)

  const component = renderIntoDocument(
    <Voting
        pair={['Bacon', 'Bits']}
        hasVoted='Bacon' />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  t.regexTest(/Voted/, buttons[0].textContent)
})

test('renders just the winner when there is one', t => {
  t.plan(3)

  const component = renderIntoDocument(
    <Voting
        winner='Bacon' />
  )
  const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
  t.ok(buttons.length === 0)
  const winner = ReactDOM.findDOMNode(component.refs.winner)
  t.ok(winner)
  t.regexTest(/Bacon/, winner.textContent)
})
