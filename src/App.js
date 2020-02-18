import React, { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import NavMenu from './components/nav/navmenu'
import Home from './pages/home'

function App() {
  
  return (
    <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    
    <NavMenu />
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
    </>
  );
}

export default App;