import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const [coin, setCoin] = useState(null);
  const { symbol } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCoin();
  }, [symbol]);

  if (!coin) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
      <h2>{coin.rate}</h2>
    </div>
  );
}
