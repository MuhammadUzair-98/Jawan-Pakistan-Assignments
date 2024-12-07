const arrays = [
    42,
    true,
    "Hello World",
    {
        name: "john",
        age: 25,
        isStudent: false
    },
    false,
    3.14,
    "Javascript is fun!"
];

// Question # 01

// let stringEle = arrays.map(element => element.toString())
// console.log(stringEle)


// Question # 02

// let onlyNum = arrays.filter(element => typeof(element) === "number")
// console.log(onlyNum)


// Question # 03

// arrays.forEach(element => console.log(typeof(element)))


// Question # 04

// let numSumUp = arrays.reduce((firstElement, secElement) => typeof(secElement) === "number" ? firstElement + secElement : firstElement,0 )
// console.log(numSumUp)


// Question # 05

// let findBoolean = arrays.find(element => typeof(element) === "boolean")
// console.log(findBoolean)


// Question # 06

// let findObjIndex = arrays.findIndex(element => typeof(element) === "object")
// console.log(findObjIndex)


// Question # 07

// let someNumber = arrays.some(element => typeof(element) === "number")
// console.log(someNumber)


// Question # 08

// let everyString = arrays.every(element => typeof(element) === "string")
// console.log(everyString)