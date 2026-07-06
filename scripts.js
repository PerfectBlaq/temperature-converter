const tempValue = document.getElementById("entered_values");
const fromTemp = document.getElementById("from_temperature");
const toTemp = document.getElementById("to_temperature");
const fromTempDescr = document.querySelector(".from_unit_description");
const toTempDescr = document.querySelector(".to_unit_descripion");
const convertBtn = document.querySelector(".conversion_button");
// console.log(fromTempDescr, toTempDescr);
// function onSelect(info){
//     console.log(info);
// }
/* Temperatures and their description C - celcius, k-kelvin... */
const cDescr = "Metric scale where water freezes at 0°C and boils at 100°C";
const fDescr = "Imperial scale where water freezes at 32°F and boils at 212°F";
const kDescr =
  "Scientific scale where water freezes at 273.15 K and boils at 373.15 K";
// initial states
let from = "Celsius";
let to = "Farenheit";
fromTemp.addEventListener("change", (info) => {
  if (info.target.value === "Celsius") {
    fromTempDescr.innerText = cDescr;
  } else if (info.target.value === "Farenheit") {
    fromTempDescr.innerText = fDescr;
  } else if (info.target.value === "Kelvin") {
    fromTempDescr.innerText = kDescr;
  }
});
toTemp.addEventListener("change", (info) => {
  if (info.target.value === "Celsius") {
    toTempDescr.innerText = cDescr;
  } else if (info.target.value === "Farenheit") {
    toTempDescr.innerText = fDescr;
  } else if (info.target.value === "Kelvin") {
    toTempDescr.innerText = kDescr;
  }
});
