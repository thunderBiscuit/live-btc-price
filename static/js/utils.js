// fetch the latest Kraken price (latest trade)
// example: https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD

// first call
console.log("fetching latest Kraken USD price...");
fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const price = data.result.XXBTZUSD.c[0];
    const pricerounded = Math.floor(price);
    console.log("latest Kraken price: ", pricerounded);

    document.getElementById("current-price").innerText = "$ " + pricerounded;
  });

// query back the API every 5 seconds
setInterval(function () {
  console.log("fetching latest Kraken USD price...");
  fetch("https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      const price = data.result.XXBTZUSD.c[0];
      const pricerounded = Math.floor(price);
      console.log("latest price: ", pricerounded);

      document.getElementById("current-price").innerText = "$ " + pricerounded;
    });
}, 5000);
