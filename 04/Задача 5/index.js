function totalSum(priceItem, amountItem, discountItem) {
    return priceItem*(100-discountItem)*amountItem
}

console.log(totalSum(25000, 3, 20))