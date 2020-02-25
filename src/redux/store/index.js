import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers';

export const store = createStore(reducers, applyMiddleware(ReduxThunk));

export const ContextProvider = (props) => {
    return <Provider store={store}>
        {props.children}
    </Provider>
}