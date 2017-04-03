var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

function generateCard() {
	inquirer.prompt([
	{
		type: "list",
		message: "Which type of flascard would you like to make? Basic or Cloze",
		choices: ["Basic Card", "Cloze Card"],
		name: "cardType"
	}]).then(function(userInput) {
		console.log(userInput)
		if (userInput.cardType.indexOf("Basic") != -1) {
			inquirer.prompt([
			{
				type: "input",
				message: "What is the question?",
				name: "front"
			},
			{
				type: "input",
				message: "What is the answer?",
				name: "back"
			}

			]).then(function(userInput) {
				var bCard = new BasicCard(userInput.front, userInput.back);
				console.log("Front of card: " + bCard.front);
				console.log("Back of card: " + bCard.back);
			})
		} else {
			inquirer.prompt([
			{
				type: "input",
				message: "What is the question?",
				name: "text"
			},
			{
				type: "input",
				message: "What is the cloze?",
				name: "cloze"
			}

			]).then(function(userInput) {
				var cCard = new ClozeCard(userInput.text, userInput.cloze);
				if (cCard.partial() == -1) {
					console.log("Provided cloze was invalid. Please try again.")
				} else {
					console.log("Full text of card: " + cCard.text);
					console.log("Cloze of card: " + cCard.cloze);
					console.log("Partial text of card: " + cCard.partial());
				}
			})
		}
	})
}

generateCard();



// var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial());

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.text);