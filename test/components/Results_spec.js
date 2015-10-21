require('../_test_helper.js')
import test from 'ava'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import {List, Map} from 'immutable'
import Results from '../../src/components/Results'

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = ReactTestUtils

test('renders entries with vote counts or zero', t => {
  t.plan(5)

  const pair = List.of('Bacon', 'Bits')
  const tally = Map({Bacon: 5})
  const component = renderIntoDocument(
    <Results pair={pair} tally={tally} />
  )
  const entries = scryRenderedDOMComponentsWithClass(component, 'entry')
  const [bacon, bits] = entries.map(e => e.textContent)
  t.ok(entries.length === 2)
  t.regexTest(/Bacon/, bacon)
  t.regexTest(/5/, bacon)
  t.regexTest(/Bits/, bits)
  t.regexTest(/0/, bits)
})

test('invokes the next callback when next button is clicked', t => {
  t.plan(1)

  let nextInvoked = false
  const next = () => nextInvoked = true

  const pair = List.of('Bacon', 'Bits')
  const component = renderIntoDocument(
    <Results
        pair={pair}
        next={next}
        tally={Map()} />
  )
  Simulate.click(ReactDOM.findDOMNode(component.refs.next))
  t.ok(nextInvoked)
})

test('renders the winner when there is one', t => {
  t.plan(2)

  const pair = List.of('Bacon', 'Bits')
  const component = renderIntoDocument(
    <Results
        winner='Bacon'
        pair={pair}
        tally={Map()} />
  )
  const winner = ReactDOM.findDOMNode(component.refs.winner)
  t.ok(winner)
  t.regexTest(/Bacon/, winner.textContent)
})
