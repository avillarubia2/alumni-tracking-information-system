import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginHolder from './components/holder/loginHolder'
import DefaultHolder from './components/holder/defaultHolder'
import AdminHolder from './components/holder/adminHolder'

import './App.css'

function App() {
  
  return (
    <Switch>
      <Route exact path="/(login)" component={LoginHolder}/>
      <Route exact path="/(register)" component={LoginHolder}/>
      <Route path="/(admin)" component={AdminHolder}/>
      <Route component={DefaultHolder}/>
    </Switch>
  )
}

export default App