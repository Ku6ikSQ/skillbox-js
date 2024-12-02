const hasCard = true
const availableMoney = 500
const summa = prompt("Сумма операции")

if(hasCard && (summa <= availableMoney)) {
    console.log("Операция выполняется")
} else {
    console.log("Операция отклонена")
}