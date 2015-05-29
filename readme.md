# Get CSS (class names) from JS

> This package provides a method to fetch all CSS class names from a provided JS file.
> In addition to some simple search methods it looks for jQuery method usage to get all required selectors. 

> Please note that the process is quite greedy. 
> So some of the found "class names" might actually be file extensions or other strings with a dot in it.

## Install

```
$ npm install --save get_css_from_js
```


## Usage

```js
var getCssFromJs = require('get_css_from_js');

var classNames = getCssFromJs('script.js');
```

or you can provide an array of files

```js
var getCssFromJs = require('get_css_from_js');

var classNames = getCssFromJs(['script1.js', 'script2.js']);
```