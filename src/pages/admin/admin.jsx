import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './dashboard'
import Import from './import'
import Alumnis from './alumnis'

const Admin = () => {
    return (
        <Switch>
            <Route path='/admin/dashboard' component={Dashboard} />
            <Route path='/admin/alumnis' component={Alumnis} />
            <Route path='/admin/import' component={Import} />
            <Route exact path="/admin" render={() => <Redirect to="/admin/dashboard" />} />
        </Switch>
    )
}

export default Admin