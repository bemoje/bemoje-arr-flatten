# @bemoje/arr-flatten

Flattens the passed array recursively.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-flatten" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-flatten" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-flatten" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-flatten.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-flatten" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-flatten.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-flatten" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-flatten" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-flatten/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-flatten" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-flatten
npm install --save @bemoje/arr-flatten
npm install --save-dev @bemoje/arr-flatten
```

## Usage

```javascript
import arrFlatten from '@bemoje/arr-flatten'

arrFlatten([1, [2]])
//=> [1, 2]

arrFlatten([1, [2, [3]]])
//=> [1, 2, 3]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrFlatten

Flattens the passed array recursively.

##### Parameters

-   `arr` **[Array][3]** the array to flatten

##### Returns
**[Array][3]&lt;any>** 

[1]: #arrflatten

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array