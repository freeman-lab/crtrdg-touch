var Game = require('crtrdg-gameloop')
var Touch = require('./index')

var canvas = document.createElement('canvas')
canvas.style.background = 'rgb(100,100,100)'
document.body.appendChild(canvas)

var game = new Game({
  canvas: canvas
})
game.width = canvas.width = 800
game.height = canvas.height = 400 

var touch = new Touch(game)

touch.on('<tapDownLeft>', function (loc) {
  console.log('tapDownLeft at: ', loc)
})

touch.on('<tapDownRight>', function (loc) {
  console.log('tapDownRight at: ', loc)
})

touch.on('<tapUpRight>', function (loc) {
  console.log('tapUpRight at: ', loc)
})

touch.on('<tapUpLeft>', function (loc) {
  console.log('tapUpLeft at: ', loc)
})

touch.on('<swipeUp>', function (loc) {
  console.log('swipeUp at: ', loc)
})

touch.on('<swipeDown>', function (loc) {
  console.log('swipeDown at: ', loc)
})

touch.on('<swipeLeft>', function (loc) {
  console.log('swipeLeft at: ', loc)
})

touch.on('<swipeRight>', function (loc) {
  console.log('swipeRight at: ', loc)
})
