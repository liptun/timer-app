import React from 'react'
import ReactDOM from 'react-dom'
import './icons.font'
import './styles/reset.scss'
import AppProvider from './components/AppProvider'

const appRoot = <AppProvider />

ReactDOM.render(appRoot, document.getElementById('root'))
