# path-helper()

Node helper to resolve the fullpath.

## Example

```js
var pathHelper = require('path-helper')(__dirname);
var fullpath = pathHelper.resolve('./../test/config/server.unit.conf.js');
```

## Installation

```
npm install path-helper
```

## Usage

Basic usage that like this:

```js
var pathHelper = require('path-helper')(__dirname);
var fullpath = pathHelper.resolve('./../test/config/server.unit.conf.js');
```

## TODO

auto get basedir.

## License

MIT. &copy; 2012 Aseem Kishore.