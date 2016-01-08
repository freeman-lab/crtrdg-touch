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
  this.el = game.el || game.canvas || game.renderer.canvas || document
  this.left = this.el.scrollLeft + this.el.offsetLeft +
    (this.el.offsetParent ? this.el.offsetParent.offsetLeft : 0)
  this.top = this.el.scrollTop + this.el.offsetTop +
    (this.el.offsetParent ? this.el.offsetParent.offsetTop : 0)
  this.width = this.el.clientWidth
  this.height = this.el.clientHeight
  this.down = {}
  this.initialize()
}

Touch.prototype.initialize = function () {
  var self = this

  touchy.enableOn(self.el)
  var xy = position(self.el)
  var events = ['swipe:left', 'swipe:right', 'swipe:up', 'swipe:down']
  var labels = ['<swipeLeft>', '<swipeRight>', '<swipeUp>', '<swipeDown>']

  _.forEach(events, function (name, i) {
    self.el.addEventListener(name, function (e) {
      self.offset(e, xy, function (loc) {
        self.down = {}
        self.down[labels[i]] = true
        self.emit(labels[i], loc)
        setTimeout(function () {
          self.down = {}
        }, 100)
      })
      return false
    }, false)
  })

  self.el.addEventListener('tap', function (e) {
    self.offset(e, xy, function (loc) {
      var name = '<tap>'
      var left = loc.x / self.width
      var top = loc.y / self.height
      if (left < 0.5 & top < 0.5) name = '<tapUpLeft>'
      if (left >= 0.5 & top < 0.5) name = '<tapUpRight>'
      if (left < 0.5 & top >= 0.5) name = '<tapDownLeft>'
      if (left >= 0.5 & top >= 0.5) name = '<tapDownRight>'
      self.down = {}
      self.down[name] = true
      self.emit(name, loc)
      setTimeout(function () {
        self.down = {}
      }, 100)
    })
    return false
  }, false)
}

Touch.prototype.offset = function (e, xy, callback) {
  var self = this

  var loc = {
    x: xy[0] - self.left,
    y: xy[1] - self.top
  }

  callback(loc)
}
