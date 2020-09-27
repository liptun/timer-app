import React, { useContext, useEffect } from 'react'
import AppContext from '../context'
import { addCounter } from '../actions'
import Header from './Header'
import Counters from './Counters'
import CounterAdd from './CounterAdd'
import '../styles/App.scss'

const AppView = () => {
    const { dispatch } = useContext(AppContext)

    // useEffect(() => {
    //     dispatch(addCounter())
    // }, [])

    return (
        <div className="app">
            <Header />
            <CounterAdd />
            <Counters />
        </div>
    )
}

export { AppView as default }
