import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from '../../pages/login'

const LoginHolder = () => {
    return <>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
    </>
}

export default LoginHolder