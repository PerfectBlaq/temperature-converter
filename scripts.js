/* Selected elements from the DOM that has to do with the temperature to be converted */
const tempValue = document.getElementById("entered_values");
const fromSelect = document.getElementById("from_temperature");
const toSelect = document.getElementById("to_temperature");
const fromTempDescr = document.querySelector(".from_unit_description");
const toTempDescr = document.querySelector(".to_unit_descripion");
const convertBtn = document.querySelector(".conversion_button");
/* Selected elements from the DOM that has to do with the temperature result */
const inputValue = document.querySelector(".input_result");
const outputValue = document.querySelector("output_result");
/* Temperatures and their description C - celcius, k-kelvin... */
const cDescr = "Metric scale where water freezes at 0°C and boils at 100°C";
const fDescr = "Imperial scale where water freezes at 32°F and boils at 212°F";
const kDescr =
  "Scientific scale where water freezes at 273.15 K and boils at 373.15 K";
function descrValue(value) {
  if (value === "Celsius") {
    return cDescr;
  } else if (value === "Farenheit") {
    return fDescr;
  } else if (value === "Kelvin") {
    return kDescr;
  }
}

// initial states
let fromTemp = "Celsius";
let toTemp = "Farenheit";
fromSelect.addEventListener("change", (info) => {
  let value = info.target.value
  fromTempDescr.innerText = ;
});
toSelect.addEventListener("change", (info) => {
  if (info.target.value === "Celsius") {
    toTempDescr.innerText = cDescr;
  } else if (info.target.value === "Farenheit") {
    toTempDescr.innerText = fDescr;
  } else if (info.target.value === "Kelvin") {
    toTempDescr.innerText = kDescr;
  }
});
