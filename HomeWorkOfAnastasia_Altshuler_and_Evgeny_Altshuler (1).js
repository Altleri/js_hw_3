"use strict"

//************************************************************************************************
// HOME WORK №3 OF ANASTASIIA ALTSHULER 342776804
// AND EVGENY ALTSHULER 328873773
/*************************************************************************************************/

/********************************Task#5******************************/
//our Array
const fruits = ["apple", "banana", "cherry", "date"];
//what index is it located at ''banana'
const indexOfBanana = fruits.indexOf("banana")
//Use method splice for deleted the banana and add new elements
fruits.splice(indexOfBanana, 1, "blueberry", "blackberry")
//Print the result
console.log(fruits)
/***********************************************************************/


/******************************Task#6********************************/
//our main Array
const colors = ["red", "orange", "yellow", "green", "blue"];
//what index is it located at ''orange' and "yellow"
const orangeIndex = colors.indexOf("orange")
const yellowIndex = colors.indexOf("yellow")

//Check if indexOf found the orange and yellow on Array
if (orangeIndex !== -1 && yellowIndex !== -1) {
  //Use method slice for copy the orange yellow. from orange index + yellow index + one place
  const copyColor = colors.slice(orangeIndex, yellowIndex + 1)
  //Pring the result
  console.log(copyColor)
}
//If the elemets does not exist
else
  console.log("The elements does not exist")
/*************************************************************************/


/****************************Task#7*************************************/
//our main Array
const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];
//Use method concat() to connect arrays
let animals3 = animals1.concat(animals2)
//Pring the result
console.log(animals3)
/*************************************************************************/


/******************************Task#8********************************/
//our Array
const numbers = [7, 3, 9, 1, 5];
//Added fuction that calculated and do sort a<b
numbers.sort(function (a, b) {
  return a - b;
})

//Printed result
console.log(numbers)
/*************************************************************************/


/******************************Task#9********************************/
//our Array
const letters = ["a", "b", "c", "d"];
//Use method reverse() to connect arrays
console.log(letters.reverse())
/*************************************************************************/

/******************************Task#10**********************************/
//our Array
const sentence = "JavaScript is awesome";
//Use split( ) for create Array from the string
let maarah = sentence.split(" ")
//Printed result
console.log(maarah)

/*************************************************************************/


/******************************Task#11**********************************/
//our Array
const words = ["Hello", "world"];
//Use join( ) for create string from the Array
let maarah2 = words.join(" ")

// Printed result
console.log(maarah2)

/*************************************************************************/