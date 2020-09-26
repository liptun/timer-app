import React from 'react'
import '../styles/Header.scss'

const Header = () => (
    <header className="header">
        <div className="header__brand">
            <i className="ico ico-timer"></i>
            <h1>Time 101</h1>
        </div>
        <div className="header__motto">
            <p>Count time like a pro</p>
        </div>
        <div className="header__menu">
            <p>More about author:</p>
            <a href="https://github.com/liptun" target="_blank" rel="noopener">
                GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/rafa%C5%82-karczmarzyk-55b09718b/"
                target="_blank"
                rel="noopener"
            >
                LinkedIn
            </a>
        </div>
    </header>
)

export { Header as default }
