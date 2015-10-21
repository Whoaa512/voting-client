require('../test_helper.js')
import test from 'ava'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Voting from '../../src/components/Voting'

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = ReactTestUtils

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
