import React, { useReducer } from 'react'
import AppContext from '../context'
import AppView from './AppView'

const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.item],
            }
        default:
            return { ...state }
    }
}
const appInitialState = {
    title: 'React useContext with useReducer',
    items: [],
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
