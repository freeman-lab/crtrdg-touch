var _ = require('lodash')
var inherits = require('inherits')
var touchy = require('touchy')
var position = require('touch-position')
var EventEmitter = require('eventemitter2').EventEmitter2

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
  this.down = {}
  this.initialize()
}

Touch.prototype.initialize = function () {
  var self = this
  touchy.enableOn(self.el)
  var p = position(self.el)

  var events = ['swipe:left', 'swipe:right', 'swipe:up', 'swipe:down']

  var labels = ['<swipeLeft>', '<swipeRight>', '<swipeUp>', '<swipeDown>']

  _.forEach(events, function (name, i) {
    self.el.addEventListener(name, function (e) {
      self.offset(e, p, function (location) {
        self.down = {}
        self.down[labels[i]] = true
        self.emit(labels[i], location)
        setTimeout( function() {
          self.down = {}
        }, 100)
      })
      return false
    }, false)
  })
}

Touch.prototype.offset = function (e, p, callback) {
  var canvas = e.target

  var location = {
    x: p[0] - canvas.offsetLeft - canvas.scrollLeft,
    y: p[1] - canvas.offsetTop - canvas.scrollTop
  }

  callback(location)
}