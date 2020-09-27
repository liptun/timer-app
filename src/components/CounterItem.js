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
    const [showConfig, setShowConfig] = useState(true)
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
        const tick = setInterval(() => {
            setCurrentDate(dayjs())
        }, 10)
        return () => {
            clearInterval(tick)
        }
    }, [])

    useEffect(() => {
        dispatch(renameCounter(uuid, counterLabel))
    }, [counterLabel])

    return (
        <div
            className={classNames({
                'counter-item': true,
                show: showCounter,
            })}
        >
            <div className="controls">
                <button>
                    <i
                        className="ico ico-settings"
                        onClick={() => setShowConfig(!showConfig)}
                    />
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
            {showConfig && <p>Show config</p>}
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
