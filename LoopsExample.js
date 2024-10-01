let num = 13

let i = 0;
// for(i = 1; i <= 10; i++)
while(i++ <=10){
    // console.log(`${num} * ${i} = ` + (num * i));
}

let odd = 1;
while(odd < 50) {
    // console.log(odd);
    odd = odd + 2
}

let numbers = 342145
let total = 0
let rev_str = ''
let rev_num = 0
while(numbers > 0) {
    // get last digit 
    let rem = numbers % 10

    total = total + rem // compute for new total
    rev_str += rem // append to the end of the string
    rev_num = rev_num * 10 + rem // compute for new reverse number
    
    // next number
    numbers = numbers/10 - rem/10
}
console.log('Total is ' + total);
console.log('Reverse as string is ' + rev_str)
console.log('Reverse as number is ' + rev_num)

let names = ['a', 'b', 'c']
names.forEach((n) => { console.log(n) })
