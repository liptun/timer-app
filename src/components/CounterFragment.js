import React from 'react'
import '../styles/CounterFragment.scss'

const CounterFragment = ({ value, digits = 2, label, before, after } = {}) => {
    const displayString = ('0'.repeat(digits) + value.toString()).slice(-digits)
    return (
        <>
            {before && <div className="fragment-separator">{before}</div>}
            <div className="fragment-display">
                <div className="group">
                    {Array.from(displayString).map((digit, index) => (
                        <div className="digit" key={index}>
                            {digit}
                        </div>
                    ))}
                </div>
                <div className="fragment-label">
                    <p>{label}</p>
                </div>
            </div>
            {after && <div className="fragment-separator">{after}</div>}
        </>
    )
}

export { CounterFragment as default }
