/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable

let animal = "321"

// 2.) Change the value of this variable

animal = animal.length //3

// 3.) Change the data type of this variable

animal = String(animal) // "3"
animal = animal.length
animal = cow

// 4.) Create another variable and the one from above to concatenate

let sound = "moo"
let rhyme = animal + sound // cowmoo

// 5.) Use any of the variables above or create new ones and print using string interpolation

`The ${animal} goes ${sound}!`
return: 'The cow goes moo!'

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let name = "Sabrina"
let letter = name.CharAt(4)
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

//Definition of Unicode:a)Unicode is a universal character encoding standard. This standard includes roughly 100000 characters to represent characters of different languages. While ASCII uses only 1 byte the Unicode uses 4 bytes to represent characters. Hence, it provides a very wide variety of encoding. b)an international encoding standard for use with different languages and scripts, by which each letter, digit, or symbol is assigned a unique numeric value that applies across different platforms and programs

teddy = "Teddy"
let letter3 = teddy.charCodeAt(3) // 100

// Using fromCharCode() - make it readable for us :). You'll see!

console.log(String.fromCharCode(100)); // d

// Take your first and last name and concat()

const array1 = ['Suzanne']
const array2 = ['Mozes'];
const array3 = array1.concat(array2);
console.log(array3)
['Suzanne', 'Mozes']

// Create a string and make it return true using startsWith()

const good = 'Let the good times roll!'
console.log(good.startsWith('L')) // true

// Now use any variable with endsWith() and return false

console.log(good.endsWith("rolls!"))

// Finish the following sentence. Use includes() and return true.

const ozgur = 'Once upon a time Ozgur looked up at the Moon, and all he saw was the sun.'
console.log(ozgur.includes('saw was the'))

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?

const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const myArray = joshHadALittleLambOopsCow.split(" ")
let result = myArray.indexOf('cow')
console.log(result) // 27

OR 

let result = joshHadALittleLambOopsCow.split(" ").indexOf('cow');
console.log(result) // 27

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."

let vanessadieomega = vanessa.replace(vanessa.slice((vanessa.lastIndexOf('Vanessa'))), "diebitch");

OR

let vanessadie = vanessa.lastIndexOf('Vanessa')

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
let answer = noWeCantTeo.length //20

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

let vegeta = replaceGokuWithVegeta.replace("Goku", "Vegeta")

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 

const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
let wifey = joshIsLookingForWifey.search('wifey') // 9

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
let otherhalf = pizzaSentence.slice(7)
console.log(otherhalf)

// Now using the pizza sentence, return only pizza (before the comma)
let pizza = pizzaSentence.slice(0,5)
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.

const splitTheBill = "Yaz, Poornima, and Leshawn"
console.log(splitTheBill.split(" "))

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

console.log(splitTheBill.split(""))

// Use this toLowerCase()

const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
let chill = angry.toLowerCase()
console.log(chill)

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

const tuan = "YOU HURT MY FEELINGS WHEN YOU DRANK THE LAST DIET COKE."
let relax = tuan.toLowerCase()
console.log(relax)

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
let str = jahlunSaidToPutSomeRespectToHisName.toUpperCase()
console.log(str)

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
let ell = basicGreeting.substring(1, 4)
console.log(ell)

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
let really = ohReally.substring(0, 10)
console.log(really)

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
let aol = aslDays.substring(15)
console.log(aol)

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.

let str = "         oh baby hold onto my handles        "
let skinny = str.trim()
console.log(skinny)

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b > a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

for(let i = 1; i < 11; i++){
  console.log('Ken's room spun ten times.')
}

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

for(let i = 1; i < 21; i++){
  console.log('His vision spun 20 times.')
}

// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
j = 0
while(j <+ 20){
  console.log("I'm sorry");
  j++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clotes',
  thing3: 'gaming console'
}

let text =  ""
for (x in whateverQueenBeySaid){
  console.log(whateverQueenBeySaid[x]);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

for (x in lana){
  console.log(lana[x])
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

let text = ""
for(let x of tia){
  console.log(text = x)
}
// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan'];
let text = '';
perscholas.forEach(myFunction);

function myFunction(item) {
  let ps = " PS"
  console.log(item + ps);
}

// git add .
// git commit -m    MESSAGETKINQUOTES
// git push origin main
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
push(adds to end of array)
pop(deletes last element in array)
unshift(adds more elements to beg of an array and returns the new length of the array)
shift(takes the last element of an array and returns that element permanently changing the array)
concat(adds together all elements)
splice(copies a section of an array not inclusive and does not permanently change orginal array)
slice(changes contents of an array by removing or inserting elements)
sort( updates array in alpha order based on Unicode order system)
includes(boolean method that looks for exact elements in a match but not insude the strings for partial matches)
indexOf(returns where that value is in an array)
length(the total number of items in the array)

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])
// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.

console.log(fruits.join(" "))

// Remove orange
console.log(fruits.pop())
// Add strawberry, kiwi, and grapes at the end
console.log(fruits.push("strawberry", "kiwi", "grapes"))

// Remove apple
console.log(fruits.splice(0, 1))
// Add mango at the beginning of the array
console.log(fruits.unshift("mango"))
// Add lemon, and grapefruit between mango and banana
console.log(fruits.splice(1, 0, "lemon", "grapefruit"))
// Remove banana and strawberry
console.log(fruits.splice(3, 2))

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const newFruits = ['pinapple', 'papaya', 'pomegranite']

const allFruits = fruits.concat(newFruits) // allFruits = ['mango', 'lemon', 'grapefruit', 'kiwi', 'grapes', 'pinapple', 'papaya', 'pomegranite']
// Print the last two exotic fruits without altering the newly concatenated array.

console.log(allFruits.slice(6))


// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]

// ===== HIGHER ORDER METHODS =====
??// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const rafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

const myArray = rafaelNoBadWords.split(' ')
const result = rafaelNoBadWords.filter(remove)

function remove(myArray) {
  return myArray.slice() -  
}
 // nothing works

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
??const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
??const total = ""
??function add(total, num) {
  return total + num
}

??console.log(numbersToAddUp.reduce(total))

// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.

// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
console.log('Anthony wants ' + donutShop[1][0][1] + '.')
// Tosi wants ihatethis. :) Print!
console.log('Tosi wants ' + donutShop[2][0][0][1] + '.')
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'

let person = ""
if (teo = person){
  console.log('Teo is a person!')
}
else {
  console.log('Teo is not a person')
}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
let person = ""
if (teo ==== person){
  if(teo === male){
    console.log('You got it right!')
  }
  else{
    console.log('Wrong. Teo is going to remove you from the class.')
  }
}
else {
  console.log('Teo is not a person')
}

// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'

let person = ""
if (teo ==== person){
  if(teo === male){
    if(teo === hungry){
      console.log('Let's buy Teo some tacos!')
    } else if {
      teo === notHungry
      console.log('He doesn't need to eat.')
    } else {
      console.log('If Teo is not hungry, am I hungry?')
    }
  }
  }
  else{
    console.log('Wrong. Teo is going to remove you from the class.')
  }
}
else {
  console.log('Teo is not a person')
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
let gustavo = 
let james =

if (gustavo = coolest){
  console.log('You got that right!')
} else {
  console.log('James wants to argue. He says he's the best!')
}

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.


// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

// Create a function expression with your first name as the variable and then print your first and last name

// Create an arrow function that accepts a number and have it return that number doubled

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

let human = {
  name: 'Bruno',
  age: '8',
  location: 'bed',
}


// Access the name using dot notation

human.name

// Access the age using square brackets
human['name']
// Use object destructuring to access location


??({name, age, location} = human); //disappears from console
console.log('location')
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
bulbasaur.abilities[0]
// Print cut
bulbasaur.moves[2]

// Print Bulbahhhh!!!!!
bulbasaur.sound()


// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bubulbasaur.height = 7

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1

// Print an array that contains every single properties in bulbasaur
console.log([bulbasaur])
// Print every single properties one by one in the console
??
// Print an array that contains every single values in bulbasaur
??