import './raf_polyfill'
import './index.scss'

import Brush from './Brush'

window.addEventListener('touchmove', e => e.preventDefault())

const canvas = document.querySelector('canvas')
canvas.width = 500;
canvas.height = 500;

const img = new Image()
img.src = '../assets/ink.png'
img.onload = () => {
  const brush = new Brush(canvas, img)

  function start() {
    let lastTime = 0
    let appTime = 0
    function r(time) {
      requestAnimationFrame(r)
      let dt = time - lastTime
      if (dt < 10) return
      if (dt > 100) dt = 16
      lastTime = time
      dt /= 1000
      appTime += dt

      brush.update(dt)
      brush.render()
    }
    requestAnimationFrame(r)
  }

  start()
}

