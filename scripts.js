/* Selected elements from the DOM that has to do with the temperature to be converted */
const tempValue = document.getElementById("entered_values");
const fromSelect = document.getElementById("from_temperature");
const toSelect = document.getElementById("to_temperature");
const fromTempDescr = document.querySelector(".from_unit_description");
const toTempDescr = document.querySelector(".to_unit_descripion");
const convertBtn = document.querySelector(".conversion_button");
/* Selected elements from the DOM that has to do with the temperature result */
const inputValue = document.querySelector(".input_result");
const outputValue = document.querySelector(".output_result");
/* Temperatures and their description C - celcius, k-kelvin... */
const cDescr = "Metric scale where water freezes at 0°C and boils at 100°C";
const fDescr = "Imperial scale where water freezes at 32°F and boils at 212°F";
const kDescr =
  "Scientific scale where water freezes at 273.15 K and boils at 373.15 K";
// initial states
let fromTemp = "Celsius";
let toTemp = "Farenheit";

function descrValue(value) {
  let temp = value.target.value;
  if (temp === "Celsius") {
    return cDescr;
  } else if (temp === "Farenheit") {
    return fDescr;
  } else if (temp === "Kelvin") {
    return kDescr;
  }
}
function state(value) {
  let iD = value.target.id;
  let temp = value.target.value;
  if (iD === "from_temperature") {
    fromTemp = temp;
  } else if (iD === "to_temperature") {
    toTemp = temp;
  } else {
    return;
  }
}

fromSelect.addEventListener("change", (info) => {
  fromTempDescr.innerText = descrValue(info);
  state(info);
  console.log(fromTemp, toTemp);
});
toSelect.addEventListener("change", (info) => {
  toTempDescr.innerText = descrValue(info);
  state(info);
  console.log(fromTemp, toTemp);
});
/* Conversion formula functions */
const converter = {
  // Farenheit to celcius
  fhrCel: function (F) {
    return ((F - 32) * 5) / 9;
  },
  // Farenheit to kelvin
  fhrKel: function (F) {
    return ((F - 32) * 5) / 9 + 273.15;
  },
  // Celcius to Farenheit
  celFhr: function (C) {
    return (C * 9) / 5 + 32;
  },
  // Celcius to Kelvin
  celKel: function (C) {
    return C + 273.15;
  },
  // Kelvin to fahrenheit
  kelFhr: function (K) {
    return ((K - 273.15) * 9) / 5 + 32;
  },
  // Kelvin to celcius
  kelCel: function (K) {
    return K - 273.15;
  },
};
convertBtn.addEventListener("click", () => {
  let valueToConvert = tempValue.valueAsNumber;
  let convertedValue;
  console.log(valueToConvert);
  if (fromTemp === "Farenheit" && toTemp === "Celsius") {
    convertedValue = converter.fhrCel(valueToConvert);
  } else if (fromTemp === "Farenheit" && toTemp === "Kelvin") {
    convertedValue = converter.fhrKel(valueToConvert);
  } else if (fromTemp === "Celcius" && toTemp === "Farenheit") {
    convertedValue = converter.celFhr(valueToConvert);
  } else if (fromTemp === "Celsius" && toTemp === "Kelvin") {
    convertedValue = converter.celKel(valueToConvert);
  } else if (fromTemp === "Kelvin" && toTemp === "Farenheit") {
    convertedValue = converter.kelFhr(valueToConvert);
  } else if (fromTemp === "Kelvin" && toTemp === "Celsius") {
    convertedValue = converter.kelCel(valueToConvert);
  }
  inputValue.textContent = `${valueToConvert}`;
  outputValue.textContent = `${convertedValue}`;
});
