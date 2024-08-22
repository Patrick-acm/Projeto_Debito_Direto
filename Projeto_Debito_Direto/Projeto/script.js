// Função para buscar e exibir a cotação do dólar de cada API

// ExchangeRate-API
fetch('https://v6.exchangerate-api.com/v6/79e15b0d2d6edd6e21e13132/latest/USD')
  .then(response => response.json())
  .then(data => {
    const rate = data.conversion_rates.BRL;
    document.getElementById('rate-exchange-rate-api').textContent = rate.toFixed(2);
  })
  .catch(error => console.error('Erro:', error));

// OpenExchangeRates
fetch('https://openexchangerates.org/api/latest.json?app_id=91148d8fb1b643f4af73059b863c61ec')
  .then(response => response.json())
  .then(data => {
    const rate = data.rates.BRL;
    document.getElementById('rate-open-exchange-rates').textContent = rate.toFixed(2);
  })
  .catch(error => console.error('Erro:', error));

// CurrencyLayer
fetch('http://apilayer.net/api/live?access_key=55e42b4d3b31fe2db60221f9ee4afbcf')
  .then(response => response.json())
  .then(data => {
    const rate = data.quotes.USDBRL;
    document.getElementById('rate-currency-layer').textContent = rate.toFixed(2);
  })
  .catch(error => console.error('Erro:', error));
