import React, { useContext } from 'react'
import AppContext from '../context'
import { addCounter } from '../actions'
import '../styles/CounterAdd.scss'

const CounterAdd = () => {
    const { dispatch } = useContext(AppContext)

    return (
        <div className="counter-add">
            <button onClick={() => dispatch(addCounter())}>
                <i className="ico ico-add"></i> Add
            </button>
        </div>
    )
}

export { CounterAdd as default }
