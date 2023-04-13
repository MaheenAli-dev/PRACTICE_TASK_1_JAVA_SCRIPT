

//   ASSIGNMENT 1
//   BQ - JavaScript
//   DATE - 13/04/2023
//   DAY -  THURSDAY



// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx"?

// ANSWER

// var zakatPercentage = 0.025;
// var userInput = Number(prompt("Enter a number"));
// var result  =   zakatPercentage * userInput;
// alert("Your zakat value is " + result); 






// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message?


// ANSWER

// var familyMembers = parseInt(prompt("Enter the total number of family members:"));

// var fitrahMethod = prompt("Choose a fitrah method: \n1. wheat - 250Rs per person \n2. Barley - 450Rs per person \n3. Dates - 2100Rs per person \n4. Raisins - 2800Rs per person");

// var fitrahPrice;

// if (fitrahMethod === "1" || fitrahMethod === "wheat") {
//     fitrahPrice = 250;
// } else if (fitrahMethod === "2" || fitrahMethod === "Barley") {
//     fitrahPrice = 450;
// } else if (fitrahMethod === "3" || fitrahMethod === "Dates") {
//     fitrahPrice = 2100;
// } else if (fitrahMethod === "4" || fitrahMethod === "Raisins") {
//     fitrahPrice = 2800;
// }

// else {
//     alert("Invalid input. please Choose from the given fitrah methods.");
// }

// var fitrahAmount = familyMembers * fitrahPrice;

// alert("The fitrah amount for " + familyMembers + " family members using the " + fitrahMethod + " method is Rs" + fitrahAmount + ".");





// TASK 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.Use an if-else statement to check if the user's guess matches the secret number. Ifthe guess is correct, display a message using an alert saying "Congratulations! You guessed the secret number". Otherwise, if the guess is too high or too low, display an appropriate message informing the user to guess again ?

// ANSWER

// var secretNumber = 7;
// var guess = prompt("Guess the secret number (between 1 and 10):");
// if (guess == secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
// } else if (guess < secretNumber) {
//     alert("Your guess is too low. Please guess again.");
//     console.log("Your guess is too low. Please guess again.");
// } else {
//     alert("Your guess is too high. Please guess again.");
//     console.log("Your guess is too high. Please guess again.");
// }





// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case)?

// ANSWER

// var user = prompt("ENTER YOUR NAME");

// console.log(user);

// var first = user.charAt(0);

// console.log(first);

// console.log(first.toUpperCase());

// var rem = user.slice(1);

// console.log(rem);

// console.log(rem.toLowerCase());

// var caps = first.toUpperCase() + rem.toLowerCase();

// console.log(caps);

// alert(caps);



// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console?

// ANSWER

// var contactNumbers = [];
// var contactNames = [];

// for (var i = 0; i < 3; i++) {
//   var number = prompt("Enter your contact number:");
//   var name = prompt("Enter your contact name:");
//   contactNumbers.push(number);
//   contactNames.push(name);
// }

// for (var i = 0; i < contactNumbers.length; i++)
// {
//   console.log(`Contact ${i+1}: ${contactNumbers[i]} (${contactNames[i]})`);
//   alert(`Contact ${i+1}: ${contactNumbers[i]} (${contactNames[i]})`);
// }





// Task 6:
// Create an Array that contains different products, and get input from the user in which youask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining?

// ANSWER

// var products = ['Apple', 'Hockey', 'Orange', 'Cat', 'watermalon'];

// var position = prompt("Enter the position of the item you want to remove:\n0. Apple  \n1.Hockey  \n2.Orange \n3.Cat \n4.watermalon");

// var removedItem = products.splice(position, 1)[0];

// console.log(`The removed item is ${removedItem}`);
// alert(`The removed item is ${removedItem}`);

// console.log(`The remaining items are ${products}`);
// alert(`The remaining items are ${products}`);

// console.log(`The total number of remaining items is ${products.length}`);
// alert(`The total number of remaining items is ${products.length}`);





// TASK 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt function. The program should then use nested if-else statements to determine if the person is eligible to vote. First, the program should check if the person is Pakistani or Indian. If they are not, the program should display a message saying they are not eligible to vote.If they are Pakistani or Indian, the program should then check their gender. If the person is male and over the age of 18, they are eligible to vote. If the person is female and over the age of 18, the program should ask if they are married. If they are married, they are eligible to vote. If they are not married, they are not eligible to vote.If the person is under 18, the program should display a message saying they are not eligibleto vote ?





// var nationality = prompt("What is your nationality?");
// var gender = prompt("What is your gender?");
// var age = parseInt(prompt("What is your age?"));

// if (nationality === "Pakistani" || nationality === "pakistani" || nationality === "PAKISTANI" || nationality === "Indian" || nationality === "indian" || nationality === "INDIAN") {
//     if (gender === "male" || gender === "Male" && age >= 18) {
//         console.log("You are eligible to vote.");
//         alert("You are eligible to vote.");
//     } else if (gender === "female" || gender === "Female" && age >= 18) {
//         var married = prompt("Are you married? (yes or no)");
//         if (married === "yes" || married === "Yes" || married === "YES") {
//             console.log("You are eligible to vote.");
//             alert("You are eligible to vote.");
//         } else {
//             console.log("You are not eligible to vote.");
//             alert("You are not eligible to vote.");
//         }
//     } else {
//         console.log("You are not eligible to vote.");
//         alert("You are not eligible to vote.");
//     }
// } else {
//     console.log("You are not eligible to vote.");
//     alert("You are not eligible to vote.");
// }











// TASK 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows match from the WorldCupSquad array?

// ANSWER 1

// var WorldCupSquad = ["babar", "shaheen", "rizwan", "shadab", "ihsanullah", "naseem", "fakhar", "hasnain", "shahid afridi", "asif", "saim", "rauf", "haris", "malik", "ifti"];

// var FinalTeamplayers = WorldCupSquad.slice(0, 11);

// console.log(WorldCupSquad);
// alert(WorldCupSquad);
// console.log(FinalTeamplayers);
// alert(FinalTeamplayers);





// ANSWER 2

var WorldCupSquad = ["babar", "shaheen", "rizwan", "shadab", "ihsanullah", "naseem", "fakhar", "hasnain", "shahid afridi", "asif", "saim", "rauf", "haris", "malik", "ifti"];

var WorldCupSquadCopy = WorldCupSquad.slice();

var finalTeamPlayers = [];
for (var i = 0; i < 11; i++) {
  var player = WorldCupSquadCopy.pop();
  finalTeamPlayers.push(player);
}
console.log(WorldCupSquad);
alert(WorldCupSquad);
console.log(finalTeamPlayers);
alert(finalTeamPlayers);


































































