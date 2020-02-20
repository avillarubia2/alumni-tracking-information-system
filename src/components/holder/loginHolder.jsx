import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from '../../pages/login'
import Register from '../../pages/register'

const LoginHolder = () => {
    return (
        <>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </>
    )
}

export default LoginHolder