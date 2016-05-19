import React from 'react'
import ReactDom from 'react-dom'
import DragonBoatPage from '@youzan/dragon-boat-fullpage'
import 'normalize.css'
import './index.scss'

const preventScroll = e => e.preventDefault()
window.addEventListener('touchmove', preventScroll)

ReactDom.render(<DragonBoatPage />, document.getElementById('container'))
