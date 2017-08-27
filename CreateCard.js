// Call the basic card module
var Basic = require("./BasicCard.js");
// Call the cloze card module
var Cloze = require("./ClozeCard.js");
// Call the inquirer package
var inquirer = require("inquirer");

// Create inquirer for user to use BasicCard and ClozeCard modules in order
// to create new cards.
inquirer.prompt([
	// What kind of card does the user want to create?
	{
		type: "list",
		message: "Please select the type of flash card you would like to create",
		choices: ["Basic Card", "Cloze Card"],
		name: "type"
	}
])
.then(function(inquirerResponse) {
	// Run basic or cloze card function depending on the response
	switch(inquirerResponse.type) {
		// If user wants to create basic card run the following commands
		case "Basic Card":
			// Run inquirer prompt to determine inputs
			inquirer.prompt([
				// Ask for the front
				{
					type: "input",
					message: "Please type in the question for the basic card",
					name: "front"
				},
				// Ask for the back
				{
					type: "input",
					message: "Please type in the answer for the basic card",
					name: "back"
				}
			])
			.then(function(inquirerResponse){
				// Run the basic card module with the inquirer responses
				Basic(inquirerResponse.front, inquirerResponse.back);
			});
			break;
		// If the user wants to create a cloze card run the following commands
		case "Cloze Card":
			// Run the inquirer prompt to determine inputs
			inquirer.prompt([
			// Ask for the full text
				{
					type: "input",
					message: "Please enter the full text for the cloze card",
					name: "fullText"
				},
				// Ask for the cloze portion of the text
				{
					type: "input",
					message: "Please enter the cloze text for the card.",
					name: "cloze"
				}				
			])
			.then(function(inquirerResponse){
				// Run the cloze card module with the inquirer responses
				Cloze(inquirerResponse.fullText, inquirerResponse.cloze);
			});
			break;
	};
});