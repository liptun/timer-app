import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import AppContext from '../context'
import { removeCounter, renameCounter } from '../actions'
import dayjs from 'dayjs'
import CounterFragment from './CounterFragment'
import '../styles/CounterItem.scss'

const CounterItem = ({ counter } = {}) => {
    const { uuid, name, start, type } = counter
    const { dispatch } = useContext(AppContext)
    const [counterLabel, setCounterLabel] = useState(name)
    const [showCounter, setShowCounter] = useState(false)
    const [showDays, setShowDays] = useState(false)
    const [showMicro, setShowMicro] = useState(true)
    const [showConfig, setShowConfig] = useState(false)
    const [fromDate, setFromDate] = useState(dayjs())
    const [currentDate, setCurrentDate] = useState(dayjs())
    const [displayDate, setDisplayDate] = useState(dayjs())

    useEffect(() => {
        setShowCounter(true)
        if (!start) {
            setShowConfig(true)
        }
        const ticker = setInterval(() => {
            setCurrentDate(dayjs())
        }, 5)
        return () => {
            clearInterval(ticker)
        }
    }, [])

    useEffect(() => {
        setDisplayDate(currentDate)
    }, [currentDate])

    useEffect(() => {
        dispatch(renameCounter(uuid, counterLabel))
    }, [counterLabel])

    const onRemoveHandle = () => {
        setShowCounter(false)
        setTimeout(() => {
            dispatch(removeCounter(uuid))
        }, 500)
    }

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

            {showConfig && (
                <div className="counter-settings">
                    <button onClick={() => setShowConfig(false)}>
                        <i className="ico ico-back" />
                    </button>
                    <p>Settings</p>
                    <div className="button-grid">
                        <button onClick={() => setShowConfig(false)}>
                            <div className="button-inside">
                                <i className="ico ico-timer" />
                                <p>Clock</p>
                            </div>
                        </button>
                        <button onClick={() => setShowConfig(false)}>
                            <div className="button-inside">
                                <i className="ico ico-timer" />
                                <p>Stopwatch</p>
                            </div>
                        </button>
                        <button onClick={() => setShowConfig(false)}>
                            <div className="button-inside">
                                <i className="ico ico-timer" />
                                <p>Countdown</p>
                            </div>
                        </button>
                        <button onClick={() => setShowConfig(false)}>
                            <div className="button-inside">
                                <i className="ico ico-timer" />
                                <p>Alarm</p>
                            </div>
                        </button>
                    </div>
                </div>
            )}

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
                    value={displayDate.format('H')}
                    digits={2}
                    label="hours"
                    after=":"
                />
                <CounterFragment
                    value={displayDate.format('m')}
                    digits={2}
                    label="minutes"
                    after=":"
                />
                <CounterFragment
                    value={displayDate.format('s')}
                    digits={2}
                    label="seconds"
                />
                {showMicro && (
                    <CounterFragment
                        value={displayDate.format('SSS')}
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
