import React, { useReducer } from 'react'
import AppContext from '../context'
import AppView from './AppView'
import appReducer from '../reducer'

const appInitialState = {
    counters: [],
}

const AppProvider = () => {
    const [appState, dispatch] = useReducer(appReducer, appInitialState)
    return (
        <AppContext.Provider value={{ appState, dispatch }}>
            <AppView />
        </AppContext.Provider>
    )
}

export default AppProvider
