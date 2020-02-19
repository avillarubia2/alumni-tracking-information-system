import React, { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import LoginHolder from './components/holder/loginHolder'
import DefaultHolder from './components/holder/defaultHolder'
import AdminHolder from './components/holder/adminHolder'

function App() {
  
  return (
    <>
  
    <Switch>
      <Route exact path="/(login)" component={LoginHolder}/>
      <Route path="/(admin)" component={AdminHolder}/>
      <Route component={DefaultHolder}/>
    </Switch>
    </>
  );
}

export default App;