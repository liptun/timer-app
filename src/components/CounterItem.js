import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import AppContext from '../context'
import { removeCounter, renameCounter } from '../actions'
import dayjs from 'dayjs'
import CounterFragment from './CounterFragment'
import '../styles/CounterItem.scss'

const CounterItem = ({ counter } = {}) => {
    const { dispatch } = useContext(AppContext)
    const { uuid, name } = counter
    const [counterLabel, setCounterLabel] = useState(name)
    const [showCounter, setShowCounter] = useState(false)
    const [showDays, setShowDays] = useState(false)
    const [showMicro, setShowMicro] = useState(true)
    const [fromDate, setFromDate] = useState(dayjs())
    const [currentDate, setCurrentDate] = useState(dayjs())

    const onRemoveHandle = () => {
        setShowCounter(false)
        setTimeout(() => {
            dispatch(removeCounter(uuid))
        }, 500)
    }

    useEffect(() => {
        setShowCounter(true)
        setInterval(() => {
            setCurrentDate(dayjs())
        }, 10)
    }, [])

    // useEffect(() => {
    //     console.log('save', counterLabel)
    // }, [counterLabel])

    return (
        <div
            className={classNames({
                'counter-item': true,
                show: showCounter,
            })}
        >
            <div className="bg">
                <i className="ico ico-timer" />
            </div>
            <div className="controls">
                <button>
                    <i className="ico ico-label" />
                </button>
                <button>
                    <i className="ico ico-edit" />
                </button>
                <button className="remove" onClick={onRemoveHandle}>
                    <i className="ico ico-close" />
                </button>
            </div>
            <div className="counter-label">
                <input
                    value={counterLabel}
                    onChange={(e) => {
                        setCounterLabel(e.target.value)
                    }}
                    spellCheck="false"
                />
            </div>
            <div className="display">
                {showDays && (
                    <CounterFragment
                        value={0}
                        digits={3}
                        label="days"
                        after="-"
                    />
                )}
                <CounterFragment
                    value={currentDate.format('H')}
                    digits={2}
                    label="hours"
                    after=":"
                />
                <CounterFragment
                    value={currentDate.format('m')}
                    digits={2}
                    label="minutes"
                    after=":"
                />
                <CounterFragment
                    value={currentDate.format('s')}
                    digits={2}
                    label="seconds"
                />
                {showMicro && (
                    <CounterFragment
                        value={currentDate.format('SSS')}
                        digits={3}
                        label="micro"
                        before="."
                    />
                )}
            </div>
        </div>
    )
}

export { CounterItem as default }
