# crtrdg-touch

> touch event module for crtrdg games

## install

    npm install --save crtrdg-touch

## example

call

	npm start

inside this module, click and swipe on the canvas element, and check the console for events

## API

### `create`

create the touch object and add to an existing game

```javascript
var Game = require('crtrdg-game')
var Touch = require('crtrdg-touch')

var game = Game()
var touch = Touch(game)
```

if ``game`` is not provided, will attach touch events to `document`

### `touch.on('<tap*>')`

tap events

provides a few common subdivions of the canvas, with the following event sets:
- quadrants `<tapUpLeft>`, `<tapUpRight>`, `<tapDownLeft>`, `<tapDownRight>`
- horizontal thirds `<tapLeft>`, `<tapCenter>`, `<tapRight>`
- vertical thirds `<tapUp>`, `<tapMiddle>`, `<tapDown>`

**parameters**

-   `location` **Object** touch location of tap e.g. `{x: 50, y: 100}`

**examples**

```javascript
keyboard.on('<tapUpLeft>', function (location) {
  console.log(location)
})
```

### `touch.on('<swipe*>')`

swipe events

includes `<swipeLeft>`, `<swipeRight>`, `<swipeUp>`, `<swipeDown>`

**parameters**

-   `location` **Object** touch location at end of swipe e.g. `{x: 50, y: 100}`

**examples**

```javascript
touch.on('<swipeLeft>', function (location) {
  console.log(location)
})
```

### `touch.down`

object with current touch events set to true, where current is defined by the 100ms following a touch

**examples**

```javascript
touch.on('<swipeLeft>', function (location) {
  console.log(touch.down)
})

>> {<swipeLeft>: true}
```

## Contributing

-   Fork this repository.
-   Create a branch for you changes.
-   Include tests if applicable.
-   Add/edit documentation for any changes.
-   Submit a pull request.

## License

MIT
