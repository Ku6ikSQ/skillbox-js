function celsiusToFahrenheit(celsium) {
    return celsium*1.8 + 32
}

function fahrenheitToCelsius(farenheit) {
    return (farenheit-32) / 1.8
}

console.log(celsiusToFahrenheit(25))
console.log(fahrenheitToCelsius(77))