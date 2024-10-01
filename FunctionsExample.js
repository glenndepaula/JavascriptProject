function add(num1, num2) {
    return num1 + num2;
}

export function power(num1, num2) {
    return Math.pow(num1, num2)
}

export function compute(num1, num2) {
    return power(num1, num2) - add(num1, num2);
}

let result = add(6, 6)
console.log(result);
let result2 = power(2, 4)
console.log(result2);
let result3 = compute(3, 2)
console.log(result3)
