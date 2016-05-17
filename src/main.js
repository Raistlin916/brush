import './raf_polyfill'
import './index.scss'

window.addEventListener('touchmove', e => e.preventDefault())

const canvas = document.querySelector('canvas')
