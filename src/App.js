import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setCoins(json);
        setLoading(false)
      });
  }, [])
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => <option key={coin.id}>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option>)}
      </select>
    </div>
  );
}

export default App;
