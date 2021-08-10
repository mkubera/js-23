const currencies = {
  AUD: 1.5965,
  BGN: 1.9558,
  BRL: 6.1471,
};
const currenciesDOM = document.querySelector("#currencies");

const newSelect = document.createElement("select");

for (const currency in currencies) {
  console.log(currency);
  console.log(currencies[currency]);
  const newOption = document.createElement("option");
  newOption.innerText = `${currency}: ${currencies[currency]}`;
  newSelect.appendChild(newOption);
}

currenciesDOM.appendChild(newSelect);
