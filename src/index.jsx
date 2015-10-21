import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route} from 'react-router'
import App from './components/App'
import Voting from './components/Voting'

const routes = <Route component={App}>
  <Route path='/' component={Voting} />
</Route>

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
)
