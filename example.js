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

touch.on('tap', function (loc) {
  console.log('tap at: ', loc)
})

touch.on('swipeUp', function (loc) {
  console.log('swipeUp at: ', loc)
})

touch.on('swipeDown', function (loc) {
  console.log('swipeDown at: ', loc)
})

touch.on('swipeLeft', function (loc) {
  console.log('swipeLeft at: ', loc)
})

touch.on('swipeRight', function (loc) {
  console.log('swipeRight at: ', loc)
})
