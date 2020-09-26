import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import AppContext from '../context'
import { removeCounter, renameCounter } from '../actions'
import dayjs from 'dayjs'
import '../styles/CounterItem.scss'

const CounterItem = ({ counter } = {}) => {
    const { dispatch } = useContext(AppContext)
    const { uuid, name } = counter
    const [counterLabel, setCounterLabel] = useState(name)
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

    useEffect(() => {
        console.log('save', counterLabel)
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
                <div className="part days">
                    <div className="digits">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                    </div>
                    <div className="part-label">
                        <p>days</p>
                    </div>
                </div>

                <div className="separator">-</div>
                <div className="part hours">
                    <div className="digits">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                    </div>
                    <div className="part-label">
                        <p>hours</p>
                    </div>
                </div>
                <div className="separator">:</div>
                <div className="part minutes">
                    <div className="digits">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                    </div>
                    <div className="part-label">
                        <p>minutes</p>
                    </div>
                </div>
                <div className="separator">:</div>
                <div className="part seconds">
                    <div className="digits">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                    </div>
                    <div className="part-label">
                        <p>seconds</p>
                    </div>
                </div>
                <div className="separator">.</div>
                <div className="part micro">
                    <div className="digits">
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                        <div className="digit">0</div>
                    </div>
                    <div className="part-label">
                        <p>micro</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CounterItem as default }
