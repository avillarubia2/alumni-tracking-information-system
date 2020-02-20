import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from '../../pages/login'
import Register from '../../pages/register'

const LoginHolder = () => {
    return (
        <>
        {/* <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </>
    )
}

export default LoginHolder