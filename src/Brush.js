export default class Brush {
  constructor(canvas, img) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.img = img
    this.percent = 0
  }

  render() {
    const { ctx, img, percent } = this

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    const center = [71, 69.5]
    ctx.save()
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(center[0], center[1])
    ctx.arc(center[0], center[1], 71,
      -Math.PI * 0.5, -(Math.PI * 0.5 + Math.PI * 2 * percent), true)
    ctx.clip()
    ctx.drawImage(img, 0, 0, 142.5, 139)
    ctx.restore()
  }

  update() {
    this.percent += 0.01
  }
}
