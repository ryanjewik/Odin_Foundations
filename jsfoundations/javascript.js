const  myBirthday = '07.01.2002';

let admin, name;


name = "John";
admin = name;
//alert(admin);

number = Number(prompt("enter a number"))

function add7(num){
    return num +7
}

alert(add7(number))


number1 = Number(prompt("enter the first number"))
number2 = Number(prompt("enter the second number"))
function multiply(num1, num2){
    return num1 * num2
}
alert(multiply(number1, number2))


stringTest = String(prompt("enter a string"))
function capitalize(input){
    let lowerString = input.slice(1).toLowerCase()
    let firstChar = input[0].toUpperCase()
    return firstChar + lowerString
}
alert(capitalize(stringTest))

string1 = String(prompt("enter a string"))
function lastletter(stringInput){
    let stringLength = stringInput.length
    return stringInput[stringLength -1]
}
alert(lastletter(string1))