import React, { useContext } from 'react'
import AppContext from '../context'
import CounterItem from './CounterItem'
import '../styles/Counters.scss'

const Counters = () => {
    const { appState } = useContext(AppContext)

    return (
        <div className="app__counters">
            {appState.counters.map((counter) => (
                <CounterItem key={counter.uuid} counter={counter} />
            ))}
        </div>
    )
}

export { Counters as default }
