let item_1 = 5
let item_2 = 3
let item_3 = item_1+item_2
let item_4 = "Yolochka"
let item_5 = item_3
let item_6 = 15
let item_6_type = typeof(item_6)
let item_7 = String(item_6)
let item_7_type = typeof(item_7)
let age_1 = 1
let age_2 = 18
let age_3 = 60

// console.log(item_1)
// console.log(item_2)
// console.log(item_3)
// console.log(item_4)
// console.log(item_3+item_4)
// console.log(item_3*item_4)
// console.log("item_6== " + item_6, "item_6_type== " + item_6_type)
// console.log("item_7== " + item_7, "item_7_type== " + item_7_type)
// if (age_1<age_2) {
//     console.log("You don’t have access cause your age is", +age_1, ". It’s less then")
// }
// else if (age_1>=age_2 && age_1<age_3) {
//     console.log("Welcome !")
// }
// else if(age_1>age_3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
//     console.log("Technical work")
// }



//1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход 
//возраст. Пример: const checkAge = function(age) { Ваши преобразования } 
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

// const checkAge = function(age) {
// if (age<age_2) {
//     console.log("You don’t have access cause your age is " +age, ". It’s less then " +age_2)
// }
// else if (age>=age_2 && age<age_3) {
//     console.log("Welcome !")
// }
// else if (age>age_3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
//     console.log("Technical work")
// }
// }
// checkAge(17) 
// checkAge(18)
// checkAge(61)




//2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции 
//проверялся тип данных. И если он не Number - кидалась ошибка. 

// const checkAge = function(age) {
// if (typeof age == "number") {
// if (age<age_2) {
//     console.log("You don’t have access cause your age is ", +age, ". It’s less then " +age_2)
// }
// else if (age>=age_2 && age<age_3) {
//     console.log("Welcome !")
// }
// else if (age>age_3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
//     console.log("Technical work") 
// }
// }
// else {console.log("Error! Enter numeric data.")}
// }
// checkAge(17) 
// checkAge(18)
// checkAge(61)
// checkAge("Iren123")


// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
// пропускалось, преобразовываясь в number 

// const checkAge = function(age) {
//     age = Number(age)
// if (!isNaN(age)) {
// if (age<age_2) {
//     console.log("You don’t have access cause your age is ", +age, ". It’s less then " +age_2)
// }
// else if (age>=age_2 && age<age_3) {
//     console.log("Welcome !")
// }
// else if (age>age_3) {
//     console.log("Keep calm and look Culture channel")
// }
// else {
//     console.log("Technical work") 
// }
// }
// else {console.log("Error! Enter numeric data.")}
// }
// checkAge(17) 
// checkAge(18)
// checkAge(61)
// checkAge("29")
// checkAge("Iren123")


//4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке.

const checkAge = function(age) {
    age = Number(age)
if (!isNaN(age)) {
if (age<age_2) {
    console.log("You don’t have access cause your age is ", +age, ". It’s less then " +age_2)
}
else if (age>=age_2 && age<age_3) {
    console.log("Welcome !")
}
else if (age>age_3) {
    console.log("Keep calm and look Culture channel")
}
else {
    console.log("Technical work") 
}
}
else {console.log("Error! Enter numeric data.")}
}
checkAge(17) 
checkAge(18)
checkAge(61)
checkAge("29")
checkAge("Iren123")

let agePrompt=prompt("Enter age")
checkAge(agePrompt)


































































// checkAge("17") 
// checkAge("18")
// checkAge("61")
// checkAge("AVR")
// checkAge("Iren123")
// checkAge(true)
// checkAge(false)
// checkAge(undefined)
// checkAge(null) 
// function checkAge(age) {
//     age = Number(age)
// {
// if (typeof age !== "Number") {
//     console.log("Error! Enter numbers.")
// }
// }
// if (age<18) {
//     console.log("You don’t have access cause your age is", +age, ". It’s less then")
// }
// else if (age>=18 && age<60) {
//     console.log("Welcome !")
// }
// else if (age>60) {
//     console.log("Keep calm and look Culture channel")
// }
// }