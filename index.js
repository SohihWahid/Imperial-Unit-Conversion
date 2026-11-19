const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthFeet = document.getElementById("length-feet")
let litersGallons = document.getElementById("liters-gallons")
let kilogramsPounds = document.getElementById("kilograms-pounds")

convertBtn.addEventListener("click", function(){
    convert()
})

function convert(){
    let inputValue = inputEl.value
    lengthFeet.innerHTML = `${inputValue} meters = ${(Number(inputValue) * 3.28084).toFixed(2)} feet | ${inputValue} feet = ${(Number(inputValue)/3.28084).toFixed(2)} meeters`
    litersGallons.innerHTML = `${inputValue} liters = ${(Number(inputValue) * 0.264).toFixed(2)} gallons | ${inputValue} gallons = ${(Number(inputValue)/0.264).toFixed(2)} liters`
    kilogramsPounds.innerHTML = `${inputValue} kilos = ${(Number(inputValue) * 2.204).toFixed(2)} pounds | ${inputValue} pounds = ${(Number(inputValue)/2.204).toFixed(2)} kilos`
}