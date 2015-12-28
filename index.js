var EventEmitter = require('eventemitter2').EventEmitter2
var inherits = require('inherits')
var touchy = require('touchy')
var position = require('touch-position')

module.exports = Touch
inherits(Touch, EventEmitter)

/**
* Create the `touch` object
* @name createTouch
* @param {Object} game – a crtrdg game object
* @example
* var createGame = require('crtrdg-gameloop')
* var createTouch = require('crtrdg-touch')
*
* var game = createGame()
* var touch = createTouch(game)
*/
function Touch (game) {
  if (!(this instanceof Touch)) return new Touch(game)
  this.game = game || {}
  this.el = game.el || game.canvas || document
  this.location = {x: 0, y: 0}
  this.initializeListeners()
}

Touch.prototype.initializeListeners = function () {
  var self = this
  touchy.enableOn(self.el)
  var p = position(self.el)

  self.el.addEventListener('tap', function (e) {
    self.calculateOffset(e, p, function (location) {
      self.emit('tap', location)
    })
    return false
  }, false)

  self.el.addEventListener('swipe:left', function (e) {
    self.calculateOffset(e, p, function (location) {
      self.emit('swipe:left', location)
    })
    return false
  }, false)
}

Touch.prototype.calculateOffset = function (e, p, callback) {
  var canvas = e.target

  var location = {
    x: p[0] - canvas.offsetLeft - canvas.scrollLeft,
    y: p[1] - canvas.offsetTop - canvas.scrollTop
  }

  callback(location)
}