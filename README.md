# Currency Converter

A simple JavaScript currency converter that fetches live exchange rates from a free API ([exchangerate.host](https://exchangerate.host)). Easily convert amounts between different currencies using this script.

## Features

- Live exchange rates using a free service (no API key required)
- Simple async function for converting any amount between currencies
- Works in browser and Node.js (with `node-fetch`)

## Usage

```js
// Example usage:
convertCurrency(100, 'USD', 'EUR')
  .then(result => {
    if (result) {
      console.log(
        `${result.amount} ${result.from} = ${result.converted.toFixed(2)} ${result.to} (Rate: ${result.rate}, Date: ${result.date})`
      );
    }
  });
```

## API

### `convertCurrency(amount, fromCurrency, toCurrency)`

- `amount` (number): The amount to convert.
- `fromCurrency` (string): The currency code to convert from, e.g. `"USD"`.
- `toCurrency` (string): The currency code to convert to, e.g. `"EUR"`.

Returns a promise that resolves to:

```js
{
  from: 'USD',
  to: 'EUR',
  amount: 100,
  converted: 92.34,
  rate: 0.9234,
  date: "2025-09-09"
}
```

## Setup

### Browser

Just use the function in a script tag. `fetch` is available natively.

### Node.js

Install `node-fetch`:

```sh
npm install node-fetch
```

Add this at the top of your JS file:

```js
const fetch = require('node-fetch');
```

## License

MIT
