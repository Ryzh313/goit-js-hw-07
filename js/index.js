function calculateTotal(number) {
    let sum = 0;
    for (let i = 0; i <= number; i += 1)
    sum += i;    
    return sum;
}
console.log(calculateTotal(24));