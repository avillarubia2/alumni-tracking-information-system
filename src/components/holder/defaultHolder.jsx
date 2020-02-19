import React from 'react'
import Home from '../../pages/home'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../nav/navigationBar'

const DefaultHolder = () => {
    return (
        <>
            <NavigationBar />
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </>
    )
}

export default DefaultHolder