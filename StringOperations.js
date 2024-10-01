let firstName = 'Glenn'
let lastName = 'De Paula';
let fullName = firstName.concat(lastName)

console.log('Full name is ' + firstName + ' ' + lastName);
console.log(`Full name is ${fullName}`);
console.log('Total chars in the string is ' + fullName.length);
console.log('Upper case is ' + fullName.toUpperCase())
console.log('Lower case is ' + fullName.toLowerCase())

let str1 = "Clean World, Green World"
console.log(str1.replace(/World/g, 'Philippines'))
