import React, { useState } from 'react';

function CurrencyConverter() {
  const exchangeRate = {
    "0" : {"currency" : "usd", "rate" : 80}, "1": {"currency" : "dnr", "rate" : 12}, "2": {"currency" : "eur", "rate" : 120}
  }
  const [input, setInput] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [exchangedRate, setExchangedRate] = useState(0);

  const onInput = (e) => {
    setInput(e.target.value)
    const _currency = Object.values(exchangeRate).find(obj => obj.currency === currency);
    setExchangedRate(e.target.value*_currency.rate)
  }

  const onChnageCurrency = (e) => {
    setCurrency(e.target.value)
    const usdRateObject = Object.values(exchangeRate).find(obj => obj.currency === e.target.value);
    setExchangedRate(input*usdRateObject.rate)
  }

  return (
    <div className="">
      <input onChange={(e) => onInput(e)} />

      <select name="dollar" id="usd" onChange={(e) => onChnageCurrency(e)}>
        <option value="usd" >USD</option>
        <option value="dnr">Dinar</option>
        <option value="eur">EUR</option>
      </select>
      {exchangedRate}
    </div>
  );
}

export default CurrencyConverter;
