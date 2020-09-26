import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import AppContext from '../context'
import { removeCounter } from '../actions'
import '../styles/CounterItem.scss'

const CounterItem = ({ counter } = {}) => {
    const { dispatch } = useContext(AppContext)
    const { uuid, label } = counter
    const [showCounter, setShowCounter] = useState(false)

    const onRemoveHandle = () => {
        setShowCounter(false)
        setTimeout(() => {
            dispatch(removeCounter(uuid))
        }, 500)
    }

    useEffect(() => {
        setShowCounter(true)
    }, [])

    return (
        <article
            className={classNames({
                'counter-item': true,
                'counter-item--show': showCounter,
            })}
        >
            <button className="counter-item__remove" onClick={onRemoveHandle}>
                &times;
            </button>
            <p>{label}</p>
            <p>{uuid}</p>
        </article>
    )
}

export { CounterItem as default }
