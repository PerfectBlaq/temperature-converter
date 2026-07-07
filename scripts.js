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
  }else{
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
// function farenheit(

// )
