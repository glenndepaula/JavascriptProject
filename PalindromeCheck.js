let str1 = 'racecar'
let is_palindrome = true;
for(let i = 0; i < str1.length/2; i++) {
    let char1 = str1.charAt(i);
    let char2 = str1.charAt(str1.length-i-1)
    // console.log(char1 + ' vs ' + char2)
    if(char1 != char2) {
        is_palindrome = false
        break;
    }
}
if(is_palindrome) {
    console.log(str1 + ' is a palindrome')
} else {
    console.log(str1 + ' is not a palindrome')
}