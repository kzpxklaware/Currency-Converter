// Currency Converter using a free API (exchangerate.host)
// This script fetches live exchange rates and converts currency.

// Usage:
// convertCurrency(100, 'USD', 'EUR').then(result => console.log(result));

async function convertCurrency(amount, fromCurrency, toCurrency) {
  // Ensure currency codes are uppercase
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  // Use exchangerate.host's free API
  const url = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();

    if (data.result === undefined) {
      throw new Error("Invalid currency code or API error.");
    }

    return {
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
      converted: data.result,
      rate: data.info.rate,
      date: data.date
    };
  } catch (error) {
    console.error("Conversion error:", error.message);
    return null;
  }
}

// Example usage:
convertCurrency(100, 'USD', 'EUR')
  .then(result => {
    if (result) {
      console.log(
        `${result.amount} ${result.from} = ${result.converted.toFixed(2)} ${result.to} (Rate: ${result.rate}, Date: ${result.date})`
      );
    }
  });

/*
  Note:
  - You can use this function in Node.js (with node-fetch) or in the browser (native fetch).
  - For Node.js, install node-fetch: npm install node-fetch and add:
    const fetch = require('node-fetch');
*/
