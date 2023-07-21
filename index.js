const feet = 3.280 /* feet */
const gallon = 0.264 /* gallon */
const kilogram = 2.204 /* pound */

let inputEl = document.getElementById("user-input")
let convertBtn = document.getElementById("convert-btn")

let lengthConvertedValue = document.getElementById("length-conversion")
let volumeConvertedValue = document.getElementById("volume-conversion")
let massConvertedValue = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", function () {
    if (inputEl.value == "") { 
        alert("Must enter a number.")
    } else if (isNaN(inputEl.value)){
        alert("Must enter a number.")
    } else {
        let floatVal = parseFloat(inputEl.value)
        const metersToFeet = floatVal * feet
        const feetToMeters = floatVal / feet
        lengthConvertedValue.innerHTML = `<p class="text-conversion" id="length-conversion">
        ${floatVal} meters = ${metersToFeet.toFixed(3)} feet | ${floatVal} feet = ${feetToMeters.toFixed(3)} meters
    </p>
    `
        const litersToGallons = floatVal * gallon
        const gallonsToLiters = floatVal / gallon
        volumeConvertedValue.innerHTML = `<p class="text-conversion" id="volume-conversion">
        ${floatVal} liters = ${litersToGallons.toFixed(3)} gallons | ${floatVal} gallons = ${gallonsToLiters.toFixed(3)} liters
    </p>
    `

        const kilosToPounds = floatVal * kilogram
        const poundsToKilos = floatVal / kilogram
        massConvertedValue.innerHTML = `<p class="text-conversion" id="mass-conversion">
        ${floatVal} kilos = ${kilosToPounds.toFixed(3)} pounds | ${floatVal} pounds = ${poundsToKilos.toFixed(3)} kilos
    </p>
    `
        // alert("Successfully converted!")
    }

})