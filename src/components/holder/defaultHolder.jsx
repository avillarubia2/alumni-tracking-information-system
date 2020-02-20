import React from 'react'
import Home from '../../pages/home'
import Profile from '../../pages/profile'
import { Switch, Route } from 'react-router-dom'
import NavigationBar from '../nav/navigationBar'
import { Container } from 'react-bootstrap'

const DefaultHolder = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <section>
                    <Switch>
                        <Route path='/profile' component={Profile} />
                        <Route path='/' component={Home} />
                    </Switch>
                </section>
            </Container>
        </>
    )
}

export default DefaultHolder