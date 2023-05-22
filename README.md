# ember-asciinema-player

Asciinema Player for Ember.


## Compatibility

* Ember.js v4 or above
* Ember CLI v4 or above
* Node.js v14 or above


## Installation

```
ember install ember-asciinema-player
```


## Usage

Add the player component to a template:

```hbs
<Heap::Player @data={{@asciicastData}} @poster='npt:1:30' />
```

Pass supported options as component arguments:
`autoPlay`,
`loop`,
`startAt`,
`speed`,
`idleTimeLimit`,
`theme`,
`poster`,
`fit`,
`controls`,
`markers`,
`pauseOnMarkers`.  Learn more about these options in
[the asciinema-player docs](https://github.com/asciinema/asciinema-player#options).

This example assumes that `@asciicastData` is a preloaded asciicast file.
Asciicast may be fetched from a remote source.  For example, to preload
asciicast in a route:

```js
async model() {
  const response = await fetch('/example.cast');
  const asciicast = await response.text();
  return asciicast;
}
```

## Example Asciicast

Example asciicast for development purposes may be found at
[asciinema.org/explore](https://asciinema.org/explore).  To use the example
asciicast file from this project, copy `tests/dummy/public/example.cast` to your
own Ember project's `public/` folder and fetch it,
e.g. `const response = await fetch('/example.cast');`.
