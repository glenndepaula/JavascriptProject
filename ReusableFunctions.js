export function isEvenOrOdd(number) {
    if(number % 2 == 0) return 'even'
    return 'odd'
}

export function isPrimeNumber(number) {
    for(let i = 2; i < number; i++) {
        if(number % i == 0)
            return false
    }
    return true
}
