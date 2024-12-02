const carPower = prompt('Мощность автомобиля')
let taxRate;

if(carPower < 100) {
    taxRate = 12
} else if(carPower < 125) {
    taxRate = 25
} else if(carPower < 150) {
    taxRate = 35
} else if(carPower < 175) {
    taxRate = 45
} else if(carPower < 200) {
    taxRate = 50
} else if(carPower < 225) {
    taxRate = 65
} else if(carPower < 250) {
    taxRate = 75
} else {
    taxRate = 150
}

const tax = taxRate * carPower
console.log('Сумма налога', tax)