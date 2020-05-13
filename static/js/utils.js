// fetch the current Kraken price (latest trade)
// example: https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD

fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const price = data.result.XXBTZUSD.c[0];
    const pricerounded = Math.floor(price);
    console.log("price rounded down: ", pricerounded);

    document.getElementById("current-price").innerText = "$ " + pricerounded;
  });
