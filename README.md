# crtrdg-touch

> touch event module for crtrdg games

## Install

    npm install --save crtrdg-touch

## Example

call

	npm start

inside this module, click and swipe on the canvas element, and check the console for events

## API

### create

create the touch object and add to an existing game

**Examples**

```javascript
var Game = require('crtrdg-game')
var Touch = require('crtrdg-touch')

var game = Game()
var touch = Touch(game)
```

if ``game`` is not provided, will attach touch events to `document`

### keyboard#<tap*>

tap events

divides the target into four quadrants, with events `<tapUpLeft>`, `<tapUpRight>`, `<tapDownLeft>`, `<tapDownRight>`

**Parameters**

-   `location` **String**, touch location of tap

**Examples**

```javascript
keyboard.on('<tapUpLeft>', function (location) {
  console.log(location)
})
```

### touch#<swipe*>

swipe events

includes `<swipeLeft>`, `<swipeRight>`, `<swipeUp>`, `<swipeDown>`

**Parameters**

-   `location` **array**, touch location at end of swipe

**Examples**

```javascript
touch.on('<swipeLeft>', function (location) {
  console.log(location)
})
```

### touch#down

object with current touch events set to true, where current is defined by the 100ms following a touch

**Examples**

```javascript
touch.down
>> {<swipeRight>: true}
```

## Contributing

-   Fork this repository.
-   Create a branch for you changes.
-   Include tests if applicable.
-   Add/edit documentation for any changes.
-   Submit a pull request.

## License

MIT
