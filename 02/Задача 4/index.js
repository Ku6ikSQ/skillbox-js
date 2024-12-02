const currentYear = 2024

let index = 0;

const name1 = prompt('Имя')
const birthYear1 = prompt('Год рождения')
const year1 = currentYear-birthYear1

const name2 = prompt('Имя')
const birthYear2 = prompt('Год рождения')
const year2 = currentYear-birthYear2

const name3 = prompt('Имя')
const birthYear3 = prompt('Год рождения')
const year3 = currentYear-birthYear3


index++
console.log(index, name1, year1)

index++
console.log(index, name2, year2)

index++
console.log(index, name3, year3)

console.log((year1+year2+year3)/3)