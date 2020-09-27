import React, { useReducer, useEffect } from 'react'
import AppContext from '../context'
import AppView from './AppView'
import appReducer from '../reducer'
import { pushState } from '../actions'

const appInitialState = {
    counters: [],
}

const AppProvider = () => {
    const [appState, dispatch] = useReducer(appReducer, appInitialState)

    useEffect(() => {
        const storedState = localStorage.getItem('counter-app-state')
        if (storedState) {
            const jsonState = JSON.parse(storedState)
            dispatch(pushState(jsonState))
        }
    }, [])

    useEffect(() => {
        const jsonString = JSON.stringify(appState)
        localStorage.setItem('counter-app-state', jsonString)
    }, [appState])

    return (
        <AppContext.Provider value={{ appState, dispatch }}>
            <AppView />
        </AppContext.Provider>
    )
}

export default AppProvider
