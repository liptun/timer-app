import React, { useContext, useEffect } from 'react'
import AppContext from '../context'
import { v4 as uuid } from 'uuid'
import '../styles/App.scss'

const AppView = () => {
    const { appState, dispatch } = useContext(AppContext)

    useEffect(() => {
        dispatch({
            type: 'ADD_ITEM',
            item: {
                id: uuid(),
                text: 'Lorem ipsum',
            },
        })
    }, [])

    return (
        <div className="app">
            <div className="app__content">
                <i className="ico ico-react" />
                <h1>{appState.title}</h1>
                <p>{uuid()}</p>
                {appState.items.map((item) => (
                    <p key={item.id}>{item.text}</p>
                ))}
            </div>
        </div>
    )
}

export { AppView as default }
